<!--en-->
# Verify Your Setup

Run this script to check that all tools are installed correctly.

## Quick Check
<!--th-->
# ตรวจสอบการติดตั้ง

เรียกใช้สคริปต์นี้เพื่อตรวจสอบว่าเครื่องมือทั้งหมดติดตั้งถูกต้อง

## ตรวจสอบเบื้องต้น
<!--/-->

```bash
echo "=== Checking Serverless Toolchain ==="
echo ""

echo "AWS CLI:    $(aws --version 2>&1 | head -1 || echo 'NOT INSTALLED')"
echo "SAM CLI:    $(sam --version 2>&1 || echo 'NOT INSTALLED')"
echo "Node.js:    $(node --version 2>&1 || echo 'NOT INSTALLED')"
echo "npm:        $(npm --version 2>&1 || echo 'NOT INSTALLED')"
echo "Python:     $(python3 --version 2>&1 || echo 'NOT INSTALLED')"
echo "Docker:     $(docker --version 2>&1 || echo 'NOT INSTALLED')"
echo "Git:        $(git --version 2>&1 || echo 'NOT INSTALLED')"

echo ""
echo "=== Done ==="
```

<!--en-->
## Expected Output

All tools should show a version number. If any show `NOT INSTALLED`, go back to that tool's page and follow the installation steps.

## Test End-to-End

Once everything is installed, try creating and running a serverless app:
<!--th-->
## ผลลัพธ์ที่คาดหวัง

เครื่องมือทั้งหมดควรแสดงหมายเลขเวอร์ชัน หากตัวใดแสดง `NOT INSTALLED` ให้กลับไปที่หน้าของเครื่องมือนั้นและทำตามขั้นตอนการติดตั้ง

## ทดสอบแบบ End-to-End

เมื่อติดตั้งทุกอย่างแล้ว ลองสร้างและเรียกใช้แอป serverless:
<!--/-->

```bash
# Create a new project
sam init --runtime python3.12 --name test-app --app-template hello-world --no-interactive

# Build it
cd test-app
sam build

# Test locally (requires Docker running)
sam local invoke HelloWorldFunction

# Clean up
cd ..
rm -rf test-app
```

<!--en-->
If the local invoke returns a successful response, your setup is complete.

## Next Steps

- Read the [AWS SAM Developer Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/)
- Try the [SAM Workshop](https://s12d.com/sam-ws-en-intro)
- Explore [Serverless Patterns](https://serverlessland.com/patterns)
<!--th-->
หาก local invoke ส่งคืนผลลัพธ์สำเร็จ แสดงว่าการตั้งค่าของคุณเสร็จสมบูรณ์

## ขั้นตอนถัดไป

- อ่าน [AWS SAM Developer Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/)
- ลอง [SAM Workshop](https://s12d.com/sam-ws-en-intro)
- สำรวจ [Serverless Patterns](https://serverlessland.com/patterns)
<!--/-->
