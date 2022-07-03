"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[160],{4478:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n={key:"v-47595ce0",path:"/system/bash/path.html",title:"环境变量配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Flutter 环境变量配置",slug:"flutter-环境变量配置",children:[{level:3,title:"配置 Flutter PATH",slug:"配置-flutter-path",children:[]},{level:3,title:"验证 flutter 命令是否可用",slug:"验证-flutter-命令是否可用",children:[]},{level:3,title:"验证 PATH",slug:"验证-path",children:[]},{level:3,title:"配置 Flutter 资源环境",slug:"配置-flutter-资源环境",children:[]}]}],filePathRelative:"system/bash/path.md",git:{updatedTime:1650419377e3,contributors:[]}}},7682:(e,a,s)=>{s.r(a),s.d(a,{default:()=>t});const n=(0,s(6252).uE)('<h1 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h1><h2 id="flutter-环境变量配置" tabindex="-1"><a class="header-anchor" href="#flutter-环境变量配置" aria-hidden="true">#</a> Flutter 环境变量配置</h2><blockquote><p>配置 <code>~/.zshrc</code></p></blockquote><h3 id="配置-flutter-path" tabindex="-1"><a class="header-anchor" href="#配置-flutter-path" aria-hidden="true">#</a> 配置 Flutter PATH</h3><blockquote><p>PATH_OF_FLUTTER_GIT_DIRECTORY 为 Flutter 的安装目录</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$PATH</span>:[PATH_OF_FLUTTER_GIT_DIRECTORY]/bin&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="验证-flutter-命令是否可用" tabindex="-1"><a class="header-anchor" href="#验证-flutter-命令是否可用" aria-hidden="true">#</a> 验证 flutter 命令是否可用</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">which</span> flutter <span class="token comment"># /Users/xx/development/flutter/bin/flutter</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="验证-path" tabindex="-1"><a class="header-anchor" href="#验证-path" aria-hidden="true">#</a> 验证 PATH</h3><p>输出所有环境变量验证是否成功</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token comment"># /other_path/bin:/User/xx/development/flutter/bin</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="配置-flutter-资源环境" tabindex="-1"><a class="header-anchor" href="#配置-flutter-资源环境" aria-hidden="true">#</a> 配置 Flutter 资源环境</h3><p>由于防火墙的原因，国内开发需将资源配置为国内镜像。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">FLUTTER_STORAGE_BASE_URL</span><span class="token operator">=</span>https://storage.flutter-io.cn\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">PUB_HOSTED_URL</span><span class="token operator">=</span>https://pub.flutter-io.cn\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',14),t={render:function(e,a){return n}}}}]);