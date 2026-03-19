<!--en-->
# AWS CLI

The AWS Command Line Interface lets you manage AWS services from your terminal. It's the foundation for all other AWS tooling.
<!--th-->
# AWS CLI

AWS Command Line Interface ช่วยให้คุณจัดการ AWS services ผ่าน terminal เป็นพื้นฐานสำหรับเครื่องมือ AWS อื่นๆ ทั้งหมด
<!--/-->

## Windows

<!--en-->
Download and run the [AWS CLI MSI installer](https://awscli.amazonaws.com/AWSCLIV2.msi).
<!--th-->
ดาวน์โหลดและเรียกใช้ [AWS CLI MSI installer](https://awscli.amazonaws.com/AWSCLIV2.msi)
<!--/-->

## macOS

```bash
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
rm AWSCLIV2.pkg
```

## Linux

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
rm -rf awscliv2.zip aws/
```

<!--en-->
## Verify
<!--th-->
## ตรวจสอบการติดตั้ง
<!--/-->

```bash
aws --version
```

<!--en-->
## Configure Credentials
<!--th-->
## ตั้งค่า Credentials
<!--/-->

```bash
aws configure
```

<!--en-->
You'll be prompted for:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., `us-east-1`)
- Default output format (recommend `json`)

> **Security Tip:** For production use, consider [AWS IAM Identity Center (SSO)](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html) instead of long-lived access keys.
<!--th-->
ระบบจะถามข้อมูลต่อไปนี้:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (เช่น `us-east-1`)
- Default output format (แนะนำ `json`)

> **เคล็ดลับด้านความปลอดภัย:** สำหรับการใช้งานจริง แนะนำให้ใช้ [AWS IAM Identity Center (SSO)](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html) แทนการใช้ access keys แบบถาวร
<!--/-->
