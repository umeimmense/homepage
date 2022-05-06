---
title: '如何在 React Table 中实现 Search'
date: 2022-04-17 16:13:09
tags: [React]

---
## 前言
在本节中，将实现带有搜索功能的 React Table。在前面的例子中，你已经安装了 React Table Library 来创建一个Table组件。现在，我们将允许用户在表中搜索数据。
## 实现
React Table库没有自带搜索功能，但是，由于你可以从外部访问数据，因此你可以在将其传递给表之前对其进行操作。让我们看看这是如何工作的。

首先，创建一个 React useState Hook - 保存搜索的状态 - 和一个新的事件处理程序 - 作为稍后用户交互的回调函数：
```jsx
const App = () => {
  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  ...
};
```
接下来，在 Table 组件中，添加一个 HTML 输入字段来设置搜索状态：
```jsx
const App = () => {
  ...

  return (
    <>
      <label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
      </label>

      <Table data={data}>
        ...
      </Table>
    </>
  );
};
```
搜索状态生效。最后 展示的就是Table 组件之前搜索项目列表：
```jsx
const App = () => {
  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: nodes.filter((item) =>
      item.name.includes(search)
    ),
  };

  return (
    <>
      <label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
      </label>

      <Table data={data}>
        ...
      </Table>
    </>
  );
};const App = () => {
  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: nodes.filter((item) =>
      item.name.includes(search)
    ),
  };

  return (
    <>
      <label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
      </label>

      <Table data={data}>
        ...
      </Table>
    </>
  );
};
```
如果你希望Table搜索不区分大小写，则需要调整过滤器功能：
```jsx
const data = {
  nodes: nodes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  ),
};
```
 React Table 没有为搜索功能提供原生插件。但是，你可以将搜索到的列表从外部传递到Table并从外部进行搜索，因此你拥有所有选项。


