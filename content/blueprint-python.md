<!--en-->
# SAM — Lambda Python

A serverless API blueprint using Python 3.12 with API Gateway and Lambda. Users can scaffold a new project directly from this GitHub repository.

## Overview
<!--th-->
# SAM — Lambda Python

Blueprint สำหรับ serverless API โดยใช้ Python 3.12 กับ API Gateway และ Lambda ผู้ใช้สามารถสร้างโปรเจกต์ใหม่จาก GitHub repository นี้ได้โดยตรง

## ภาพรวม
<!--/-->

- **Runtime:** Python 3.12
- **Trigger:** API Gateway (REST)
<!--en-->
- **Features:** Structured logging, X-Ray tracing, environment variables
<!--th-->
- **คุณสมบัติ:** Structured logging, X-Ray tracing, environment variables
<!--/-->

<!--en-->
## Quick Start

Create a new project from GitHub:
<!--th-->
## เริ่มต้นอย่างรวดเร็ว

สร้างโปรเจกต์ใหม่จาก GitHub:
<!--/-->

```bash
sam init --location gh:YOUR-ORG/serverless-guide --directory blueprints/python-api
```

<!--en-->
SAM will prompt you for the project name, runtime, and architecture. Then:
<!--th-->
SAM จะถามชื่อโปรเจกต์, runtime และ architecture จากนั้น:
<!--/-->

```bash
cd sam-python-api
sam build
sam deploy --guided
```

<!--en-->
> **Tip:** To skip prompts, use `--no-input` to accept defaults or `--extra-context` to provide values:
<!--th-->
> **เคล็ดลับ:** หากต้องการข้ามคำถาม ใช้ `--no-input` เพื่อใช้ค่าเริ่มต้น หรือ `--extra-context` เพื่อกำหนดค่า:
<!--/-->

```bash
sam init \
  --location gh:YOUR-ORG/serverless-guide \
  --directory blueprints/python-api \
  --extra-context '{"project_name":"my-api","runtime":"python3.12","architectures":"x86_64"}' \
  --no-input
```

<!--en-->
## Project Structure
<!--th-->
## โครงสร้างโปรเจกต์
<!--/-->

```
sam-python-api/
├── template.yaml          # SAM template
├── samconfig.toml         # Deploy configuration
├── README.md
└── hello_world/
    ├── __init__.py
    ├── app.py             # Lambda handler
    └── requirements.txt   # Python dependencies
```

## SAM Template

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: SAM Template — Python API with API Gateway + Lambda

Globals:
  Function:
    Timeout: 10
    MemorySize: 128
    Runtime: python3.12
    Architectures:
      - x86_64
    Tracing: Active
    Environment:
      Variables:
        LOG_LEVEL: INFO

Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: app.lambda_handler
      CodeUri: hello_world/
      Description: Hello World function
      Events:
        HelloWorld:
          Type: Api
          Properties:
            Path: /hello
            Method: get

Outputs:
  HelloWorldApi:
    Description: API Gateway endpoint URL
    Value: !Sub "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod/hello/"
  HelloWorldFunction:
    Description: Lambda Function ARN
    Value: !GetAtt HelloWorldFunction.Arn
```

<!--en-->
## Lambda Function Code
<!--th-->
## โค้ด Lambda Function
<!--/-->

`hello_world/app.py`

```python
import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)


def lambda_handler(event, context):
    logger.info("Received event: %s", json.dumps(event))

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
        },
        "body": json.dumps({
            "message": "Hello World!",
        }),
    }
```

<!--en-->
## Test Locally
<!--th-->
## ทดสอบแบบ Local
<!--/-->

```bash
# Invoke function directly
sam local invoke HelloWorldFunction

# Start local API
sam local start-api
# Then visit http://localhost:3000/hello
```

<!--en-->
## Deploy
<!--th-->
## การ Deploy
<!--/-->

```bash
# First time (interactive)
sam deploy --guided

# Subsequent deploys
sam deploy
```