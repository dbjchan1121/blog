# 反复安装 homebrew 失败后报错

```bash
Press RETURN/ENTER to continue or any other key to abort:
==> /usr/bin/sudo /usr/sbin/chown -R chenzhe:admin /opt/homebrew
==> Downloading and installing Homebrew...
HEAD is now at 8a5f6645b Merge pull request #13283 from Bo98/ghp-comment
error: Not a valid ref: refs/remotes/origin/master
fatal: ambiguous argument 'refs/remotes/origin/master': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
^Cfetch-pack: unexpected disconnect while reading sideband packet
fatal: fetch-pack: invalid index-pack output
Failed during: /opt/homebrew/bin/brew update --force --quiet
```

# 卸载 homebrew

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```

# 添加 homebrew 环境变量

```bash
Warning: /opt/homebrew/bin is not in your PATH.
```

编辑 ~/.zshrc 文件：

```bash
export PATH=/opt/homebrew/bin:$PATH
```

执行：`source ~/.zshrc`

