---
title: 'React Router 6：搜索参数'
date: 2021-12-17 11:29:17
tags: [React,React Router]
published: true
hideInList: false
feature: 
isTop: false
---
## 前言
本文我们讨论如何在 React Router 6 中使用搜索参数。搜索参数是一项强大的功能，它使你能够捕获 URL 中的状态。通过在 URL 中包含状态，你可以与其他人实现共享。例如，如果应用程序显示产品目录，开发人员将使用户能够搜索它。在 React 中，这将转换为项目列表（此处为：产品）和用于过滤它们的 HTML 输入字段。

现在，React 开发人员很有可能会使用 React 的 useState Hook 来管理这种搜索状态。这对这个用户来说很好，但不适合与其他用户共享。

因此，一个不错的方式是在 URL 中管理搜索状态，因为这样搜索状态就可以与其他用户共享。如果一个用户按标题（例如“Rust”）搜索项目列表，则搜索参数将作为键值对附加到 URL，例如 /bookshelf?title=Rust，因为可以与另一个用户共享。所以获得链接的其他用户将在其页面上看到相同的过滤项目列表。
![](https://umeimmense.github.io/post-images/1640100507004.webp)

## React Router 从状态到 URL
首先，我们将实现上一个所设想的那样，其中有一个项目列表，并通过 HTML 输入字段进行搜索。我们不会使用 React 的 useState Hook 来捕获搜索状态，而是使用 React Router 来获取可共享的 URL。 App 组件如下所示，类似于前面提到的 React Router 教程中的 App 组件：
 ```jsx
 const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/bookshelf">Bookshelf</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="bookshelf" element={<Bookshelf />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
 ```
虽然 Home 和 NoMatch 组件只是具有任何实现的占位符组件，但我们将关注 Bookshelf 组件，它将Books显示为列表组件。这些Books示例数据可以从远程 API（或模拟 API）获取：
```jsx
const Bookshelf = () => {
  const books = [
    {
      title: 'The Road to Rust',
      isCompleted: false,
    },
    {
      title: 'The Road to React',
      isCompleted: true,
    },
  ];

  return (
    <>
      <h2>Bookshelf</h2>

      <ul>
        {books.map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};
```
为了使用户能够通过不区分大小写的标题匹配来过滤此列表，我们使用 React 的 useState Hook 和 HTML 输入字段。最后，事件处理程序将从输入字段中读取值并将其写入状态：
```jsx
const byTitle = (title) => (book) =>
  book.title.toLowerCase().includes((title || '').toLowerCase());

const Bookshelf = () => {
  const books = [...];

  const [title, setTitle] = React.useState('');

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <h2>Bookshelf</h2>

      <input type="text" value={title} onChange={handleTitle} />

      <ul>
        {books.filter(byTitle(title)).map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};
```
这就是就是“在 React 中使用状态”的版本。接下来，我们要使用 React Router 来在 URL 中捕获此状态。React Router 为我们提供了 useSearchParams hook，它几乎可以用来替代 React 的 useState hook：
```jsx
import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  useSearchParams,
} from 'react-router-dom';

...

const Bookshelf = () => {
  const books = [...];

  const [search, setSearch] = useSearchParams();

  const handleTitle = (event) => {
    setSearch({ title: event.target.value });
  };

  return (
    <>
      <h2>Bookshelf</h2>

      <input
        type="text"
        value={search.get('title')}
        onChange={handleTitle}
      />

      <ul>
        {books.filter(byTitle(search.get('title'))).map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};
```
由于以下两点，它不能直接替代 React 的 useState Hook。首先，它对一个对象而不是字符串进行操作，因为一个 URL 可以有多个搜索参数（例如 /bookshelf?title=Rust&rating=4），因此每个搜索参数都成为该对象中的一个属性（例如`{ title: 'Rust', rating: 4 }`)。

如果我们将 React 的 useState Hook 与对象而不是字符串一起使用，它本质上与我们之前的实现类似：
```jsx
const [search, setSearch] = React.useState({ title: '' });
```
然而，即使 useSearchParams 返回的有状态值是对象类型（typeof search === 'object'），它仍然不能像单纯的 JavaScript 对象数据结构那样访问，因为它是 URLSearchParams 的一个实例。因此我们需要调用它的 getter 方法（例如 search.get('title')）。

