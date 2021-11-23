# Flutter路由的总结与前端路由的对比

## 概述

在App开发与Web开发都有路由的概念，但是两者之间存在不小的差异。

在App开发中，路由栈的概念尤其重要，主要包含了 **出栈**、**入栈** 两个关键概念；在Web开发中，早期的前端路由等价于 `URL/URI`，而现在的Web应用由于大多数是单页应用，单页应用的路由基本都采用了 `hash路由` 的方式，使我们对于路由的认识更加表面，因为不管是哪种路由的表现形式，我们看到的都与认知一致，即：在浏览器中输入指定地址，就能访问到我们想要的页面。

**这也是为什么那一道「从URL输入到页面展现到底发生什么？」的面试题能够经久不衰的原因。**

## Flutter 路由

Flutter中内置了官方提供的路由系统：`Navigator`，最新版本的`Navigator`提供了很多新的 **声明式API**，全新的实现方式与调用方法与早期版本相差巨大，所以称为`Navigator 2.0`，相对应的，早期的版本称为`Navigator 1.0`。

### Navigator 1.0

`Navigator 1.0`的 **命令式API** 过于僵硬，缺乏灵活性，与Flutter的声明式编程也不契合，同时，1.0也只提供了较为简单的功能，如：`push()`、`pop()`。

### Navigator 2.0

## 参考资料

- [声明式UI介绍](https://flutter.cn/docs/get-started/flutter-for/declarative#why-a-declarative-ui)