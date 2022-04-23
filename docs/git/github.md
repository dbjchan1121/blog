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