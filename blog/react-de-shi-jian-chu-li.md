---
title: 'React 中的事件处理'
date: 2022-04-11 16:18:20
tags: [React]

---
## 前言
在本节中，我们将了解 React 中用于 HTML 元素（例如按钮和输入元素）的事件处理程序。你将学习如何使用带有 onClick 事件的按钮，以及如何定义和使用不同类型的事件处理程序。本质上，我们将介绍三种事件处理程序：事件处理程序、内联事件处理程序和回调事件处理程序。

## React中的事件处理程序
首先，我们将从 React 中针对特定 onClick 事件处理程序的按钮示例开始。这是关于如何在 React 中使用事件处理程序（也称为事件处理程序函数或处理程序）处理事件的最基本示例。按钮具有接收函数的 onClick 属性。每次触发事件时都会调用此函数（此处：单击按钮时）：
```jsx
import React from 'react';

function App() {
  function handleClick() {
    console.log('Button click ...');
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
    </div>
  );
}
```
对于其他属性，如 onChange（onChange 事件处理程序）和 onSubmit（onSubmit 事件处理程序），它的工作方式类似。对于初学者来说，onClick 经常不起作用，因为他们没有传递函数，而是直接在 JSX 中调用函数。例如，在下一个版本中，事件处理程序仅在第一次渲染组件时被调用一次。其他每一次单击都不会调用事件处理函数，因为函数的返回值用于 onClick 属性而不是函数本身。所以没有什么可调用的；除非函数返回另一个函数：
```jsx
import React from 'react';

function App() {
  function handleClick() {
    console.log('Button click ...');
  }

  // don't do this
  return (
    <div>
      <button type="button" onClick={handleClick()}>
        Event Handler
      </button>
    </div>
  );
}
```
通过使用 JavaScript 箭头函数，可以使事件处理函数更加简洁。不过，这是一个可选步骤。就个人而言，我喜欢将事件处理程序作为箭头函数：
```jsx
import React from 'react';

function App() {
  const handleClick = () => {
    console.log('Button click ...');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
    </div>
  );
}
```
但是一旦更多的事件处理程序在 React 组件中添加，通过再次给它们函数语句来使它们与其他变量更容易区分是很好的：
```jsx
import React from 'react';

function App() {
  const user = {
    id: '123abc',
    username: 'Robin Wieruch',
  };

  function handleUserSignIn() {
    // do something
  }

  function handleUserSignUp() {
    // do something
  }

  function handleUserSignOut() {
    // do something
  }

  ...
}
```
毕竟，onClick 事件的事件处理程序应该实现一些业务逻辑。在本例中，React 的 useState Hook 用于通过 onClick 按钮事件更新某些状态：
```jsx
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      Count: {count}

      <button type="button" onClick={handleClick}>
        Increase Count
      </button>
    </div>
  );
}
```
下一个示例向你展示了一个输入字段而不是一个按钮。在那里，我们使用的是始终作为第一个参数传递给事件处理函数的实际事件。该事件是来自 React 的合成事件，它本质上封装了原生 HTML 事件并在其之上添加了一些功能。每次有人使用事件的目标属性输入输入字段时，此事件都会为你提供输入字段的值：
```jsx
import React from 'react';

function App() {
  const [text, setText] = React.useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />

      {text}
    </div>
  );
}
```
以前我们没有使用过该事件，因为在我们的按钮示例中我们不需要它。在输入字段示例中，我们需要它。最后但同样重要的是，不要忘记将值传递给输入元素以使其成为受控组件：
```jsx
import React from 'react';

function App() {
  const [text, setText] = React.useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />

      {text}
    </div>
  );
}
```
简而言之，这就是事件处理程序。让我们了解 React 中更高级的处理程序。

## React 中的内联事件处理程序
内联事件处理程序，也称为内联处理程序，通过直接在 JSX 中使用事件处理程序为我们提供了许多新选项：
```jsx
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Count: {count}

      <button
        type="button"
        onClick={function() {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
}
```
在 JSX 中使用通用函数语句虽然很冗长。因此，JavaScript 箭头函数可以方便地定义更简洁的内联处理程序：
```jsx
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Count: {count}

      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
    </div>
  );
}
```
一般来说，开发者都是懒惰的人，所以经常使用内联事件处理程序来避免在 JSX 之外进行额外的函数声明。然而，这会将大量业务逻辑转移到 JSX 中，这使得它的可读性、可维护性和易错性降低。就个人而言，我喜欢在没有内联事件处理程序的情况下保持 JSX 干净，并在 JSX 之外声明事件处理程序。
内联处理程序也用于将参数传递给在 JSX 之外定义的更通用的处理程序：
```jsx
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  function handleCount(delta) {
    setCount(count + delta);
  }

  return (
    <div>
      Count: {count}

      <button type="button" onClick={() => handleCount(1)}>
        Increase Count
      </button>
      <button type="button" onClick={() => handleCount(-1)}>
        Decrease Count
      </button>
    </div>
  );
}
```
这样，也可以并行传递事件和参数。即使在此示例中不需要它，但你肯定会在将来遇到需要该事件的一种或另一种情况（例如 React Forms 的 preventDefault ）：
```jsx
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  function handleCount(event, delta) {
    setCount(count + delta);
  }

  return (
    <div>
      Count: {count}

      <button type="button" onClick={event => handleCount(event, 1)}>
        Increase Count
      </button>
      <button type="button" onClick={event => handleCount(event, -1)}>
        Decrease Count
      </button>
    </div>
  );
}
```
因此，当你需要传递事件和参数时，例如当你需要为 onClick 事件提供额外参数时，内联事件处理程序可能会为你提供帮助。然后 JSX 之外的更通用的事件处理程序可以使用这个额外的参数。

## React 中的回调事件处理程序
简而言之，有回调事件处理程序或回调处理程序。当子组件需要与父组件通信时使用它们。由于 React props 只在组件树中向下传递，因此使用回调处理程序（其核心是一个函数）进行向上通信：
```jsx
import React from 'react';

function App() {
  const [text, setText] = React.useState('');

  // 1
  function handleTextChange(event) {
    setText(event.target.value); // 3
  }

  return (
    <div>
      <MyInput inputValue={text} onInputChange={handleTextChange} />

      {text}
    </div>
  );
}

// 2
function MyInput({ inputValue, onInputChange }) {
  return (
    <input type="text" value={inputValue} onChange={onInputChange} />
  );
}
```
回调处理程序在某处定义 (1)，在其他地方使用 (2)，但回调到其定义的位置 (3)。这样，就可以从子组件到父组件进行通信。回调处理程序通过 React props 向下传递，并在调用函数时向上通信。

你已经了解了 React 的事件处理程序、内联事件处理程序和回调事件处理程序，以及如何在按钮中为它们的 onClick 事件和在输入字段中为它们的 onChange 事件使用它们。还有其他事件处理程序，例如表单元素的 onSubmit，实际上需要该事件来阻止本机浏览器行为。无论如何，所有这些事件处理程序都有其特定目的。你的目标应该是让你的代码保持可读性和可维护性，