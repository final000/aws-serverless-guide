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

Kiro requires an AWS Builder ID or IAM Identity Center account to sign in. You can create a free AWS Builder ID at [profile.aws](https://profile.aws/).
<!--th-->
## ลงชื่อเข้าใช้

Kiro ต้องใช้ AWS Builder ID หรือ IAM Identity Center account ในการลงชื่อเข้าใช้ สร้าง AWS Builder ID ฟรีได้ที่ [profile.aws](https://profile.aws/)
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
