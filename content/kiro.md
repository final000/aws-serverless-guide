<!--en-->
# Kiro IDE

Kiro is an AI-powered IDE built for software development. It helps you write, debug, and deploy code with AI assistance built right into the editor.

## Overview
<!--th-->
# Kiro IDE

Kiro เป็น IDE ที่ขับเคลื่อนด้วย AI สร้างมาเพื่อการพัฒนาซอฟต์แวร์ ช่วยเขียน debug และ deploy โค้ดด้วย AI ที่ฝังอยู่ใน editor

## ภาพรวม
<!--/-->

- **Type:** AI-powered IDE
<!--en-->
- **Based on:** VS Code (Code OSS)
- **License:** Free during preview
- **Platforms:** Windows, macOS, Linux
<!--th-->
- **Based on:** VS Code (Code OSS)
- **License:** ฟรีในช่วง preview
- **Platforms:** Windows, macOS, Linux
<!--/-->

## Windows

<!--en-->
Download the installer from [kiro.dev](https://kiro.dev/).

Or using winget:
<!--th-->
ดาวน์โหลด installer จาก [kiro.dev](https://kiro.dev/)

หรือใช้ winget:
<!--/-->

```powershell
winget install Amazon.Kiro
```

## macOS

<!--en-->
Download the `.dmg` from [kiro.dev](https://kiro.dev/) and drag to Applications.

Using Homebrew:
<!--th-->
ดาวน์โหลด `.dmg` จาก [kiro.dev](https://kiro.dev/) แล้วลากไปที่ Applications

ใช้ Homebrew:
<!--/-->

```bash
brew install --cask kiro
```

## Linux

<!--en-->
Download the `.deb` or `.rpm` package from [kiro.dev](https://kiro.dev/).
<!--th-->
ดาวน์โหลดแพ็กเกจ `.deb` หรือ `.rpm` จาก [kiro.dev](https://kiro.dev/)
<!--/-->

```bash
# Ubuntu/Debian
sudo dpkg -i kiro_*.deb

# Amazon Linux / RHEL
sudo rpm -i kiro_*.rpm
```

<!--en-->
## Key Features for Serverless Development
<!--th-->
## ฟีเจอร์สำคัญสำหรับการพัฒนา Serverless
<!--/-->

<!--en-->
- **AI Chat** — Ask questions, generate code, debug issues directly in the IDE
- **Specs** — Structured feature planning with requirements, design, and implementation tasks
- **Hooks** — Automate actions on file save, build, or deploy events
- **Steering** — Custom rules and guidelines for your project that guide AI behavior
- **MCP Support** — Connect to external tools and services via Model Context Protocol
- **VS Code Compatible** — Supports VS Code extensions, themes, and keybindings
<!--th-->
- **AI Chat** — ถามคำถาม สร้างโค้ด debug ปัญหาได้โดยตรงใน IDE
- **Specs** — วางแผนฟีเจอร์แบบมีโครงสร้างพร้อม requirements, design และ implementation tasks
- **Hooks** — ทำงานอัตโนมัติเมื่อบันทึกไฟล์ build หรือ deploy
- **Steering** — กฎและแนวทางที่กำหนดเองสำหรับโปรเจกต์เพื่อควบคุมพฤติกรรม AI
- **MCP Support** — เชื่อมต่อกับเครื่องมือและบริการภายนอกผ่าน Model Context Protocol
- **VS Code Compatible** — รองรับ VS Code extensions, themes และ keybindings
<!--/-->

<!--en-->
## Sign In

Kiro requires an AWS Builder ID or IAM Identity Center account to sign in. You can create a free AWS Builder ID at [community.aws/builderid](https://community.aws/builderid).
<!--th-->
## ลงชื่อเข้าใช้

Kiro ต้องใช้ AWS Builder ID หรือ IAM Identity Center account ในการลงชื่อเข้าใช้ สร้าง AWS Builder ID ฟรีได้ที่ [community.aws/builderid](https://community.aws/builderid)
<!--/-->

<!--en-->
## Getting Started with AI

Once signed in, you can start using AI features right away:

**AI Chat (Ctrl+L / Cmd+L)**
Open the chat panel to ask questions, generate code, or debug errors. You can reference files by typing `#` followed by the filename. Drag images or documents into the chat for context.

**Autopilot vs Supervised Mode**
- **Supervised** — Kiro suggests changes and lets you review before applying (recommended for beginners)
- **Autopilot** — Kiro applies changes automatically, you can revert if needed

To switch modes, look at the bottom of the chat panel — there's a toggle button showing the current mode (Autopilot or Supervised). Click it to switch. You can also open the command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and search "Kiro: Toggle Agentic Mode" to toggle between them.
<!--th-->
<!--/-->

<!--en-->
**Specs — Structured Feature Development**
Instead of writing code directly, you can create a Spec to plan a feature step by step:
1. Open the command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and search "Kiro: New Spec"
2. Describe the feature you want to build
3. Kiro generates requirements, design, and implementation tasks
4. Work through each task with AI assistance

**Steering — Project-Level AI Rules**
Add custom guidelines in `.kiro/steering/*.md` to control how AI behaves in your project. For example, coding standards, preferred libraries, or deployment conventions.

**Hooks — Automated AI Actions**
Set up hooks to trigger AI actions automatically on events like file save, build, or deploy. Open the command palette and search "Open Kiro Hook UI" to get started.

**Quick Examples for Serverless Development:**
- Chat: "Create a SAM template with API Gateway and Lambda"
- Chat: "Debug this CloudFormation error: [paste error]"
- Chat: "Add DynamoDB table to my template.yaml"
- Spec: "Add authentication to my API using Cognito"
<!--th-->
## เริ่มต้นใช้งาน AI

เมื่อลงชื่อเข้าใช้แล้ว คุณสามารถเริ่มใช้ฟีเจอร์ AI ได้ทันที:

**AI Chat (Ctrl+L / Cmd+L)**
เปิดแผง chat เพื่อถามคำถาม สร้างโค้ด หรือ debug ข้อผิดพลาด อ้างอิงไฟล์ได้โดยพิมพ์ `#` ตามด้วยชื่อไฟล์ ลากรูปภาพหรือเอกสารเข้า chat เพื่อเพิ่มบริบท

**Autopilot vs Supervised Mode**
- **Supervised** — Kiro แนะนำการเปลี่ยนแปลงและให้คุณตรวจสอบก่อนนำไปใช้ (แนะนำสำหรับผู้เริ่มต้น)
- **Autopilot** — Kiro นำการเปลี่ยนแปลงไปใช้โดยอัตโนมัติ คุณสามารถย้อนกลับได้หากต้องการ

สลับโหมดได้โดยดูที่ด้านล่างของแผง chat จะมีปุ่ม toggle แสดงโหมดปัจจุบัน (Autopilot หรือ Supervised) คลิกเพื่อสลับ หรือเปิด command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) แล้วค้นหา "Kiro: Toggle Agentic Mode"

**Specs — การพัฒนาฟีเจอร์แบบมีโครงสร้าง**
แทนที่จะเขียนโค้ดโดยตรง คุณสามารถสร้าง Spec เพื่อวางแผนฟีเจอร์ทีละขั้นตอน:
1. เปิด command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) แล้วค้นหา "Kiro: New Spec"
2. อธิบายฟีเจอร์ที่ต้องการสร้าง
3. Kiro จะสร้าง requirements, design และ implementation tasks ให้
4. ทำงานแต่ละ task ด้วยความช่วยเหลือจาก AI

**Steering — กฎ AI ระดับโปรเจกต์**
เพิ่มแนวทางที่กำหนดเองใน `.kiro/steering/*.md` เพื่อควบคุมพฤติกรรม AI ในโปรเจกต์ เช่น มาตรฐานการเขียนโค้ด ไลบรารีที่ต้องการ หรือข้อตกลงการ deploy

**Hooks — การทำงาน AI อัตโนมัติ**
ตั้งค่า hooks เพื่อเรียกใช้ AI อัตโนมัติเมื่อเกิดเหตุการณ์ เช่น บันทึกไฟล์ build หรือ deploy เปิด command palette แล้วค้นหา "Open Kiro Hook UI" เพื่อเริ่มต้น

**ตัวอย่างสำหรับการพัฒนา Serverless:**
- Chat: "Create a SAM template with API Gateway and Lambda"
- Chat: "Debug this CloudFormation error: [paste error]"
- Chat: "Add DynamoDB table to my template.yaml"
- Spec: "Add authentication to my API using Cognito"
<!--/-->

<!--en-->
## Verify
<!--th-->
## ตรวจสอบการติดตั้ง
<!--/-->

<!--en-->
Launch Kiro from your Applications menu or run:
<!--th-->
เปิด Kiro จากเมนู Applications หรือรัน:
<!--/-->

```bash
kiro --version
```

<!--en-->
> **Tip:** Kiro is based on VS Code, so your existing VS Code extensions and settings can be reused. Try opening your SAM project in Kiro and use AI chat to help with template authoring and debugging.
<!--th-->
> **เคล็ดลับ:** Kiro ใช้พื้นฐานจาก VS Code ดังนั้น extensions และการตั้งค่า VS Code ที่มีอยู่สามารถนำมาใช้ได้ ลองเปิดโปรเจกต์ SAM ใน Kiro แล้วใช้ AI chat ช่วยเขียน template และ debug
<!--/-->
