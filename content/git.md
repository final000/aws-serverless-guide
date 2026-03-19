<!--en-->
# Git

Git is essential for version control and is used by SAM CLI when initializing new projects.
<!--th-->
# Git

Git จำเป็นสำหรับการควบคุมเวอร์ชันและถูกใช้โดย SAM CLI เมื่อสร้างโปรเจกต์ใหม่
<!--/-->

## Windows

<!--en-->
Download the installer from [git-scm.com](https://git-scm.com/download/win).

> **Tip:** During installation, select "Git from the command line and also from 3rd-party software" to make Git available in PowerShell and CMD.
<!--th-->
ดาวน์โหลด installer จาก [git-scm.com](https://git-scm.com/download/win)

> **เคล็ดลับ:** ระหว่างการติดตั้ง เลือก "Git from the command line and also from 3rd-party software" เพื่อให้ Git ใช้งานได้ใน PowerShell และ CMD
<!--/-->

## macOS

<!--en-->
Git comes pre-installed on macOS. To get the latest version:
<!--th-->
Git ติดตั้งมาพร้อมกับ macOS แล้ว หากต้องการเวอร์ชันล่าสุด:
<!--/-->

```bash
brew install git
```

## Linux

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install -y git

# Amazon Linux / RHEL
sudo yum install -y git
```

<!--en-->
## Configure

Set your identity (used in commits):
<!--th-->
## ตั้งค่า

ตั้งค่าตัวตนของคุณ (ใช้ใน commits):
<!--/-->

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

<!--en-->
## Verify
<!--th-->
## ตรวจสอบการติดตั้ง
<!--/-->

```bash
git --version
```

<!--en-->
> **Tip:** Consider setting up [SSH keys for GitHub/CodeCommit](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to avoid entering credentials repeatedly.
<!--th-->
> **เคล็ดลับ:** พิจารณาตั้งค่า [SSH keys สำหรับ GitHub/CodeCommit](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) เพื่อไม่ต้องกรอก credentials ซ้ำๆ
<!--/-->
