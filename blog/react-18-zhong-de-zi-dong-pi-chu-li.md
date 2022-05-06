---
title: 'React 18 中的自动批处理'
date: 2022-03-14 21:37:21
tags: [React]

---
## 前言
`React 18` 支持对状态更新的自动批处理支持。 这有助于避免在 `Promise`、`setTimeout`、`setInterval`、原生事件处理程序以及`react`事件处理程序中多次渲染状态更新。 因此，由于自动批处理，我们在`React` 应用程序中获得了开箱即用的性能改进。

## 什么是（自动）批处理？
批处理是将多个状态更新分组为单个更新的过程。 如果我们有多个调用来设置组件的状态，`React` 会将这些更新组合在一个更新调用（称为批处理）中，从而导致组件的一次重新渲染。 当 `React` 自动计算出这一点并批量更新状态时，它被称为自动批处理，下面让我们通过探究更新状态的各种方式来看看它是如何工作的？

## React 17 及之前的事件处理程序的状态更新
让我们举个例子来了解在 `React 17` 中事件处理程序上的状态更新时渲染是如何发生的？
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setShowModal((prev) => !prev);
    // React renders once at the end (that's batching)
  };

  console.log('rendered component');

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>{`Show modal? ${showModal}`}</p>
      <button onClick={handleClick}>Click me</button>
      </div>
  );
}
```
现在，我们可以看到有两个状态更新调用。 一个用于 `setCount`，另一个用于 `setShowModal`。 但是，`react` 确保最后只调用一个渲染。
如果更新不是批处理的，它会以不成熟方式渲染组件，导致 UI 闪烁。 即我们希望我们的组件仅在更新计数和更新 `showModal` 标志后才呈现。

## React 17 及之前的 Promise 和原生事件处理程序的状态更新
自动批处理不适用于`promise`/非`react`处理程序（如 `setTimeout`、`setInterval` 等）中的状态更新。
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log('fetch called');

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(() => {
        setCount(count + 1); // Re-render is called
        setShowModal((prev) => !prev); // Re-render is called
      })
  };

  console.log('rendered component');

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>{`Show modal? ${showModal}`}</p>
      <button onClick={handleClick}>Click me now</button>
    </div>
  );
}
```
通常，我们调用 API 请求来获取某些内容并根据 API 请求的响应在回调中执行状态更新。 正如我们在上面的示例中看到的，有 2 次调用来设置回调中的状态，导致 2 次重新渲染。
这是一个性能瓶颈。 这可能会导致 UI 闪烁，从而呈现部分状态更新的结果。

## React 18+ 中 Promise 和原生事件处理程序的状态更新
`React` 通过为 `Promise`、`setTimeou`t 和 `setInterval`、原生事件处理程序以及默认的 `react` 事件处理程序中的状态更新提供自动批处理支持来解决此问题。
注意：对于这个例子，我们已经更新了如下所示的 `react` 和 `react-dom` 库版本。
```shell
https://unpkg.com/react@18.0.0-beta-24dd07bd2-20211208/umd/react.development.js
https://unpkg.com/react-dom@18.0.0-beta-24dd07bd2-20211208/umd/react-dom.development.js
```
如果我们采用与上面给出的相同示例，我们可以在下面看到渲染的数量。
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log('fetch called');

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(() => {
        setCount(count + 1);
        setShowModal((prev) => !prev);
        // React 18 renders once at the end (that's automatic batching)
      })
  };

  console.log('rendered component');

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>{`Show modal? ${showModal}`}</p>
      <button onClick={handleClick}>Click me</button>
      </div>
  );
}
```
注意：我们需要将渲染升级为`createRoot`。 对于上面给出的示例，我们渲染了 `Counter` 组件，如下所示。 我们使用 `ReactDOM.createRoot` 创建了根，然后在其上渲染了 `Counter` 组件。
