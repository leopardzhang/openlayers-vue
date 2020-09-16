# generator-fe
前端工程脚手架，基于 `Yeoman` 和 `vue-cli3` 构建，用于：
* 快速生成并初始化标准格式的项目；
* 提供统一的开发规范、构建脚本、基础配置和初始代码；
* 内置前端集成解决方案，快速实现底层通用功能；

## 安装
1. 执行命令 `npm install -g yo`，在本地全局安装 yeoman；
2. 在根目录执行 `npm install`安装所需依赖
3. 在 generator-vue-fe 项目的根路径下执行命令 `npm link`，创建全局链接；

## 文件结构
#### Group
```
├── /src                 # 项目路径
│   ├── /assests         # 静态文件
│   ├── /common          # 通用项目
│   ├── /components      # 自定义组件库
│   ├── /pages           # 页面
│   ├── /router          # 路由
│   ├── /store           # vuex
├── /public              # 静态文件夹
├── /node_modules        # 项目依赖
├── .babel.config.js     # babel 配置
├── .editorconfig        # 编辑器 配置
├── .gitignore           # git 忽略提交配置项
├── package.json         # 项目组 npm 配置
```