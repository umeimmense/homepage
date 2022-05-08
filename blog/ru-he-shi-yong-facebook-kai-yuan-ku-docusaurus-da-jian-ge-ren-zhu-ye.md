---
title: '如何使用facebook开源库 docusaurus 搭建个人主页'
date: 2022-05-08 13:38:06
tags: []
published: false
hideInList: false
feature: 
isTop: false
---
## 前言
之前在 `github` 偶然发现了`facebook`开源的 [docusaurus](https://github.com/facebook/docusaurus)发现了很多不错的功能：
- 由 `MDX` 提供支持.： 节省时间并专注于文本文档。只需使用 `MDX` 编写文档和博客文章，`Docusaurus` 就会将它们构建成静态 `HTML` 文件，以便提供服务。借助 `MDX`，您甚至可以在 `Markdown` 中嵌入 `React` 组件。
- 使用 `React` 构建: 通过编写 `React` 组件来扩展和自定义项目的布局。利用可插拔架构，设计您自己的网站，同时重用 `Docusaurus` 插件创建的相同数据。
- 提供翻译功能：本地化是开箱即用的。使用 `git`、`Crowdin` 或任何其他翻译管理器来翻译您的文档并单独部署它们。
- 文档版本控制: 支持项目所有版本的用户。文档版本控制可帮助您使文档与项目发布保持同步。
- 支持内容搜索:让您的社区可以轻松地在您的文档中找到他们需要的内容。支持 `Algolia` 文档搜索。

本节将记录如何通过 `docusaurus` 搭建个人主页。
## 准备工作
```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```
 安装项目脚手架
```bash
npx create-docusaurus@latest my-website classic
```
亦可使用`typesecript`
```bash
npx create-docusaurus@latest my-website classic --typescript
```

<details>
  <summary>替换安装命令</summary>

您还可以使用首选的项目管理器初始化新项目：

```mdx-code-block
<Tabs>
<TabItem value="npm">
```

```bash
npm init docusaurus
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn create docusaurus
```

```mdx-code-block
</TabItem>
<TabItem value="pnpm">
```

```bash
pnpm create docusaurus
```

```mdx-code-block
</TabItem>
</Tabs>
```

</details>

## Project structure {#project-structure}

假设您选择了经典模板并将网站命名为 `my-website`，您将会在新目录 `my-website/` 下看到下列文件：

```bash
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

### Project structure rundown {#project-structure-rundown}

- `/blog/` - 包含博客的 Markdown 文件。 [详情可参考](https://docusaurus.io/zh-CN/docs/blog)
- `/docs/` - 包含文档的 Markdown 文件。 您可在 sidebars.js 中自定义文档的侧边栏顺序。 [详情可参考](https://docusaurus.io/zh-CN/docs)
- `/src/` - 如页面或自定义 React 组件一类的非文档文件。
  - `/src/pages` - [您可在页面指南中了解详情](https://docusaurus.io/zh-CN/docs/create-doc)
- `/static/` - 静态目录。 此处的所有内容都将被复制进 `build` 文件夹的根目录中
- `/docusaurus.config.js` - 站点配置文件。
- `/package.json` - Docusaurus 网站是一款 React 应用程序。 您可以安装并使用任何 npm 软件包
- `/sidebars.js` - sidebar 的相关配置







