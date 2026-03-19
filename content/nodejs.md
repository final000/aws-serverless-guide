<!--en-->
# Node.js

Node.js is a popular runtime for AWS Lambda functions and is required by many build tools in the serverless ecosystem.
<!--th-->
# Node.js

Node.js เป็น runtime ยอดนิยมสำหรับ AWS Lambda functions และจำเป็นสำหรับ build tools หลายตัวในระบบนิเวศ serverless
<!--/-->

## Windows

<!--en-->
Download the LTS installer from [nodejs.org](https://nodejs.org/).

Or use [nvm-windows](https://github.com/coreybutler/nvm-windows) (recommended for managing multiple versions):
<!--th-->
ดาวน์โหลด LTS installer จาก [nodejs.org](https://nodejs.org/)

หรือใช้ [nvm-windows](https://github.com/coreybutler/nvm-windows) (แนะนำสำหรับจัดการหลายเวอร์ชัน):
<!--/-->

```powershell
nvm install lts
nvm use lts
```

## macOS

<!--en-->
Using Homebrew:
<!--th-->
ใช้ Homebrew:
<!--/-->

```bash
brew install node
```

<!--en-->
Or use [nvm](https://github.com/nvm-sh/nvm) (recommended for managing multiple versions):
<!--th-->
หรือใช้ [nvm](https://github.com/nvm-sh/nvm) (แนะนำสำหรับจัดการหลายเวอร์ชัน):
<!--/-->

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install --lts
```

## Linux

<!--en-->
Using nvm (recommended):
<!--th-->
ใช้ nvm (แนะนำ):
<!--/-->

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install --lts
```

<!--en-->
## Verify
<!--th-->
## ตรวจสอบการติดตั้ง
<!--/-->

```bash
node --version
npm --version
```

<!--en-->
> **Tip:** Use the LTS (Long Term Support) version for stability. AWS Lambda supports Node.js 18.x, 20.x, and 22.x runtimes.
<!--th-->
> **เคล็ดลับ:** ใช้เวอร์ชัน LTS (Long Term Support) เพื่อความเสถียร AWS Lambda รองรับ Node.js 18.x, 20.x และ 22.x runtimes
<!--/-->