其次，React Router 的 useSearchParams Hook 不接受初始状态，因为初始状态来自 URL。因此，当用户与搜索参数（例如 /bookshelf?title=Rust）共享 URL 时，另一个用户将从 React Router 的 Hook 获得 { title: 'Rust' } 作为初始状态。当应用程序将用户导航到带有搜索参数且设置了可选搜索参数的路线时，也会发生同样的情况。

这就是使用状态的 URL 而不是使用 React 的状态管理 Hook 之一。它极大地改善了用户体验，因为 URL 变得更加特定于用户在页面上看到的内容。因此，这个特定的 URL 可以与其他用户共享，他们将看到具有相同 UI 的页面。

## URLSEARCHPARAMS 转换为对象
如果你在处理 React Router 的 useSearchParams Hook 时不想使用 URLSearchParams，你可以编写一个自定义hook，它返回一个 JavaScript 对象而不是 URLSearchParams 的实例：
```jsx
const useCustomSearchParams = () => {
  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(
    new URLSearchParams(search)
  );

  return [searchAsObject, setSearch];
};

const Bookshelf = () => {
  const books = [...];

  const [search, setSearch] = useCustomSearchParams();

  const handleTitle = (event) => {
    setSearch({ title: event.target.value });
  };

  return (
    <>
      <h2>Bookshelf</h2>

      <input
        type="text"
        value={search.title}
        onChange={handleTitle}
      />

      <ul>
        {books.filter(byTitle(search.title)).map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};
```
然而，这个自定义hook应该有一点不足，因为它不适用于重复键（例如带有 ?editions=1&editions=3 的数组搜索参数）和使用复杂 URL 时的其他边界情况。

一般来说，仅使用 React Router 的 useSearchParams Hook（或这个自定义的 useCustomSearchParams hook）并不能为你提供 URL 状态管理的完整体验，因为它仅可用于字符串而不能用于其他数据类型。我们将在接下来的部分中探讨这一点以及如何解决这个问题。

## 搜索参数与保留数据类型
并非所有状态都只包含字符串。在前面使用 React Router 的搜索参数的例子中，我们使用了一个字符串（这里是：title），它被编码到 URL 中。当从 URL 解码这个字符串时，我们将默认得到一个字符串——这在我们的例子中有效，因为我们需要一个字符串。但是其他原始数据类型如数字或布尔值呢？更不用说复杂的数据类型，例如数组。

为了探索解决这个，我们将通过实现一个复选框来继续之前的示例。我们将使用这个复选框组件并将其连接到 React Router 的搜索参数：
```jsx
const bySearch = (search) => (book) =>
  book.title
    .toLowerCase()
    .includes((search.title || '').toLowerCase()) &&
  book.isCompleted === search.isCompleted;

const Bookshelf = () => {
  const books = [...];

  const [search, setSearch] = useCustomSearchParams();

  const handleTitle = (event) => {
    setSearch({ title: event.target.value });
  };

  const handleIsCompleted = (event) => {
    setSearch({ isCompleted: event.target.checked });
  };

  return (
    <>
      <h2>Bookshelf</h2>

      <input
        type="text"
        value={search.title}
        onChange={handleTitle}
      />

      <Checkbox
        label="Is Completed?"
        value={search.isCompleted}
        onChange={handleIsCompleted}
      />

      <ul>
        {books.filter(bySearch(search)).map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};
```
在浏览器中实验以下。你将看到对 isCompleted 布尔值的搜索不起作用，因为来自我们的搜索对象的 isCompleted 被表示为一个字符串，如“true”或“false”。我们可以通过增强我们的自定义hook来规避这一点：
```jsx
const useCustomSearchParams = (param = {}) => {
  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(
    new URLSearchParams(search)
  );

  const transformedSearch = Object.keys(param).reduce(
    (acc, key) => ({
      ...acc,
      [key]: param[key](acc[key]),
    }),
    searchAsObject
  );

  return [transformedSearch, setSearch];
};

const PARAMS = {
  BooleanParam: (string = '') => string === 'true',
};

const Bookshelf = () => {
  const books = [...];

  const [search, setSearch] = useCustomSearchParams({
    isCompleted: PARAMS.BooleanParam,
  });

  ...

  return (...);
};
```
本质上，新版本的自定义hook采用具有可选转换功能的对象。它遍历每个转换函数，如果找到转换函数和搜索参数之间的匹配项，则将该函数应用于搜索参数。在这种情况下，我们将字符串布尔值（“true”或“false”）转换为实际的布尔值。如果没有找到匹配项，它只返回原始搜索参数。因此我们不需要标题的转换函数，因为它是一个字符串并且可以继续为字符串。

