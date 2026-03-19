const fs = require('fs');
const path = require('path');
const { Marked } = require('marked');
const { markedHighlight } = require('marked-highlight');
const hljs = require('highlight.js');

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    }
  })
);

const CONTENT_DIR = path.join(__dirname, 'content');
const OUTPUT_DIR = path.join(__dirname, 'website');
const TEMPLATE_PATH = path.join(__dirname, 'template.html');

const config = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'config.json'), 'utf-8'));
const languages = config.languages;
const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// Clean output dir
if (fs.existsSync(OUTPUT_DIR)) {
  fs.readdirSync(OUTPUT_DIR).forEach(f => {
    const fp = path.join(OUTPUT_DIR, f);
    if (fs.statSync(fp).isFile()) fs.unlinkSync(fp);
  });
} else {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Parse markdown with inline language markers.
 *
 * Format: <!--en-->English text<!--th-->Thai text<!--/-->
 * Content outside markers is SHARED (shown in all languages).
 * A single <!--/--> closes the entire en/th group.
 *
 * Returns { en: "html...", th: "html..." }
 */
function parseMultiLang(mdContent) {
  const segments = [];
  // Match a full language group: <!--en-->...<!--th-->...<!--/-->
  // The group starts with <!--en--> and ends with <!--/-->, with <!--th--> splitting inside
  const groupRegex = /<!--(en|th)-->([\s\S]*?)<!--\/-->/g;

  let lastIndex = 0;
  let match;

  while ((match = groupRegex.exec(mdContent)) !== null) {
    // Add shared content before this group
    const sharedBefore = mdContent.slice(lastIndex, match.index).trim();
    if (sharedBefore) {
      segments.push({ type: 'shared', content: sharedBefore });
    }

    const firstLang = match[1];
    const innerContent = match[2];

    // Check if the inner content contains another language marker
    const group = {};
    const innerLangRegex = /<!--(en|th)-->/;
    const innerMatch = innerLangRegex.exec(innerContent);

    if (innerMatch) {
      // Split: content before inner marker belongs to firstLang,
      // content after belongs to the inner marker's lang
      group[firstLang] = innerContent.slice(0, innerMatch.index);
      group[innerMatch[1]] = innerContent.slice(innerMatch.index + innerMatch[0].length);
    } else {
      // Single language block
      group[firstLang] = innerContent;
    }

    segments.push({ type: 'lang', blocks: group });
    lastIndex = match.index + match[0].length;
  }

  // Add remaining shared content
  const remaining = mdContent.slice(lastIndex).trim();
  if (remaining) {
    segments.push({ type: 'shared', content: remaining });
  }

  // Build per-language markdown, then convert to HTML
  const result = {};
  for (const lang of languages) {
    const parts = [];
    for (const seg of segments) {
      if (seg.type === 'shared') {
        parts.push(seg.content);
      } else {
        parts.push((seg.blocks[lang] || '').trim());
      }
    }
    result[lang] = marked.parse(parts.join('\n\n'));
  }

  return result;
}

// Build navigation
function buildNav(currentSlug) {
  return config.navigation.map(item => {
    const href = item.slug === 'index' ? 'index.html' : `${item.slug}.html`;
    const active = item.slug === currentSlug ? ' active' : '';
    const labels = languages.map(lang =>
      `<span class="lang-text" data-lang="${lang}">${item.label[lang]}</span>`
    ).join('');
    return `<a href="${href}" class="nav-link${active}">${labels}</a>`;
  }).join('\n        ');
}

// Build each page
for (const page of config.navigation) {
  const mdPath = path.join(CONTENT_DIR, `${page.slug}.md`);
  if (!fs.existsSync(mdPath)) {
    console.warn(`Warning: ${mdPath} not found, skipping.`);
    continue;
  }

  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const langHtml = parseMultiLang(mdContent);

  // Make external links open in new tab
  for (const lang of languages) {
    langHtml[lang] = langHtml[lang].replace(
      /<a href="(https?:\/\/[^"]+)"/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer"'
    );
  }

  const wrappedContent = languages.map(lang =>
    `<div class="lang-content" data-lang="${lang}">${langHtml[lang]}</div>`
  ).join('\n');

  const nav = buildNav(page.slug);

  const html = template
    .replaceAll('{{SITE_TITLE_EN}}', config.title.en)
    .replaceAll('{{SITE_TITLE_TH}}', config.title.th)
    .replaceAll('{{PAGE_TITLE_EN}}', page.label.en)
    .replaceAll('{{PAGE_TITLE_TH}}', page.label.th)
    .replace('{{NAVIGATION}}', nav)
    .replace('{{CONTENT}}', wrappedContent);

  const outPath = path.join(OUTPUT_DIR, `${page.slug}.html`);
  fs.writeFileSync(outPath, html);
  console.log(`Built: ${page.slug}.html`);
}

console.log(`\nDone! ${config.navigation.length} pages built in ${OUTPUT_DIR}`);
