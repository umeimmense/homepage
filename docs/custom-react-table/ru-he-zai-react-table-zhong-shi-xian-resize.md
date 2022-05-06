---
title: '如何在 React Table 中实现 Resize'
date: 2022-04-17 13:41:02
tags: [React]

---
## 前言
在本教程中，我想向你展示如何使用 React Table Library 及其调整大小功能。在前面的例子中，你已经安装了 React Table Library 来创建一个Table组件。现在，我们将允许用户调整表中列的大小。

## 实现
首先在Table的列上设置 resize 属性
```jsx
<Header>
  <HeaderRow>
    <HeaderCell resize>Task</HeaderCell>
    <HeaderCell resize>Deadline</HeaderCell>
    <HeaderCell resize>Type</HeaderCell>
    <HeaderCell resize>Complete</HeaderCell>
    <HeaderCell resize>Tasks</HeaderCell>
  </HeaderRow>
</Header>
```
这是为Table启用可调整大小的列的最直接的方法。但是，如果你想有更多的配置选项，你可以传递一个对象。
例如，如果使用默认值，你可以为每个表格列定义最小宽度。
```jsx
<HeaderCell resize={{ minWidth: 50 }}>Task</HeaderCell>
```
你还可以调整大小区域的突出显示颜色并扩大调整区域的大小：
```jsx
<HeaderCell
  resize={{
    resizerWidth: 15,
    resizerHighlight: '#98d8ff',
  }}
>
  Task
</HeaderCell>
```

