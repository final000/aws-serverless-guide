<!--en-->
# Docker

Docker is required by SAM CLI for local testing and debugging of Lambda functions. It simulates the Lambda execution environment on your machine.
<!--th-->
# Docker

Docker จำเป็นสำหรับ SAM CLI ในการทดสอบและ debug Lambda functions แบบ local โดยจำลองสภาพแวดล้อมการทำงานของ Lambda บนเครื่องของคุณ
<!--/-->

## Windows

<!--en-->
Download and install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/).

> **Note:** Docker Desktop requires WSL 2. Follow the [WSL 2 setup guide](https://learn.microsoft.com/en-us/windows/wsl/install) if needed:
<!--th-->
ดาวน์โหลดและติดตั้ง [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)

> **หมายเหตุ:** Docker Desktop ต้องใช้ WSL 2 ทำตาม [คู่มือการตั้งค่า WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install) หากจำเป็น:
<!--/-->

```powershell
wsl --install
```

## macOS

<!--en-->
Download and install [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/).

Or using Homebrew:
<!--th-->
ดาวน์โหลดและติดตั้ง [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/)

หรือใช้ Homebrew:
<!--/-->

```bash
brew install --cask docker
```

<!--en-->
Then open Docker Desktop from Applications to complete setup.
<!--th-->
จากนั้นเปิด Docker Desktop จาก Applications เพื่อตั้งค่าให้เสร็จสมบูรณ์
<!--/-->

## Linux

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

<!--en-->
Log out and back in for the group change to take effect.

## Verify
<!--th-->
ออกจากระบบและเข้าสู่ระบบใหม่เพื่อให้การเปลี่ยนแปลง group มีผล

## ตรวจสอบการติดตั้ง
<!--/-->

```bash
docker --version
docker run hello-world
```

<!--en-->
> **Tip:** Docker Desktop must be running before you can use `sam local invoke` or `sam local start-api`.
<!--th-->
> **เคล็ดลับ:** Docker Desktop ต้องเปิดทำงานอยู่ก่อนจึงจะใช้ `sam local invoke` หรือ `sam local start-api` ได้
<!--/-->
