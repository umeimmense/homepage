---
title: 'Custom React Hook '
date: 2022-04-13 15:35:45
tags: [React]
sidebar_position: 1
---
## 如何自定义react hook
React 很久以前就引入了 Hooks。随着 Hooks 的发布，函数组件能够使用内置 Hooks 的状态和副作用，例如 React 的 useState Hook 和 React 的 useEffect Hook。
不过，React 只提供了少数内置 Hook（例如 useReducer、useCallback、useMemo、useContext）。但是，通过使用这些 Hooks 作为基础，React 开发人员可以创建自己的称为自定义 Hooks 的 Hooks。

在我们创建自定义Hook之前，你需要知道创建一个有两个规则：
- 自定义 Hooks 以“use”为前缀命名。例如，自定义Hook可以命名为 useLocalStorage 或 useAuthentication。在我们的例子中，自定义Hook将被命名为 useBoolean。
- 自定义 Hooks 由内置的 React Hooks 或其他自定义 Hooks 组成。因此，自定义 Hook 始终是一个或多个 Hook 的新组合。如果自定义 Hook 在内部不使用任何Hook，则它不是自定义 Hook，不应具有前缀“use”。
  
## 自定义Hook
我们将创建一个名为 useBoolean 的自定义 Hook，让我们看看它为我们解决了什么问题。让我们从一个小例子开始：
```jsx
import * as React from 'react';

function App() {
  const [isToggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle(!isToggle);

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>

      {isToggle.toString()}
    </div>
  );
}

export default App;
```
该组件呈现一个用于切换布尔值的按钮。在React 应用程序中，要么切换它（如上一个示例），要么将其显式设置为 true 或 false（如下一个示例）：
```jsx
import * as React from 'react';

function App() {
  const [isToggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle(!isToggle);
  const handleTrue = () => setToggle(true);
  const handleFalse = () => setToggle(false);

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>
      <button type="button" onClick={handleTrue}>
        To True
      </button>
      <button type="button" onClick={handleFalse}>
        To False
      </button>

      {isToggle.toString()}
    </div>
  );
}

export default App;
```
一些观点可能会争辩说，我们本可以使用内联处理程序，这样就不会有事件处理程序的重复声明。然而，我个人尽量避免使用内联处理程序，因为它们向 JSX 注入了太多逻辑，而应该在组件的函数签名和返回语句之间定义。但这只是个人喜好。
无论如何，每次使用有状态布尔值时，都会遇到相同的实现细节：要么切换布尔值，要么将其设置为两个可能值之一。为了在多个 React 组件中使用有状态布尔值时屏蔽这些重复代码，我开始为它创建一个自定义Hook：
```jsx
const useBoolean = () => {
  const [state, setState] = React.useState();

  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle,
    },
  ];
};
```
基本上所有实现细节，即状态和事件处理程序，都移到了这个名为 useBoolean 的自定义Hook中。此外，自定义Hook返回状态和更新数组中状态的函数。
从自定义Hook返回多个值时，返回一个数组是最佳实践，因为 React 的内置 Hooks（在返回多个值的情况下）利用了数组，因此也使用了数组解构。使用数组解构的好处是可以为解构的值赋予任何名称（在对象解构的情况下，代码比重命名值要少）。
```jsx
const useBoolean = (initialState = false) => {
  const [state, setState] = React.useState(initialState);

  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle,
    },
  ];
};
```
一个很好的补充是也添加一个初始状态（如最后一个代码片段所示）。回到我们的 App 组件，我们可以通过向它传递初始状态并使用它的返回值来显示状态并更新它来使用这个新的自定义Hook：
```jsx
function App() {
  const [isToggle, { setToggle }] = useBoolean(false);

  return (
    <div>
      <button type="button" onClick={setToggle}>
        Toggle
      </button>

      {isToggle.toString()}
    </div>
  );
}
```
由于自定义Hook不仅提供了切换有状态布尔值的功能，而且还可以将其显式设置为True或False，我们也可以使用这些功能：
```jsx
function App() {
  const [isToggle, {
    setToggle,
    setTrue,
    setFalse,
  }] = useBoolean(false);

  return (
    <div>
      <button type="button" onClick={setToggle}>
        Toggle
      </button>
      <button type="button" onClick={setTrue}>
        To True
      </button>
      <button type="button" onClick={setFalse}>
        To False
      </button>

      {isToggle.toString()}
    </div>
  );
}
```
本质上，我们将有状态的布尔值和所有在布尔值上运行的事件处理程序提取到一个自定义Hook中。通过每次我们需要一个有状态的布尔值时使用这个自定义钩子，我们可以节省定义事件处理程序，其中包括有关如何操作布尔值的实现细节，而不是使用从钩子返回的函数。

总之，我们已经学习了如何使用 React 的内置 Hook 之一（称为 useState）来创建自定义钩子。这个自定义钩子并不复杂，但是，它应该向你展示如何减少 React 项目中的复杂性和冗余。
