# Flutter 环境相关问题

## HTTP Host Availability

**HTTP Host检测问题：**

```bash
$ flutter doctor
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 2.10.4, on macOS 12.0.1 21A559 darwin-arm, locale
    zh-Hans-CN)
[✓] Android toolchain - develop for Android devices (Android SDK version 31.0.0)
[✓] Xcode - develop for iOS and macOS (Xcode 13.1)
[✓] Chrome - develop for the web
[✓] Android Studio (version 2020.3)
[✓] VS Code (version 1.66.2)
[✓] Connected device (2 available)
[!] HTTP Host Availability
    ✗ HTTP host https://maven.google.com/ is not reachable. Reason: An error
      occurred while checking the HTTP host: Operation timed out

! Doctor found issues in 1 category.
```
**解决办法：**

1. 找到flutter sdk的文件目录，打开`flutter\packages\flutter_tools\lib\src\http_host_validator.dart`
2. 将 `https://maven.google.com/` 修改为 `https://dl.`google.com/dl/android/maven2/`
3. `cd flutter\bin` ，删除cache文件夹
4. `flutter doctor`