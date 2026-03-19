# {{ cookiecutter.project_name }}

Serverless API using Python 3.12 with API Gateway and Lambda.

## Build & Deploy

```bash
sam build
sam deploy --guided   # first time
sam deploy            # subsequent deploys
```

## Test Locally

```bash
sam local invoke HelloWorldFunction
sam local start-api
# Then visit http://localhost:3000/hello
```
