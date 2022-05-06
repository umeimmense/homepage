---
title: '如何 React Table 实现 Fixed Header'
date: 2022-04-16 03:05:09
tags: [React]

---
## 前言
在本节中中，我想向您展示如何使用带有固定标题的 React Table库。在前面的例子中，你已经安装了 React Table Library 来创建一个Table组件并给它一个主题。现在，我们将允许用户将他们的标题粘贴到顶部：
## 实现
```jsx
import { useTheme } from '@table-library/react-table-library/theme';

const App = () => {
  const data = { nodes };

  const theme = useTheme({
    Table: `
      height: 100%;
    `,
  });

  return (
    <div
      style={{
        height: '150px',
      }}
    >
      <Table data={data} theme={theme}>
        ...
      </Table>
    </div>
  );
};
```
固定Table标题所需的一切都是Table组件周围的容器组件。这样，Table的行将在垂直方向滚动，而标题保持在Table的顶部。