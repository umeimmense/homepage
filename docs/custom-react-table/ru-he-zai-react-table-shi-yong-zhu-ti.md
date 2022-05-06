---
title: '如何在 React Table 使用 Theme'
date: 2022-04-15 21:39:19
tags: [React]

---
## 前言
在本节中，我想向你展示如何使用 React Table Library 及其 useTheme 插件来使用自定义样式对你的表格进行主题化。在前面的例子中，你已经安装了 React Table Library 来创建一个Table 组件。

## 实现
首先，导入 useTheme Hook：
```jsx
import { useTheme } from '@table-library/react-table-library/theme';
```
其次，用它创建一个主题并将其作为Props传递给 Table 组件：
```jsx
const THEME = {};

const App = () => {
  const data = { nodes };

  const theme = useTheme(THEME);

  return (
    <Table data={data} theme={theme}>
      ...
    </Table>
  );
};
```
只需几行，你就为表格创建了一个自定义主题。但是，主题是空的，接下来让我们看看如何使用它来调整表格的样式：
```jsx
const THEME = {
  HeaderRow: `
    font-size: 14px;

    background-color: #eaf5fd;
  `,
  Row: `
    font-size: 14px;

    &:nth-child(odd) {
      background-color: #d2e9fb;
    }

    &:nth-child(even) {
      background-color: #eaf5fd;
    }
  `,
};
```
本质上，主题是一本字典，你可以在其中设置表格的不同组件的样式。在最后一个示例中，我们设置了标题行和行组件的样式。由于两个组件共享一些相同的样式，你也可以将此样式提取为一个共同点：
```jsx
const THEME = {
  BaseRow: `
    font-size: 14px;
  `,
  HeaderRow: `
    background-color: #eaf5fd;
  `,
  Row: `
    &:nth-child(odd) {
      background-color: #d2e9fb;
    }

    &:nth-child(even) {
      background-color: #eaf5fd;
    }
  `,
};
```
以下组件可用作样式键：Table、HeaderRow、Row、HeaderCell、Cell、BaseRow、BaseCell。最后，这应该为你提供所有入口点，以便为表格设置所有不同组件的样式。
