# 环境变量配置

## Flutter 环境变量配置

> 配置 `~/.zshrc`

### 配置 Flutter PATH

> PATH_OF_FLUTTER_GIT_DIRECTORY 为 Flutter 的安装目录

```bash
export PATH="$PATH:[PATH_OF_FLUTTER_GIT_DIRECTORY]/bin"
```

### 验证 flutter 命令是否可用

```shell
$ which flutter # /Users/xx/development/flutter/bin/flutter
```

### 验证 PATH

输出所有环境变量验证是否成功

```SHELL
$ echo $PATH # /other path/bin:/User/xx/development/flutter/bin
```

### 配置 Flutter 资源环境

由于防火墙的原因，国内开发需将资源配置为国内镜像。

```bash
export FLUTTER_STORAGE_BASE_URL=https://pub.flutter-io.cn
export PUB_HOSTED_URL=https://pub.flutter-io.cn
```