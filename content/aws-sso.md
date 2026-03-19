<!--en-->
# AWS SSO for CLI

AWS IAM Identity Center (formerly AWS SSO) lets you sign in to the CLI using your organization's identity provider — no long-lived access keys needed. This is the recommended way to authenticate for teams and production use.

## Prerequisites

- AWS CLI v2 installed ([see previous section](aws-cli.html))
- An AWS organization with IAM Identity Center enabled
- Your SSO start URL and region from your administrator (e.g., `https://my-org.awsapps.com/start`)
<!--th-->
# AWS SSO สำหรับ CLI

AWS IAM Identity Center (เดิมชื่อ AWS SSO) ช่วยให้คุณลงชื่อเข้าใช้ CLI ผ่าน identity provider ขององค์กร โดยไม่ต้องใช้ access keys แบบถาวร นี่คือวิธีการยืนยันตัวตนที่แนะนำสำหรับทีมและการใช้งานจริง

## สิ่งที่ต้องมีก่อน

- ติดตั้ง AWS CLI v2 แล้ว ([ดูหัวข้อก่อนหน้า](aws-cli.html))
- องค์กร AWS ที่เปิดใช้งาน IAM Identity Center
- SSO start URL และ region จากผู้ดูแลระบบ (เช่น `https://my-org.awsapps.com/start`)
<!--/-->

<!--en-->
## Step 1: Configure an SSO Profile

Run the SSO configuration wizard:
<!--th-->
## ขั้นตอนที่ 1: ตั้งค่า SSO Profile

เรียกใช้ตัวช่วยตั้งค่า SSO:
<!--/-->

```bash
aws configure sso
```

<!--en-->
You'll be prompted for:

| Prompt | Example Value |
|--------|---------------|
| SSO session name | `my-org` |
| SSO start URL | `https://my-org.awsapps.com/start` |
| SSO region | `us-east-1` |
| SSO registration scopes | `sso:account:access` (press Enter for default) |

A browser window will open for you to authorize the CLI. After approval, you'll select an account and role:

| Prompt | Example Value |
|--------|---------------|
| AWS account | `123456789012 (dev-account)` |
| IAM role | `AdministratorAccess` |
| CLI default region | `us-east-1` |
| CLI default output | `json` |
| CLI profile name | `dev` |
<!--th-->
ระบบจะถามข้อมูลต่อไปนี้:

| คำถาม | ตัวอย่างค่า |
|-------|-----------|
| SSO session name | `my-org` |
| SSO start URL | `https://my-org.awsapps.com/start` |
| SSO region | `us-east-1` |
| SSO registration scopes | `sso:account:access` (กด Enter เพื่อใช้ค่าเริ่มต้น) |

เบราว์เซอร์จะเปิดขึ้นเพื่อให้คุณอนุญาต CLI หลังจากอนุมัติแล้ว คุณจะเลือกบัญชีและ role:

| คำถาม | ตัวอย่างค่า |
|-------|-----------|
| AWS account | `123456789012 (dev-account)` |
| IAM role | `AdministratorAccess` |
| CLI default region | `us-east-1` |
| CLI default output | `json` |
| CLI profile name | `dev` |
<!--/-->

<!--en-->
## Step 2: Log In
<!--th-->
## ขั้นตอนที่ 2: เข้าสู่ระบบ
<!--/-->

```bash
aws sso login --profile dev
```

<!--en-->
This opens your browser to authenticate. Once approved, your CLI session is active.

## Step 3: Use the Profile

Add `--profile` to your commands:
<!--th-->
คำสั่งนี้จะเปิดเบราว์เซอร์เพื่อยืนยันตัวตน เมื่ออนุมัติแล้ว session ของ CLI จะพร้อมใช้งาน

## ขั้นตอนที่ 3: ใช้งาน Profile

เพิ่ม `--profile` ในคำสั่งของคุณ:
<!--/-->

```bash
aws s3 ls --profile dev
aws lambda list-functions --profile dev
```

<!--en-->
Or set it as the default for your terminal session:
<!--th-->
หรือตั้งเป็นค่าเริ่มต้นสำหรับ terminal session:
<!--/-->

```bash
# Windows (PowerShell)
$env:AWS_PROFILE = "dev"

# macOS / Linux
export AWS_PROFILE=dev
```

<!--en-->
Now all commands use the SSO profile automatically:
<!--th-->
ตอนนี้ทุกคำสั่งจะใช้ SSO profile โดยอัตโนมัติ:
<!--/-->

```bash
aws s3 ls
aws sts get-caller-identity
```

<!--en-->
## Step 4: Configure SAM CLI to Use SSO

SAM CLI automatically uses your AWS CLI profiles. Just specify the profile:
<!--th-->
## ขั้นตอนที่ 4: ตั้งค่า SAM CLI ให้ใช้ SSO

SAM CLI ใช้ AWS CLI profiles โดยอัตโนมัติ เพียงระบุ profile:
<!--/-->

```bash
sam deploy --profile dev
sam local invoke --profile dev
```

<!--en-->
Or set `AWS_PROFILE` as shown above and SAM will pick it up.

## Multiple Accounts

You can configure multiple SSO profiles for different accounts or roles. Run `aws configure sso` again with a different profile name, or edit `~/.aws/config` directly:
<!--th-->
หรือตั้งค่า `AWS_PROFILE` ตามที่แสดงด้านบน แล้ว SAM จะใช้งานได้เลย

## หลายบัญชี

คุณสามารถตั้งค่า SSO profiles หลายตัวสำหรับบัญชีหรือ roles ที่แตกต่างกัน เรียกใช้ `aws configure sso` อีกครั้งด้วยชื่อ profile อื่น หรือแก้ไข `~/.aws/config` โดยตรง:
<!--/-->

```ini
[profile dev]
sso_session = my-org
sso_account_id = 123456789012
sso_role_name = AdministratorAccess
region = us-east-1
output = json

[profile staging]
sso_session = my-org
sso_account_id = 987654321098
sso_role_name = PowerUserAccess
region = us-east-1
output = json

[sso-session my-org]
sso_start_url = https://my-org.awsapps.com/start
sso_region = us-east-1
sso_registration_scopes = sso:account:access
```

<!--en-->
## Session Refresh

SSO sessions expire (typically after 8 hours). When you see an `ExpiredToken` error, just log in again:
<!--th-->
## การต่ออายุ Session

SSO sessions จะหมดอายุ (โดยปกติหลังจาก 8 ชั่วโมง) เมื่อเห็นข้อผิดพลาด `ExpiredToken` ให้เข้าสู่ระบบอีกครั้ง:
<!--/-->

```bash
aws sso login --profile dev
```

<!--en-->
## Verify
<!--th-->
## ตรวจสอบ
<!--/-->

```bash
aws sts get-caller-identity --profile dev
```

<!--en-->
Expected output:
<!--th-->
ผลลัพธ์ที่คาดหวัง:
<!--/-->

```json
{
    "UserId": "AROA...:your.name",
    "Account": "123456789012",
    "Arn": "arn:aws:sts::123456789012:assumed-role/AdministratorAccess/your.name"
}
```

<!--en-->
> **Tip:** If your organization hasn't set up IAM Identity Center yet, refer to the [AWS IAM Identity Center setup guide](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html).
<!--th-->
> **เคล็ดลับ:** หากองค์กรของคุณยังไม่ได้ตั้งค่า IAM Identity Center ให้ดู [คู่มือการตั้งค่า AWS IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html)
<!--/-->
