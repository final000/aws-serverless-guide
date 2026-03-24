<!--en-->
# SAM — Backend Starter Kit

A production-ready backend starter kit for teams modernizing to serverless on AWS. Includes API Gateway, Lambda (Python 3.12), RDS PostgreSQL, Cognito JWT authorization, and Secrets Manager.

## Architecture
<!--th-->
# SAM — Backend Starter Kit

Starter kit สำหรับ backend ที่พร้อมใช้งานจริง สำหรับทีมที่กำลังปรับเปลี่ยนไปใช้ serverless บน AWS ประกอบด้วย API Gateway, Lambda (Python 3.12), RDS PostgreSQL, Cognito JWT authorization และ Secrets Manager

## สถาปัตยกรรม
<!--/-->

```
Client → API Gateway (REST API) → Lambda (Python 3.12) → RDS PostgreSQL
              ↓
       Lambda Authorizer → validates Cognito JWT + group membership
```

<!--en-->
## What's Included
<!--th-->
## สิ่งที่รวมอยู่
<!--/-->

<!--en-->
| Component | Description |
|-----------|-------------|
| API Gateway (REST API) | Routes with CORS, WAF-ready |
| Backend Lambda | CRUDQ API for items table in RDS PostgreSQL |
| Authorizer Lambda | Validates Cognito JWT (RS256) + group membership |
| Cognito App Client | Per-app client in centralized User Pool |
| Secrets Manager Secret | App-owned, created with placeholder values |
| Lambda Security Group | App-owned SG in provided VPC |
<!--th-->
| Component | รายละเอียด |
|-----------|------------|
| API Gateway (REST API) | Routes พร้อม CORS, รองรับ WAF |
| Backend Lambda | CRUDQ API สำหรับ items table ใน RDS PostgreSQL |
| Authorizer Lambda | ตรวจสอบ Cognito JWT (RS256) + group membership |
| Cognito App Client | App client ต่อแอปใน User Pool กลาง |
| Secrets Manager Secret | Secret ของแอป สร้างพร้อมค่า placeholder |
| Lambda Security Group | Security Group ของแอปใน VPC ที่กำหนด |
<!--/-->

<!--en-->
## Prerequisites

**From your infra team:**
- VPC with private subnets
- RDS PostgreSQL
- VPC endpoints: Secrets Manager
- Cognito User Pool with app-specific group created
- Per-app database user and credentials

**On your local machine:**
- AWS CLI configured with credentials
- AWS SAM CLI
- Python 3.12
<!--th-->
## สิ่งที่ต้องมีก่อน

**จากทีม infra:**
- VPC พร้อม private subnets
- RDS PostgreSQL
- VPC endpoints: Secrets Manager
- Cognito User Pool พร้อม group สำหรับแอป
- Database user และ credentials สำหรับแอป

**บนเครื่องของคุณ:**
- AWS CLI ที่ตั้งค่าแล้ว
- AWS SAM CLI
- Python 3.12
<!--/-->

<!--en-->
## Quick Start

Copy the template from GitHub:
<!--th-->
## เริ่มต้นอย่างรวดเร็ว

คัดลอก template จาก GitHub:
<!--/-->

```bash
git clone https://github.com/nutnonoat/demo-sam-backend-starter.git my-app-name
cd my-app-name
```

<!--en-->
Then follow the [README](https://github.com/nutnonoat/demo-sam-backend-starter#readme) in the repo for deployment steps, parameter configuration, and testing.

## Source Code

[github.com/nutnonoat/demo-sam-backend-starter](https://github.com/nutnonoat/demo-sam-backend-starter)
<!--th-->
จากนั้นทำตาม [README](https://github.com/nutnonoat/demo-sam-backend-starter#readme) ใน repo สำหรับขั้นตอนการ deploy, การตั้งค่าพารามิเตอร์ และการทดสอบ

## ซอร์สโค้ด

[github.com/nutnonoat/demo-sam-backend-starter](https://github.com/nutnonoat/demo-sam-backend-starter)
<!--/-->
