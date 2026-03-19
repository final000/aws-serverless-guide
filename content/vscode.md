<!--en-->
# Visual Studio Code

VS Code is a free, lightweight code editor with great support for AWS development through extensions.

## Overview
<!--th-->
# Visual Studio Code

VS Code เป็น code editor ฟรีและเบา รองรับการพัฒนา AWS ได้ดีผ่าน extensions

## ภาพรวม
<!--/-->

- **Type:** Code Editor
<!--en-->
- **License:** Free and open source
- **Platforms:** Windows, macOS, Linux
<!--th-->
- **License:** ฟรีและ open source
- **Platforms:** Windows, macOS, Linux
<!--/-->

## Windows

<!--en-->
Download the installer from [code.visualstudio.com](https://code.visualstudio.com/).

Or using winget:
<!--th-->
ดาวน์โหลด installer จาก [code.visualstudio.com](https://code.visualstudio.com/)

หรือใช้ winget:
<!--/-->

```powershell
winget install Microsoft.VisualStudioCode
```

## macOS

<!--en-->
Using Homebrew:
<!--th-->
ใช้ Homebrew:
<!--/-->

```bash
brew install --cask visual-studio-code
```

<!--en-->
Or download the `.zip` from [code.visualstudio.com](https://code.visualstudio.com/).
<!--th-->
หรือดาวน์โหลด `.zip` จาก [code.visualstudio.com](https://code.visualstudio.com/)
<!--/-->

## Linux

```bash
# Ubuntu/Debian
sudo apt-get install -y wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list
sudo apt-get update
sudo apt-get install -y code

# Amazon Linux / RHEL
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo
sudo yum install -y code
```

<!--en-->
## Recommended Extensions

After installing VS Code, install these extensions for AWS serverless development:
<!--th-->
## Extensions ที่แนะนำ

หลังติดตั้ง VS Code ให้ติดตั้ง extensions เหล่านี้สำหรับการพัฒนา AWS serverless:
<!--/-->

```bash
# AWS Toolkit — SAM deploy, Lambda invoke, CloudWatch logs
code --install-extension amazonwebservices.aws-toolkit-vscode

# Python
code --install-extension ms-python.python

# Node.js / JavaScript
code --install-extension dbaeumer.vscode-eslint

# YAML — for SAM templates
code --install-extension redhat.vscode-yaml

# Docker
code --install-extension ms-azuretools.vscode-docker
```

<!--en-->
## Verify
<!--th-->
## ตรวจสอบการติดตั้ง
<!--/-->

```bash
code --version
```

<!--en-->
> **Tip:** Use the command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and search "AWS" to access SAM deploy, Lambda invoke, and other AWS features directly from VS Code.
<!--th-->
> **เคล็ดลับ:** ใช้ command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) แล้วค้นหา "AWS" เพื่อเข้าถึง SAM deploy, Lambda invoke และฟีเจอร์ AWS อื่นๆ ได้โดยตรงจาก VS Code
<!--/-->
