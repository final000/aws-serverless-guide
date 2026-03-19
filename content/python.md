<!--en-->
# Python

Python is a supported Lambda runtime and is used by the SAM CLI internally.
<!--th-->
# Python

Python เป็น runtime ที่รองรับสำหรับ Lambda และถูกใช้ภายในโดย SAM CLI
<!--/-->

## Windows

<!--en-->
Download the installer from [python.org](https://www.python.org/downloads/).

> **Important:** Check "Add Python to PATH" during installation.
<!--th-->
ดาวน์โหลด installer จาก [python.org](https://www.python.org/downloads/)

> **สำคัญ:** เลือก "Add Python to PATH" ระหว่างการติดตั้ง
<!--/-->

## macOS

<!--en-->
Using Homebrew:
<!--th-->
ใช้ Homebrew:
<!--/-->

```bash
brew install python
```

<!--en-->
Or use [pyenv](https://github.com/pyenv/pyenv) (recommended for managing multiple versions):
<!--th-->
หรือใช้ [pyenv](https://github.com/pyenv/pyenv) (แนะนำสำหรับจัดการหลายเวอร์ชัน):
<!--/-->

```bash
brew install pyenv
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
source ~/.zshrc
pyenv install 3.12
pyenv global 3.12
```

## Linux

<!--en-->
Using pyenv:
<!--th-->
ใช้ pyenv:
<!--/-->

```bash
curl https://pyenv.run | bash
echo 'export PATH="$HOME/.pyenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc
pyenv install 3.12
pyenv global 3.12
```

<!--en-->
## Verify
<!--th-->
## ตรวจสอบการติดตั้ง
<!--/-->

```bash
python3 --version
pip3 --version
```

<!--en-->
> **Tip:** AWS Lambda supports Python 3.9, 3.10, 3.11, 3.12, and 3.13 runtimes.
<!--th-->
> **เคล็ดลับ:** AWS Lambda รองรับ Python 3.9, 3.10, 3.11, 3.12 และ 3.13 runtimes
<!--/-->
