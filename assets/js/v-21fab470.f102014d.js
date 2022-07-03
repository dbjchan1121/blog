"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[81],{6456:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-21fab470",path:"/system/bash/migrate-from-http-to-https.html",title:"阿里云申请免费ssl证书",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"system/bash/migrate-from-http-to-https.md",git:{updatedTime:1650297369e3,contributors:[]}}},9110:(n,s,e)=>{e.r(s),e.d(s,{default:()=>w});var a=e(6252),m=e(9180);const t=(0,a.Wm)("h1",{id:"阿里云申请免费ssl证书",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#阿里云申请免费ssl证书","aria-hidden":"true"},"#"),(0,a.Uk)(" 阿里云申请免费ssl证书")],-1),l=(0,a.Wm)("h1",{id:"下载证书并安装",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#下载证书并安装","aria-hidden":"true"},"#"),(0,a.Uk)(" 下载证书并安装")],-1),c=(0,a.Wm)("h1",{id:"nginx安装ssl证书",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#nginx安装ssl证书","aria-hidden":"true"},"#"),(0,a.Uk)(" Nginx安装ssl证书")],-1),r=(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,"配置放行80端口和443端口")],-1),o=(0,a.Wm)("div",{class:"language-nginx ext-nginx line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-nginx"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token comment"},"#以下属性中，以ssl开头的属性表示与证书配置有关。"),(0,a.Uk)("\n"),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"server")]),(0,a.Uk)(),(0,a.Wm)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"listen"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token number"},"443"),(0,a.Uk)(" ssl")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token comment"},"#配置HTTPS的默认访问端口为443。"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token comment"},"#如果未在此处配置HTTPS的默认访问端口，可能会造成Nginx无法启动。"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token comment"},"#如果您使用Nginx 1.15.0及以上版本，请使用listen 443 ssl代替listen 443和ssl on。"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"server_name"),(0,a.Uk)(" yourdomain")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token comment"},"#需要将yourdomain替换成证书绑定的域名。"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"root"),(0,a.Uk)(" html")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"index"),(0,a.Uk)(" index.html index.htm")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"ssl_certificate"),(0,a.Uk)(" cert/cert-file-name.pem")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("  "),(0,a.Wm)("span",{class:"token comment"},"#需要将cert-file-name.pem替换成已上传的证书文件的名称。"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"ssl_certificate_key"),(0,a.Uk)(" cert/cert-file-name.key")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token comment"},"#需要将cert-file-name.key替换成已上传的证书私钥文件的名称。"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"ssl_session_timeout"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token number"},"5m")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"ssl_ciphers"),(0,a.Uk)(" ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token comment"},"#表示使用的加密套件的类型。"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"ssl_protocols"),(0,a.Uk)(" TLSv1.1 TLSv1.2 TLSv1.3")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token comment"},"#表示使用的TLS协议的类型。"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"ssl_prefer_server_ciphers"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token boolean"},"on")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"location"),(0,a.Uk)(" /")]),(0,a.Uk)(),(0,a.Wm)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n        "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"root"),(0,a.Uk)(" html")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("  "),(0,a.Wm)("span",{class:"token comment"},"#Web网站程序存放目录。"),(0,a.Uk)("\n        "),(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"index"),(0,a.Uk)(" index.html index.htm")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a.Wm)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"3"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"4"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"5"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"6"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"7"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"8"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"9"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"10"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"11"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"12"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"13"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"14"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"15"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"16"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"17"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"18"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"19"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"20"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"21"),(0,a.Wm)("br")])],-1),i=(0,a.Wm)("h1",{id:"设置http请求自动跳转https",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#设置http请求自动跳转https","aria-hidden":"true"},"#"),(0,a.Uk)(" 设置HTTP请求自动跳转HTTPS")],-1),W=(0,a.Wm)("div",{class:"language-nginx ext-nginx line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-nginx"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token directive"},[(0,a.Wm)("span",{class:"token keyword"},"rewrite"),(0,a.Uk)(" ^(.*)$ https://"),(0,a.Wm)("span",{class:"token variable"},"$host"),(0,a.Wm)("span",{class:"token variable"},"$1")]),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token comment"},"#将所有HTTP请求通过rewrite指令重定向到HTTPS。"),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),k=(0,a.Wm)("h1",{id:"nginx-403-forbidden",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#nginx-403-forbidden","aria-hidden":"true"},"#"),(0,a.Uk)(" Nginx 403 forbidden")],-1),p=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"cat"),(0,a.Uk)(" var/log/nginx/error.log\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),u=(0,a.Wm)("p",null,"error.log",-1),d=(0,a.Wm)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-text"},[(0,a.Wm)("code",null,'2022/04/15 16:43:36 [error] 640767#0: *14154 open() "/root/web/favicon.ico" failed (13: Permission denied), client: 14.153.185.89, server: www.1ji.co, request: "GET /favicon.ico HTTP/1.1", host: "www.1ji.co", referrer: "https://www.1ji.co/"\n')]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),b=(0,a.Wm)("p",null,"解决：",-1),h=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"chmod"),(0,a.Uk)(" -R "),(0,a.Wm)("span",{class:"token number"},"777"),(0,a.Uk)(" /data\n"),(0,a.Wm)("span",{class:"token function"},"chmod"),(0,a.Uk)(" -R "),(0,a.Wm)("span",{class:"token number"},"777"),(0,a.Uk)(" /data/www/\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),U=(0,a.Wm)("h1",{id:"验证是否成功",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#验证是否成功","aria-hidden":"true"},"#"),(0,a.Uk)(" 验证是否成功")],-1),g=(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,"通过浏览器访问域名，显示小锁头即配置ssl证书成功。")],-1),v=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:m,alt:""})],-1),w={render:function(n,s){return(0,a.wg)(),(0,a.j4)(a.HY,null,[t,l,c,r,o,i,W,k,p,u,d,b,h,U,g,v],64)}}},9180:n=>{n.exports="data:image/png;base64,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"}}]);