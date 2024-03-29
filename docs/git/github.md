## ssh: connect to host github.com port 22: Connection timed out
```BASH
$ git push
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.      

Please make sure you have the correct access rights
and the repository exists.
```

```
nano ~/.ssh/config
```

```
Host github.com
  Hostname ssh.github.com
  Port 443
```

```
ssh -T git@github.com
```

## 安装homebrew时超时问题

```bash
fatal: unable to access 'https://github.com/Homebrew/brew/': Failed to connect to github.com port 443 after 150003 ms: Operation timed out
Failed during: git fetch --force origin
```

### 配置git proxy（需要有本地代理）

```bash
git config --global http.proxy http://127.0.0.1:8118 # 示例
git config --global https.proxy https://127.0.0.1:8118 # 示例
```

### 取消设置代理

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```
## ssh passphrase 问题

```bash
eval `ssh-agent -s`
> Agent pid 12825
```

```bash
ssh-add ~/.ssh/*_rsa
> Enter passphrase for /Users/chenzhe/.ssh/id_rsa: 
```

## 解决 VS Code 仍然提示输入密码

> 设置 IdentityFile 的原因是确保能找到密钥位置

```bash
Host *
  UseKeychain yes
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_rsa
```

# 参考文章

- https://superuser.com/questions/360302/os-x-ssh-use-different-private-key-files-for-different-servers#