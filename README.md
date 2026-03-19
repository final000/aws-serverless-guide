# AWS Serverless Guide

A static website that walks users through installing the tools needed to build serverless applications on AWS. Content is written in Markdown with dual-language support (English / Thai) and compiled to HTML via a Node.js build script.

## Project Structure

```
content/        Markdown source pages (dual-language)
content/config.json  Navigation and site metadata
template.html   HTML template with sidebar, language switcher
build.js        Converts Markdown → HTML into website/
website/        Generated HTML (git-ignored)
blueprints/     Cookiecutter templates for sam init
template.yaml   SAM template (CloudFront + S3)
deploy.sh       Build, deploy infra, upload files, invalidate cache
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

## Build

```bash
npm install
npm run build
```

This generates HTML files in the `website/` folder.

## Run Locally

Open `website/index.html` directly in your browser — no server needed.

## Deploy to AWS

The site is hosted on S3 + CloudFront, managed by AWS SAM.

### 1. Configure

Copy the example config and edit with your values:

```bash
cp samconfig.toml.example samconfig.toml
```

### 2. Deploy

```bash
chmod +x deploy.sh
./deploy.sh
```

This will:
- Build the site
- Deploy/update the SAM stack (S3 bucket + CloudFront distribution)
- Upload files to S3
- Invalidate the CloudFront cache

Requires AWS CLI and SAM CLI configured with valid credentials.

## Adding / Editing Content

1. Edit or create a `.md` file in `content/`
2. Use inline language markers for dual-language content:
   ```
   <!--en-->English text<!--th-->ข้อความภาษาไทย<!--/-->
   ```
   Content outside markers is shared across both languages.
3. Add the page to `content/config.json` navigation array
4. Run `npm run build`

## License

MIT
