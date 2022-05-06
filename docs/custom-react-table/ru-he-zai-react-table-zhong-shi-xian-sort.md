---
title: '如何在 React Table 中实现 Sort'
date: 2022-04-17 14:01:19
tags: [React]

---
## 前言
在本节中，我想向你展示如何使用 React Table Library 及其 useSort 插件来实现排序功能。在前面的例子中，你已经安装了 React Table Library 来创建一个 Table 组件。现在，我们将允许用户通过单击列标题对Table中的列进行排序。

## 实现
首先，导入 useSort Hook：
```jsx
import { useSort } from '@table-library/react-table-library/sort';
```
其次，使用Table的数据对其进行初始化，并将其作为 prop 传递给 Table 组件：
```jsx
const App = () => {
  const data = { nodes };

  const sort = useSort(data);

  return (
    <Table data={data} sort={sort}>
      ...
    </Table>
  );
};
```
之后，将你的标题列转换为可排序的：
```jsx
import {
  useSort,
  HeaderCellSort ,
} from '@table-library/react-table-library/sort';

const App = () => {
  ...

  return (
    <Table data={data} sort={sort}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCellSort sortKey="TASK">
                Task
              </HeaderCellSort>
              <HeaderCellSort sortKey="DEADLINE">
                Deadline
              </HeaderCellSort>
              <HeaderCellSort sortKey="TYPE">
                Type
              </HeaderCellSort>
              <HeaderCellSort sortKey="COMPLETE">
                Complete
              </HeaderCellSort>
            </HeaderRow>
          </Header>

          <Body>
            ...
          </Body>
        </>
      )}
    </Table>
  );
};
```
然后为每个排序键创建各自的排序函数：
```jsx
const App = () => {
  const data = { nodes };

  const sort = useSort(data, null, {
    sortFns: {
      TASK: (array) =>
        array.sort((a, b) => a.name.localeCompare(b.name)),
      DEADLINE: (array) =>
        array.sort((a, b) => a.deadline - b.deadline),
      TYPE: (array) =>
        array.sort((a, b) => a.type.localeCompare(b.type)),
      COMPLETE: (array) =>
        array.sort((a, b) => a.isComplete - b.isComplete),
    },
  });

  return (
    <Table data={data} sort={sort}>
      ...
    </Table>
  );
};
```
只需几行，你就有一个可排序的Table。我们可以按字符串排序（按字母顺序）、按日期排序、按布尔值排序和按枚举排序。由于自己传递了 sortBy 函数，因此如何对列进行排序取决于sortBy 函数。

可能缺少的获取当前排序的onChange事件。让我们看看它是如何与 useSort 结合使用的：
```jsx
const App = () => {
  const data = { nodes };

  const sort = useSort(data,
    {
      onChange: onSortChange,
    }, {
      sortFns: ...,
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  ...
};
```
onChange 回调函数使你可以访问触发排序更改的操作以及Table的实际排序状态。通过访问此信息，你可以基于它触发更多的Table或非Table事件（例如，服务器端排序等副作用）。

最后，值得注意的是，你传递给Table的排序对象包含排序状态——这使你能够随时访问它——以及以编程方式对列进行排序的所有函数。当在这个 React Table中使用自定义排序组件时，我们稍后会详细看到这一点。
无论如何，表中的列排序通常会带来更多要求。让我们来看看其中的两个：

例如，有时用户想要具有初始排序状态。这也可以通过 useSort 来实现，方法是传入一个默认的排序状态：
```jsx
const App = () => {
  ...

  const sort = useSort(data,
    {
      state: {
        sortKey: 'TASK',
        reverse: false,
      },
      onChange: onSortChange,
    }, {
      sortFns: ...,
    }
  );

  ...
};
```
另一个案例是将排序图标与来自第三方库（例如 Material UI）的自定义排序图标交换：
```jsx
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const App = () => {
  ...

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        margin: '0px',
        iconDefault: <UnfoldMoreOutlinedIcon />,
        iconUp: <KeyboardArrowUpOutlinedIcon />,
        iconDown: (
          <KeyboardArrowDownOutlinedIcon />
        ),
      },
      sortFns: ...
    }
  );

  ...
};
```
排序功能还有更多选项。只需前往 [React Table 文档](https://react-table-library.com/?path=/docs/features-sort--base)以了解有关它们的更多信息。

最后，使用 React Table Library 可以完全用自定义组件交换排序组件。对于我们的表格排序插件，我们可能希望将排序标题组件与我们自己的来自第三方库的 HTML 按钮进行交换。下面，你将看到一个如何在 React 表库中使用 Material UI 组件的示例。

首先，从你的第三方库中导入自定义组件（和自定义图标）：
```jsx
import MaterialButton from '@mui/material/Button';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
```
其次Table Header 使用第三方按钮：
```jsx
const App = () => {
  ...

  const getIcon = (sortKey) => {
    if (sort.state.sortKey === sortKey && sort.state.reverse) {
      return <KeyboardArrowDownOutlinedIcon />;
    }

    if (sort.state.sortKey === sortKey && !sort.state.reverse) {
      return <KeyboardArrowUpOutlinedIcon />;
    }

    return <UnfoldMoreOutlinedIcon />;
  };

  return (
    <Table data={data} sort={sort}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>
                <MaterialButton
                  fullWidth
                  style={{ justifyContent: 'flex-start' }}
                  endIcon={getIcon('TASK')}
                  onClick={() =>
                    sort.fns.onToggleSort({
                      sortKey: 'TASK',
                    })
                  }
                >
                  Task
                </MaterialButton>
              </HeaderCell>

              ...

            </HeaderRow>
          </Header>

          <Body>
            ...
          </Body>
        </>
      )}
    </Table>
  );
};

```
请注意 useSort 中的排序对象如何为你提供创建自定义组件所需的一切。这样，你可以为每个表格列自定义排序组件。通过使用排序状态和所有排序功能，你可以从任何地方读取和写入排序状态。



