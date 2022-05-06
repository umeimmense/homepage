---
title: '如何创建 React Table 组件'
date: 2022-04-15 20:39:29
tags: [React]

---
## 前言
在本节中，我想向你展示如何使用 React Table​​库在 React 中创建Table组件。在本节之后，你可以使用库的文档继续构建许多其他示例，例如搜索、过滤、排序、选择、嵌套树表或 React 表的分页功能。但让我们从基础开始。

## 实现
让我们从通过命令行安装 React Table Library ：
```shell
npm install @table-library/react-table-library @emotion/react
```
任务是在 React Table​​组件中显示以下项列表：
```js
const list = [
  {
    id: '1',
    name: 'VSCode',
    deadline: new Date(2022, 1, 17),
    type: 'SETUP',
    isComplete: true,
  },
  {
    id: '2',
    name: 'JavaScript',
    deadline: new Date(2022, 2, 28),
    type: 'LEARN',
    isComplete: true,
  },
  {
    id: '3',
    name: 'React',
    deadline: new Date(2022, 3, 8),
    type: 'LEARN',
    isComplete: false,
  }
];
```
我们将从在 Table 组件可以使用的对象中构建列表开始。组件本身从库中导入：
```jsx
import * as React from 'react';
import { Table } from '@table-library/react-table-library/table';

const list = [ ... ];

const App = () => {
  const data = { nodes: list };

  return <Table data={data}>{(tableList) => null}</Table>;
};
```
Table 组件接受一个数据对象作为带有节点属性的Props。这些节点是我们列表中的项，但是，该表使其对节点的命名更加通用，因为该表不仅可以显示列表结构，还可以显示树结构。

此外，Table 组件使用一个子函数作为子函数，它使我们能够以 tableList 的形式访问表中的列表。在内部，表格组件将各种修改应用于我们的列表——例如排序、分页等，如果启用了这些插件 - 因此应该使用 tableList（而不是数据或列表）来呈现表中的项。

React Table 库使用组合而不是配置。因此，你可以从库本身获得所有必要的构建块作为组件。让我们从表格的标题开始：
```jsx
import * as React from 'react';
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
} from '@table-library/react-table-library/table';

const list = [ ... ];

const App = () => {
  const data = { nodes: list };

  return (
    <Table data={data}>
      {(tableList) => (
        <Header>
          <HeaderRow>
            <HeaderCell>Task</HeaderCell>
            <HeaderCell>Deadline</HeaderCell>
            <HeaderCell>Type</HeaderCell>
            <HeaderCell>Complete</HeaderCell>
          </HeaderRow>
        </Header>
      )}
    </Table>
  );
};
```
通过使用这些组件，你可以将表创建为组件的组合，而每个组件都有自己的职责。例如，我们不是只有一个 Table 组件可以接受一个大型配置对象，而是有可组合的组件——例如 Header、HeaderRow 和 HeaderCell，它们可以接收专用的 props。

接下来，让我们像在 React 中渲染列表时所习惯的那样显示我们的项，方法是渲染 Row 组件，并为 Body 组件中的每个项提供一个键：
```jsx
import * as React from 'react';
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from '@table-library/react-table-library/table';

const list = [ ... ];

const App = () => {
  const data = { nodes: list };

  return (
    <Table data={data}>
      {(tableList) => (
        <>
          <Header>
            ...
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.name}</Cell>
                <Cell>
                  {item.deadline.toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    }
                  )}
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
由于你可以完全控制在 Cell 组件中呈现的内容，因此你可以根据需要格式化数据。布尔值可以转换为字符串，日期可以格式化为可读版本。 Cell 组件没有特殊的props来完成渲染。使用 React 表格​​库可以直接在 React 中呈现表格组件。

