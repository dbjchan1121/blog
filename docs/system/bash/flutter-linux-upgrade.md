# Flutter 在 Linux (CentOS) 安装/升级

## 获取 Flutter SDK

访问 Flutter 官方网站 Releases 部分 [下载地址](https://docs.flutter.dev/development/tools/sdk/releases?tab=linux#macos)，找到需要下载的版本，如：2.8.1，复制下载地址，如：https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_2.8.1-stable.tar.xz 

## 在 Linux 下载压缩包

```bash
wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_2.8.1-stable.tar.xz 
```

## 解压 Flutter SDK

使用 `tar` 命令解压压缩包时，若不选择参数，则默认指定参数 `--same-owner`，即压包的时候是谁的，就解压给谁。

如果将**当前操作用户**与解压后的**文件所有者**同步，则需要加上 `--no-same-owner`，如：我**当前操作的用户**为 `root`，则解压后的**文件所有者**也为 `root`。

若需要指定具体**用户**作为解压后**文件所有者**，如：FlutterUser，则可以加上 `--owner=FlutterUser`。

> 将 Flutter 解压至 /root 文件夹

```bash
tar --same-owner /pkg/flutter_linux_2.8.1-stable.tar.xz /root
```

## 修改文件夹权限

> 由于 gitlab 的 CI/CD 部署需要读写 flutter 中的文件，所以直接将文件夹权限改为最高读写权限

```bash
chmod -R 777 /root/flutter
```
