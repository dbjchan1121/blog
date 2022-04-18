# 阿里云申请免费ssl证书

# 下载证书并安装
# Nginx安装ssl证书

> 配置放行80端口和443端口

```nginx
#以下属性中，以ssl开头的属性表示与证书配置有关。
server {
    listen 443 ssl;
    #配置HTTPS的默认访问端口为443。
    #如果未在此处配置HTTPS的默认访问端口，可能会造成Nginx无法启动。
    #如果您使用Nginx 1.15.0及以上版本，请使用listen 443 ssl代替listen 443和ssl on。
    server_name yourdomain; #需要将yourdomain替换成证书绑定的域名。
    root html;
    index index.html index.htm;
    ssl_certificate cert/cert-file-name.pem;  #需要将cert-file-name.pem替换成已上传的证书文件的名称。
    ssl_certificate_key cert/cert-file-name.key; #需要将cert-file-name.key替换成已上传的证书私钥文件的名称。
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    #表示使用的加密套件的类型。
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3; #表示使用的TLS协议的类型。
    ssl_prefer_server_ciphers on;
    location / {
        root html;  #Web网站程序存放目录。
        index index.html index.htm;
    }
}
```

# 设置HTTP请求自动跳转HTTPS

```nginx
rewrite ^(.*)$ https://$host$1; #将所有HTTP请求通过rewrite指令重定向到HTTPS。
```

# Nginx 403 forbidden

```bash
cat var/log/nginx/error.log
```

error.log

```
2022/04/15 16:43:36 [error] 640767#0: *14154 open() "/root/web/favicon.ico" failed (13: Permission denied), client: 14.153.185.89, server: www.1ji.co, request: "GET /favicon.ico HTTP/1.1", host: "www.1ji.co", referrer: "https://www.1ji.co/"
```

解决：

```bash
chmod -R 777 /data
chmod -R 777 /data/www/
```

# 验证是否成功

> 通过浏览器访问域名，显示小锁头即配置ssl证书成功。

![](../img/ssl_img.png)