<!--en-->
# AWS SAM CLI

The AWS Serverless Application Model CLI lets you build, test, and deploy serverless applications defined with SAM templates.
<!--th-->
# AWS SAM CLI

AWS Serverless Application Model CLI ช่วยให้คุณสร้าง ทดสอบ และ deploy แอปพลิเคชัน serverless ที่กำหนดด้วย SAM templates
<!--/-->

## Windows

<!--en-->
Download and run the [SAM CLI MSI installer](https://github.com/aws/aws-sam-cli/releases/latest).
<!--th-->
ดาวน์โหลดและเรียกใช้ [SAM CLI MSI installer](https://github.com/aws/aws-sam-cli/releases/latest)
<!--/-->

## macOS

<!--en-->
Using Homebrew:
<!--th-->
ใช้ Homebrew:
<!--/-->

```bash
brew install aws-sam-cli
```

<!--en-->
Or download the [macOS installer (pkg)](https://github.com/aws/aws-sam-cli/releases/latest).
<!--th-->
หรือดาวน์โหลด [macOS installer (pkg)](https://github.com/aws/aws-sam-cli/releases/latest)
<!--/-->

## Linux

```bash
curl -L "https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip" -o "sam.zip"
unzip sam.zip -d sam-installation
sudo ./sam-installation/install
rm -rf sam.zip sam-installation/
```

<!--en-->
## Verify
<!--th-->
## ตรวจสอบการติดตั้ง
<!--/-->

```bash
sam --version
```

<!--en-->
## Quick Test

Create a sample serverless app to verify everything works:
<!--th-->
## ทดสอบเบื้องต้น

สร้างแอป serverless ตัวอย่างเพื่อตรวจสอบว่าทุกอย่างทำงานได้:
<!--/-->

```bash
sam init --runtime python3.12 --name hello-sam --app-template hello-world
cd hello-sam
sam build
sam local invoke HelloWorldFunction
```

<!--en-->
> **Note:** `sam local invoke` requires Docker to be installed and running. Install Docker first if you want to test locally.
<!--th-->
> **หมายเหตุ:** `sam local invoke` ต้องติดตั้งและเปิดใช้งาน Docker ก่อน ติดตั้ง Docker ก่อนหากต้องการทดสอบแบบ local
<!--/-->
