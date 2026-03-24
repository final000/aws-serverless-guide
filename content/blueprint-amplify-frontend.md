<!--en-->
# Amplify Frontend Starter

A ready-to-deploy template for hosting a React frontend on AWS Amplify using SAM for infrastructure provisioning. Includes one-command deploy scripts for both Windows and Mac/Linux — no Git-based CI/CD pipeline required.

## Architecture
<!--th-->
# Amplify Frontend Starter

Template พร้อม deploy สำหรับ hosting React frontend บน AWS Amplify โดยใช้ SAM จัดการ infrastructure มี deploy script สำหรับทั้ง Windows และ Mac/Linux — ไม่ต้องใช้ Git-based CI/CD pipeline

## สถาปัตยกรรม
<!--/-->

<!--en-->
- **Hosting:** AWS Amplify (manual deployment, no Git required)
- **Auth:** Amazon Cognito
- **Backend:** API Gateway + Lambda (separate stack)
- **Infrastructure:** SAM template (`template.yaml`)
<!--th-->
- **Hosting:** AWS Amplify (manual deployment, ไม่ต้องใช้ Git)
- **Auth:** Amazon Cognito
- **Backend:** API Gateway + Lambda (stack แยก)
- **Infrastructure:** SAM template (`template.yaml`)
<!--/-->

<!--en-->
## What's Included
<!--th-->
## สิ่งที่รวมอยู่
<!--/-->

<!--en-->
- Amplify app and branch defined as infrastructure-as-code via SAM/CloudFormation
- Pre-built React app deployed to Amplify via CLI upload
- Cross-platform deploy scripts: `deploy-frontend.ps1` (Windows) and `deploy-frontend.sh` (Mac/Linux)
- Cognito authentication with persistent login sessions
- Product CRUD operations via API Gateway + Lambda backend
- Mock mode for offline development without a backend
- Resource tagging for cost tracking and governance
<!--th-->
- Amplify app และ branch กำหนดเป็น infrastructure-as-code ผ่าน SAM/CloudFormation
- React app ที่ build แล้ว deploy ไปยัง Amplify ผ่าน CLI upload
- Deploy scripts ข้ามแพลตฟอร์ม: `deploy-frontend.ps1` (Windows) และ `deploy-frontend.sh` (Mac/Linux)
- Cognito authentication พร้อม persistent login sessions
- Product CRUD operations ผ่าน API Gateway + Lambda backend
- Mock mode สำหรับพัฒนาแบบ offline โดยไม่ต้องมี backend
- Resource tagging สำหรับติดตามค่าใช้จ่ายและ governance
<!--/-->

<!--en-->
## Quick Start

Clone the template from GitHub:
<!--th-->
## เริ่มต้นอย่างรวดเร็ว

Clone template จาก GitHub:
<!--/-->

```bash
git clone https://github.com/thanachit/demo-amplify-frontend.git my-frontend
cd my-frontend
```

<!--en-->
Then follow the [README](https://github.com/thanachit/demo-amplify-frontend#readme) in the repo for SSO configuration, parameter setup, deployment, and testing.

## Source Code

[github.com/thanachit/demo-amplify-frontend](https://github.com/thanachit/demo-amplify-frontend)
<!--th-->
จากนั้นทำตาม [README](https://github.com/thanachit/demo-amplify-frontend#readme) ใน repo สำหรับการตั้งค่า SSO, พารามิเตอร์, การ deploy และการทดสอบ

## ซอร์สโค้ด

[github.com/thanachit/demo-amplify-frontend](https://github.com/thanachit/demo-amplify-frontend)
<!--/-->
