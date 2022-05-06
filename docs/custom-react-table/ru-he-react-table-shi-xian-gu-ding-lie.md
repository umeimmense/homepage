---
title: '如何 React Table 实现 Fixed Column'
date: 2022-04-16 13:25:25
tags: [React]

---
## 前言
在本节中中，我想向你展示如何使用带有固定标题的 React Table库。在前面的例子中，你已经安装了 React Table Library 来创建一个Table组件并给它一个主题。现在，我们将允许用户将他们的列粘在一边：
## 实现
```jsx
import { useTheme } from '@table-library/react-table-library/theme';

const App = () => {
  const data = { nodes };

  const theme = useTheme({
    BaseCell: `
      &:nth-of-type(1) {
        left: 0px;

        min-width: 250px;
        width: 250px;
      }

      &:nth-of-type(2) {
        left: 250px;

        min-width: 150px;
        width: 150px;
      }

      &:nth-of-type(3),
      &:nth-of-type(4) {
        min-width: 50%;
        width: 50%;
      }
    `,
  });

  return (...);
};
```
我们将列固定在左侧。你也可以以相同的方式将列固定到右侧。缺少的是给 Cell 组件一个 `pinLeft`（或 `pinRight`）Props来指示它们固定到一边：
```jsx
const App = () => {
  ...

  return (
    <Table data={data} theme={theme} layout={{ custom: true, horizontalScroll: true }}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell pinLeft>Task</HeaderCell>
              <HeaderCell pinLeft>Deadline</HeaderCell>
              <HeaderCell>Type</HeaderCell>
              <HeaderCell>Complete</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell pinLeft>{item.name}</Cell>
                <Cell pinLeft>
                  {item.deadline.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </Cell>
                <Cell>{item.type}</Cell>
                <Cell>{item.isComplete.toString()}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};
```
一切就绪后，表格的非固定列将沿垂直方向滚动，而该列在表格的一侧保持固定。