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

配置git proxy（需要有本地代理）

```bash
git config --global http.proxy http://127.0.0.1:8118 # 示例
```