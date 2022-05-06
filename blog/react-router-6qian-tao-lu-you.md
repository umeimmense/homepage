---
title: 'React Router 6：嵌套路由'
date: 2021-12-14 11:28:09
tags: [React,React Router]

---
## 前言
本文教你如何在 React Router 6 中使用嵌套路由。嵌套路由是一个强大的功能。虽然大多数人认为 React Router 只会在页面之间路由使用，但它也允许用户根据当前路由交换视图的特定片段。例如，在用户页面上，会显示多个选项卡（例如个人资料、帐户）以浏览用户信息。通过单击这些选项卡，浏览器中的 URL 会发生变化，但不会替换整个页面，只会替换选项卡的内容。
![](https://umeimmense.github.io/post-images/1639933512952.webp)
下面我们将使用 React Router 重新创建这个场景。为了说明这是如何工作的，以及如何自己在 React 中逐步实现嵌套路由，我们将从以下示例开始：
```jsx
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
```
在这个函数组件中，我们使用了 React Router 中的 Link 和 Route 组件，用于 home/ 和 user/ 路由。此外，我们有一个加载了 Home 组件的所谓的索引路由和一个加载了 NoMatch 组件的所谓的 No Match 路由。两者都作为备选路线。从这里开始，我们将了解嵌套路由的概念。

## React Router 中的嵌套路由
我们将继续处理 User 组件，这是我们希望通过选项卡进行嵌套路由的地方。因此，我们将实例化一组新的 Link 组件（将是我们的无样式选项卡），用于将用户导航到他们的个人资料和他们的帐户。
```jsx
const User = () => {
  return (
    <>
      <h1>User</h1>

      <nav>
        <Link to="/user/profile">Profile</Link>
        <Link to="/user/account">Account</Link>
      </nav>
    </>
  );
};
```
我们在这里使用绝对路径将用户从他们的个人资料导航到他们的帐户，反之亦然，但是，我们也可以使用相对路径作为最佳实践。因为 User 组件位于 /user 路由中，所以 Link 组件可以预测它们的父路由（这里是：/user），并且只需将相对路径（这里：profile 和 account）附加到它（例如 /user/profile）：
```jsx
const User = () => {
  return (
    <>
      <h1>User</h1>

      <nav>
        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>
    </>
  );
};
```
此时，当我们尝试在 React 应用程序中单击这些链接之一时，我们将被困在我们的 No Match Route 中。这告诉我们，我们还没有将这些路由（此处：/user/profile 和 /user/account）映射到任何实际的路由组件。因此，我们将这两个新路由作为所谓的嵌套路由添加到我们的 /user 路由中：
```jsx
const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="user" element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
```
Route 组件现在以一对一的关系映射到 Link 组件。但是，可以有多个 Link 组件链接到同一个路由，因此它实际上是一对多的关系。

在浏览器中对此进行测试时，我们将看到仅显示 User 组件，而不会显示其嵌套的 Profile 组件，也不会显示其嵌套的 Account 组件。我们缺少 React Router 的关键 Outlet 组件：
```jsx
import { Routes, Route, Link, Outlet } from 'react-router-dom';

...

const User = () => {
  return (
    <>
      <h1>User</h1>

      <nav>
        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>

      <Outlet />
    </>
  );
};
```
Outlet 组件从父 Routes 的 Route 组件集合中使用其各自的组件（此处为 Profile 或 Account 组件）呈现匹配的子路由。
![](https://umeimmense.github.io/post-images/1639933949387.webp)
如果没有 /profile 和 /account 路由匹配（例如 /user/settings），你将只看到 User 组件出现。为避免这种情况，你可以添加索引和无匹配路由的组合。之后，默认路由将是 /profile 路由：
```jsx
const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="user" element={<User />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
```
虽然 User 组件总是将选项卡呈现为导航，但其内容（Outlet）被匹配的嵌套路由（基于 /user/profile 或 /user/account 路由的 Profile 或 Account 组件）替换。如果在访问 /user 路由时这些路由都不匹配，应用程序将显示 Profile 组件（如果路由与 /user 完全匹配）或 NoMatch 组件（如果路由不匹配，例如 /user/setting）出现。

## React router 中的 动态嵌套路由
在嵌套路由的下一个示例中，我们将从 App 组件中开始。这次我们不想像之前那样渲染静态嵌套路由（例如 /user/profile），而是基于标识符的动态嵌套路由（例如 /users/1 用于显示具有标识符 1 并因此匹配此路由的用户）。因此，我们将示例从单用户路由 (/user) 调整为多用户路由 (/user)。
```jsx
const App = () => {
  const users = [
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
  ];

  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};
```
Users 组件成为 React 中的列表组件，因为它遍历每个用户并为其返回 JSX。在这种情况下，它不仅仅是一个列表，因为我们将 React Router 的 Link 组件添加到组合中。 Link 组件中的相对路径提示相应的嵌套（此处：/${user.id} 嵌套在 /users 中）但动态（此处：/${user.id}）路由：
```jsx
const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>
              {user.fullName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
```
通过拥有这个新的动态嵌套路由，我们需要在 App 组件中为它创建一个匹配的嵌套路由组件。首先，由于它是 /users 路由的所谓嵌套路由（或子路由），我们可以将它嵌套在相应的父路由组件中。此外，由于它是所谓的动态路由，它使用定义为 :userId 的动态路由，而用户的标识符则动态匹配（例如，id 为 '1' 的用户将与 /users/1 匹配）：
```jsx
const App = () => {
  const users = [
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
  ];

  return (
    <h1>React Router</h1>

    <nav>...</nav>

    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users users={users} />}>
          <Route path=":userId" element={<User />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
```
这样，User 组件就变成了 Users 组件的嵌套路由。因此，再次在 Outlet 组件的帮助下渲染其嵌套路由是用户组件的责任——再次渲染匹配的子路由：
```jsx
import { Routes, Route, Link, Outlet } from 'react-router-dom';

...

const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>

      <ul>...</ul>

      <Outlet />
    </>
  );
};
```
接下来，我们将声明缺少的 User 组件，只要用户的标识符在 URL 中匹配，该组件就会通过 Users 组件中的 Outlet 嵌套。在这个新组件中，我们可以使用 React Router 的 useParams Hook 从 URL 中获取相应的 userId（等于 :userId）：
```jsx
import {
  ...
  useParams,
} from 'react-router-dom';

...

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>

      <Link to="/users">Back to Users</Link>
    </>
  );
};
```
我们已经看到了如何通过将一个 Route 组件（或多个 Route 组件）嵌套在另一个 Route 组件中来创建嵌套路由。前者是嵌套的子路由，后者是渲染封闭组件的父路由，该组件必须使用 Outlet 组件来渲染实际匹配的子路由。

此外，我们还看到了如何通过在路由的路径属性中使用冒号（例如：userId）来创建动态路由。本质上， :userId 充当任何标识符的星号。在我们的例子中，我们使用 Link 组件将用户导航到 /users/:userId 路由，其中​​ :userId 代表实际用户的标识符。最后，我们总是可以通过使用 React Router 的 useParams Hook 从 URL 中获取动态路径（称为参数或 params）。

如果你碰巧将 React Router 用于你的 React 应用程序，嵌套路由可以通过让你的用户访问你的应用程序非常特定的部分，同时将这些部分作为 URL 共享，从而极大地提升你的用户体验。
