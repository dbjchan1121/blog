# flutter upgrade

```bash
ProcessException: Process exited abnormally:
fatal: unable to access 'https://github.com/flutter/flutter.git/': OpenSSL SSL_read: Connection was reset, errno 10054
  Command: git fetch --tags
```

解决：

```bash
$ flutter upgrade --force
Flutter is already up to date on channel stable
Flutter 2.10.5 • channel stable • https://github.com/flutter/flutter.git
Framework • revision 5464c5bac7 (2 weeks ago) • 2022-04-18 09:55:37 -0700
Engine • revision 57d3bac3dd
Tools • Dart 2.16.2 • DevTools 2.9.2
```