通过拥有自定义hook的实现细节，我们还可以创建其他转换器函数（例如 NumberParam），从而填补缺失数据类型转换（例如数字）的空白：
```javascript
const PARAMS = {
  BooleanParam: (string = '') => string === 'true',
  NumberParam: (string = '') => (string ? Number(string) : null),
  // other transformation functions to map all data types
};
```
开源组件中use-query-params这个库完美的解决这个问题。


## React Router 使用搜索参数
[use-query-params](https://github.com/pbeshai/use-query-params) 库非常适合将复杂的 URL 用作超越字符串的状态的用例。在本节中，我们将探索 use-query-params 库，从而摆脱我们自定义的 useSearchParams hook。

自己按照库的安装说明进行操作。你需要在命令行上安装该库并在 React 项目的根级别实例化它：
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
      <App />
    </QueryParamProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
```
然而， use-query-params 还没有正确适应 React Router 6。因此，你可能会看到以下错误弹出：“`<Route>` 仅用作 `<Routes>` 元素的子元素，永远不会直接呈现。请将你的 `<Route>` 包装在 `<Routes>` 中。”。因此，在根级别调整你的代码：
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import App from './App';

const RouteAdapter = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location) {
        navigate(location, { replace: true, state: location.state });
      },
      push(location) {
        navigate(location, { replace: false, state: location.state });
      },
    }),
    [navigate]
  );
  return children({ history: adaptedHistory, location });
};

ReactDOM.render(
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={RouteAdapter}>
      <App />
    </QueryParamProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
```

现在你可以使用 use-query-params 在 React 中进行强大的 URL 状态管理。你所要做的就是使用新的 useQueryParams 钩子。另请注意，与我们的自定义钩子相比，你还需要“转换”字符串搜索参数：
```jsx
import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  useQueryParams,
  StringParam,
  BooleanParam,
} from 'use-query-params';

...

const Bookshelf = () => {
  const books = [...];

  const [search, setSearch] = useQueryParams({
    title: StringParam,
    isCompleted: BooleanParam,
  });

  ...

  return (...);
};
```
你还可以提供合理的默认值。例如，此时在没有搜索参数的情况下导航到 /bookshelf 时，title 和 isComplete 将是未定义的。但是，如果你希望它们至少是标题的空字符串和 isComplete 的 false，你可以提供这些默认值，例如：
```jsx
import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  useQueryParams,
  StringParam,
  BooleanParam,
  withDefault
} from 'use-query-params';

...

const Bookshelf = () => {
  const books = [...];

  const [search, setSearch] = useQueryParams({
    title: withDefault(StringParam, ''),
    isCompleted: withDefault(BooleanParam, false),
  });

  ...

  return (...);
};
```
还有一件值得注意的事情要提到：目前，use-query-params 使用默认的“push in”模式，这意味着每次附加搜索参数时，它不会覆盖其他搜索参数。因此，你在更改其中之一的同时保留所有搜索参数。但是，如果这不是你想要的行为，你还可以更改模式（例如，更改为“push”），这样将不再保留以前的搜索参数（尽管这在我们的场景中没有意义）：
```jsx
const Bookshelf = () => {
  ...

  const handleTitle = (event) => {
    setSearch({ title: event.target.value }, 'push');
  };

  const handleIsCompleted = (event) => {
    setSearch({ isCompleted: event.target.checked }, 'push');
  };

  ...

  return (...);
};
```
除了我们在这里使用的两种数据类型转换之外，还有对数字、数组、对象等的转换。例如，如果你希望在 React 中有一个可选择的表，你可能希望将表中的每个选定行表示为数组中的标识符（在 use-query-params 中，它是 ArrayParam 转换）映射到实际 URL .然后你可以与另一个用户共享此 URL，该用户将从所选行开始。

使用 URL 作为状态是改善用户体验的方式。在处理单个或多个字符串状态时，React Router 的搜索参数为你提供了一个很好的体验。但是，一旦你想保留映射到 URL 的数据类型，你可能希望使用诸如 use-query-params 之类的库在 React 中进行复杂的 URL 状态管理。

## 参考
[use-query-params](https://pbeshai.github.io/use-query-params/)


