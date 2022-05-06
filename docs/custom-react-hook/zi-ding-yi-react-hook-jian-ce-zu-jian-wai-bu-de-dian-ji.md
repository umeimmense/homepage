---
title: 'useOutsideClick'
date: 2022-04-14 16:00:20
tags: [React]
---


## 检测组件外部的点击
本章我们一起来聊聊如何创建自定义 React Hook来检测 React 组件外部的点击。例如，你可能希望为各种组件（如对话框或下拉菜单）提供此类自定义 React Hook，因为当用户单击它们外部时它们应该关闭。所以我们需要一种方法来找出这个外部点击。
在这里学到的大部分内容都可以追溯到 JavaScript 中事件冒泡和捕获的概念。因此，如果你需要对冒泡、目标和捕获阶段进行复习，我建议你阅读以下文章，之前该文章涉及 React 的这个主题。

让我们从 React 中的一个函数组件开始，我们使用 React 的 useState Hook 和一个事件处理程序来增加一个计数器：

```jsx
import * as React from 'react';

const style = {
  padding: '10px',
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'flex-end',
};

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((state) => state + 1);
  };

  return (
    <div style={style}>
      <button type="button" onClick={handleClick}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;
```

一切都按预期工作。接下来，我们要在用户单击按钮外部时重置状态（此处为：计数）。我们可以编写用于重置状态的事件处理程序，但是尚不清楚在哪里使用它：

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  const handleClickOutside = () => {
    setCount(0);
  };

  const handleClick = () => {
    setCount((state) => state + 1);
  };

  return (
    <div style={style}>
      <button type="button" onClick={handleClick}>
        Count: {count}
      </button>
    </div>
  );
}
```

一种原始的方法是在顶级组件的最外层 HTML 元素（这里：

```jsx
const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      callback();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};
```

自定义Hook会启动一个最终返回的 React ref。它还没有真正用在Hook的实现细节中。此外，自定义Hook使用 React 的 useEffect Hook在文档级别分配（和删除）一个事件监听器（这里：单击事件）。毕竟，每当单击文档时，处理程序以及传递的回调函数都会运行。

现在自定义Hook可以在我们的 React 组件中以下列方式使用：将事件处理程序作为回调函数传递给Hook——只要单击文档就会执行。此外，使用返回的引用（此处为：ref）并将其分配给按钮 HTML 元素：

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  const handleClickOutside = () => {
    setCount(0);
  };

  const ref = useOutsideClick(handleClickOutside);

  const handleClick = () => {
    setCount((state) => state + 1);
  };

  return (
    <div style={style}>
      <button ref={ref} type="button" onClick={handleClick}>
        Count: {count}
      </button>
    </div>
  );
}
```

但是，你会注意到，处理程序将始终触发，即使在单击按钮本身时也是如此。如果你再次检查自定义Hook，你将看到该引用（ref）并没有真正在其中使用。我们想要完成的事情：仅在单击传递的 ref（此处表示按钮）之外的任何内容时执行回调函数，而不是在单击 ref 本身（或其内容）时执行回调函数：

```jsx
const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};
```

就是这样。分配给按钮的引用是触发按钮的事件处理程序和文档的事件处理程序之间的边界。在参考之外点击的所有内容都将被视为外部点击。

但是缺少一个小的改进：如果我们需要通过在事件处理程序上使用 stopPropagation() 方法来停止某些边缘情况下的事件冒泡怎么办。例如，在下面我们通过单击容器元素来扩展组件并在那里停止事件的传播：

```jsx
const style = {
  padding: '10px',
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'space-between',
};

...

function App() {
  const [count, setCount] = React.useState(0);

  const handleClickOutside = () => {
    setCount(0);
  };

  const ref = useOutsideClick(handleClickOutside);

  const handleClick = () => {
    setCount((state) => state + 1);
  };

  const handleHeaderClick = (event) => {
    // do something

    event.stopPropagation();
  };

  return (
    <div style={style} onClick={handleHeaderClick}>
      <div>Header</div>
      <button ref={ref} type="button" onClick={handleClick}>
        Count: {count}
      </button>
    </div>
  );
}
```

当我们尝试这个例子时，我们会看到容器上的点击不会作为“外部点击”，因为即使它是外部点击，由于事件停止冒泡，它永远不会到达文档的事件侦听器。

通过使用冒泡和捕获阶段，我们可以调整自定义Hook以在捕获阶段触发。因为捕获阶段发生在冒泡阶段之前，所以即使事件在冒泡阶段停止传播，对文档的点击也将始终运行：

```jsx
const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};
```

就是这样。你创建了一个自定义挂钩来检测引用的组件/元素之外的点击。建议你再次阅读事件冒泡和捕获文章，以更深入地解释这些阶段发生的事情。
