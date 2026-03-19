<!--en-->
# Java

Java is a supported Lambda runtime. Amazon Corretto is the recommended JDK distribution — it's free, long-term supported, and optimized for AWS.

## Overview
<!--th-->
# Java

Java เป็น runtime ที่รองรับสำหรับ Lambda แนะนำให้ใช้ Amazon Corretto ซึ่งเป็น JDK distribution ที่ฟรี รองรับระยะยาว และปรับแต่งสำหรับ AWS

## ภาพรวม
<!--/-->

- **Runtime:** Java 21 (LTS)
- **JDK:** Amazon Corretto 21
<!--en-->
- **Build tools:** Maven or Gradle
<!--th-->
- **Build tools:** Maven หรือ Gradle
<!--/-->

## Windows

<!--en-->
Download the MSI installer from [Amazon Corretto 21 Downloads](https://docs.aws.amazon.com/corretto/latest/corretto-21-ug/downloads-list.html).

Or using [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/):
<!--th-->
ดาวน์โหลด MSI installer จาก [Amazon Corretto 21 Downloads](https://docs.aws.amazon.com/corretto/latest/corretto-21-ug/downloads-list.html)

หรือใช้ [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/):
<!--/-->

```powershell
winget install Amazon.Corretto.21.JDK
```

## macOS

<!--en-->
Using Homebrew:
<!--th-->
ใช้ Homebrew:
<!--/-->

```bash
brew install --cask corretto21
```

<!--en-->
Or download the `.pkg` installer from [Amazon Corretto 21 Downloads](https://docs.aws.amazon.com/corretto/latest/corretto-21-ug/downloads-list.html).
<!--th-->
หรือดาวน์โหลด `.pkg` installer จาก [Amazon Corretto 21 Downloads](https://docs.aws.amazon.com/corretto/latest/corretto-21-ug/downloads-list.html)
<!--/-->

## Linux

```bash
# Ubuntu/Debian
curl -LO https://corretto.aws/downloads/latest/amazon-corretto-21-x64-linux-jdk.deb
sudo dpkg -i amazon-corretto-21-x64-linux-jdk.deb
rm amazon-corretto-21-x64-linux-jdk.deb

# Amazon Linux / RHEL
sudo yum install -y java-21-amazon-corretto-devel
```

<!--en-->
## Set JAVA_HOME

After installation, set the `JAVA_HOME` environment variable:
<!--th-->
## ตั้งค่า JAVA_HOME

หลังติดตั้ง ให้ตั้งค่าตัวแปร `JAVA_HOME`:
<!--/-->

```powershell
# Windows (PowerShell) — find install path first
$env:JAVA_HOME = "C:\Program Files\Amazon Corretto\jdk21"
[System.Environment]::SetEnvironmentVariable("JAVA_HOME", $env:JAVA_HOME, "User")
```

```bash
# macOS (Homebrew)
echo 'export JAVA_HOME=$(/usr/libexec/java_home -v 21)' >> ~/.zshrc
source ~/.zshrc

# Linux
echo 'export JAVA_HOME=/usr/lib/jvm/java-21-amazon-corretto' >> ~/.bashrc
source ~/.bashrc
```

<!--en-->
## Install Maven
<!--th-->
## ติดตั้ง Maven
<!--/-->

```powershell
# Windows
winget install Apache.Maven
```

```bash
# macOS
brew install maven

# Linux
sudo apt-get install -y maven   # Ubuntu/Debian
sudo yum install -y maven       # Amazon Linux / RHEL
```

<!--en-->
## Verify
<!--th-->
## ตรวจสอบการติดตั้ง
<!--/-->

```bash
java --version
mvn --version
echo $JAVA_HOME
```

<!--en-->
> **Tip:** AWS Lambda supports Java 8 (Corretto), Java 11, Java 17, and Java 21 runtimes. Java 21 with [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) significantly reduces cold start times.
<!--th-->
> **เคล็ดลับ:** AWS Lambda รองรับ Java 8 (Corretto), Java 11, Java 17 และ Java 21 runtimes โดย Java 21 ร่วมกับ [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) ช่วยลดเวลา cold start ได้อย่างมาก
<!--/-->
