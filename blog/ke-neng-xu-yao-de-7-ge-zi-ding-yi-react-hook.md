---
title: '7 个可能需要的自定义 React Hook'
date: 2021-11-29 22:52:17
tags: [React]
---
## 前言
本文主要编制了一份清单，列出了在项目中可能会需要用到的的七个Hooks。
![](https://umeimmense.github.io/post-images/1638197755400.jpeg)

##  1. useToggle
这个hook很常见，它用于在 true 和 false 之间切换布尔值。当我们想要显示/隐藏模式或打开/关闭侧边菜单时，它很有用。这个hook的基本版本如下所示：
### 实现v1
```jsx
// useToggle.jsx
import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);
  
  return [state, toggle];
};

export default useToggle;
```
### 案例1
```jsx
import useToggle from './useToggle';
const App = () => {
  const [show, toggleShow] = useToggle();
  return (
    <Modal show={show} onClose={toggleShow}>
      <h1>Hello there</h1>
    </Modal>
  );
}
```
当我们想要显示/隐藏表中一行的模式时，可以稍微修改此hook以用于用例。我添加了一个 customToggle 方法，该方法将值设置为给定值，而不是切换先前的状态值。

### 实现v2
```jsx
// useToggle.jsx modified

import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  const customToggle = useCallback((value) => {
    setState(value);
  }, []);

  return [state, toggle, customToggle];
};

export default useToggle;
```
### 案例2
假设我们在一个表格中有一堆行，我们想提供一个删除行的选项。单击删除按钮应打开一个确认模式。
对于这种类型的功能，我们需要状态中的两个变量。首先，保存一个布尔值来确定是否显示删除确认模式，其次保存必须显示删除模式的行 ID。
使用这个hook，我们可以用一个状态变量来完成。这是如何做到的：
```jsx
import useToggle from './useToggle';

// initial data
const rows = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' }
];

const App = () => {
  // using hook
  const [delModal, toggleDelModal, setDelModalCustom] = useToggle();

  return (
    <div>
      <table>
        {rows.map(row => (
          <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td onClick={() => setDelModalCustom(row.id)}>Delete</td>
          </tr>
        ))}
      </table>

      <DeleteModal
        show={Boolean(delModal)}
        onClose={toggleDelModal}
        itemToDelete={delModal} // it will hold the current row id
      >
        <h1>
          Are you sure you want to delete row with id {delModal}
        </h1>
      </DeleteModal>
    </div>
  );
}
```
## 2. usePageBottom
使用此hook，你可以确定用户是否已滚动到页面底部。非常适合无限滚动的应用程序，当用户滚动到页面底部时，你需要获取更多数据。
```jsx
// usePageBottom.jsx

import { useState, useEffect } from 'react';

const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState(false);
  
  // event handler for determining if the user reached bottom
  const handleScroll = () => {
    const offsetHeight = document.documentElement.offsetHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    // if current scroll from bottom is less than equal to 10px
    const reachingBottom = offsetHeight - (innerHeight + scrollTop) <= 10;

    setReachedBottom(reachingBottom);
  };

  // effect for binding event listener on window scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  return reachedBottom;
}
```
###  案例
```jsx
import usePageBottom from './usePageBottom';
const App = (props) => {
  // hook usage
  const scrolledBottom = usePageBottom();
  return (
    <div className="App" style={{ height: '150vh' }}>
      <h1>This is app</h1>
      <p>Scrolled to bottom {scrolledBottom}</p>
    </div>
  );
}
```
### 节流版本（可选）
减少像窗口滚动事件这样多次触发的事件的通知是最佳实践，我们可以使用节流设置事件侦听器。我正在使用 `lodash` 的`throttle`；你也可以使用去`debounce`。
```jsx
// usePageBottom with throttle

import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';

const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState(false);
  
  // event handler for determining if the user reached bottom
 const handleScroll = useMemo(() => {
    return throttle(() => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      // if current scroll from bottom is less than equal to 10px
      const reachingBottom = offsetHeight - (innerHeight + scrollTop) <= 10;
      
      setReachedBottom(reachingBottom);
    }, 1000);
  }, []);

  // effect for binding event listener on window scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  return reachedBottom;
}
```
## 3. useElementBottom
就像页面底部一样，我们也可以确定用户是否已经滚动到元素的底部。在这个hook中，传递了对元素的引用，因此我们可以使用元素的高度和当前滚动位置来确定元素是否滚动到底部。
```jsx
// useElementBottom.jsx

import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';

const useElementBottom = (element) => {
  const [reachedBottom, setReachedBottom] = useState(false);

  // event handler for determining if the user reached bottom
  const handleScroll = useMemo(() => {
    return throttle(() => {
      const { current } = element; // current holds the reference to element

      // if current scroll from bottom is less than equal to 10px
      const scrollBottom =
        current.scrollHeight - current.scrollTop - current.clientHeight;

      const reachingBottom = scrollBottom <= 10;
      setReachedBottom(reachingBottom);
    }, 1000);
  }, []);

  // effect for binding event listener on element scroll
  useEffect(() => {
    const { current } = element;
    current.addEventListener('scroll', handleScroll);

    return () => current.removeEventListener('scroll', handleScroll);
  }, []);

  return reachedBottom;
};

export default useElementBottom;
```
###  案例
```jsx
import useElementBottom from './useElementBottom';
const App = (props) => {
  const element = useRef();
  // hook usage
  const scrolledBottom = useElementBottom(element);
  return (
    <div ref={element} style={{ height: '150vh' }}>
      <h1>This is app</h1>
      <p>Scrolled to bottom {scrolledBottom}</p>
    </div>
  );
}
```
## 4. usePrevious
我们可以制作一个自定义hook来获取 prop 或 state 的先前值。使用 React 类组件，可以使用 componentDidUpdate 生命周期来获取之前的 prop 和 state 值。对于功能组件，我们可以使用自定义hook来完成，如下所示：
```jsx
// usePrevious.jsx

import { useEffect, useRef } from 'react';

const usePrevious = (value) => {
  const ref = useRef();

  // store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // return previous value (happens before update in useEffect above)
  return ref.current;
};

export default usePrevious;
```
我们使用 useRef hook来存储先前的值。我们的hook在 useEffect 中更新引用对象之前返回先前的值。
```jsx
import usePrevious from './usePrevious';

const App = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
## 5. useWindowSize
这个hook返回窗口的宽度和高度。我们在调整窗口大小时设置了一个受限制的 set 事件侦听器，以便我们每次都能获得正确的宽度和高度。
```jsx
// useWindowSize

import { useState, useEffect, useCallback } from 'react';
import { throttle } from 'throttle';

const useWindowSize = () => {
  const [size, setSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  // throttled set listener that runs on window resize
  const throttledSetResizeListner = useCallback(
    throttle(() => {
      // set size in state
      setSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    }, 1000),
    []
  );

  // effect for binding resize event on window
  useEffect(() => {
    // add throtelled set window resize event listener
    window.addEventListener('resize', throttledSetResizeListner);

    // remove throttled set window resize event listener
    return () =>
      window.removeEventListener('resize', throttledSetResizeListner);
  }, [throttledSetResizeListner]);

  return size;
};

export default useWindowSize;
```
###  案例
当你想根据窗口的宽度或高度在你的 JS 代码中做一些事情时，它很有用。
```jsx
import useWindowSize from './useWindowSize';
const App = () => {
  const { innerWidth, innerHeight } = useWindowSize();
  return (
    <div>
      {innerWidth <= 768 ?
        'I am on small screen' : 'I am on large screen'}
    </div>
  );
}
```
## 6. useEventListener
使用此hook可以轻松地将事件侦听器绑定到窗口或窗口元素。在hook的effect中，我们检查元素是否是来自 useRef 的引用。如果没有，我们将事件侦听器添加到全局窗口对象。
```jsx
import { useEffect } from 'react';

const useEventListener = (event, handler, referencedElement) => {
  // effect for binding event handler to the element
  useEffect(() => {
    const element = referencedElement?.current || window;

    const isSupported = element && element.addEventListener;

    if (!isSupported) return;

    // bind event to the element
    element.addEventListener(event, handler);

    return () => element.removeEventListener(event, handler);
  }, [referencedElement, event, handler]);

  return;
};

export default useEventListener;
```
```jsx
import useEventListener from './useEventListener';

const App = (props) => {
  const element = useRef();
  useEventListener('mouseover', handler, element);
  const handler => () => {
    console.log('Event triggered');
  }
  return (
    <div ref={element}>
      <h1>This is app</h1>
    <div>
  );
}
```
我们还可以使用相同的hook将事件添加到窗口
```jsx
import useEventListener from './useEventListener';
const App = (props) => {
  // adding event listener on window scroll
  useEventListener('scroll', handler);
  const handler => () => {
    console.log('Event triggered');
  }
  return (
    <div>
      <h1>This is app</h1>
    <div>
  );
}
```
## 7. useLocalStorageState
有时，可能需要在本地存储和状态之间同步一个值。这个hook的作用完全一样。我们正在使用 useState 并检查指定的键是否在本地存储中具有某个值，以便我们可以将其用作初始值。这允许我们在页面刷新时保持值与状态同步。
```jsx
// useLocalStorageState

import { useState, useEffect } from 'react';

const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let val;

    try {
      // if there is a value in local storage for given key, set it as initial state
      val = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      // otherwise, set default value as initial state
      val = defaultValue;
    }

    return val;
  });

  // effect to update local storage when state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorageState;
```
当值更新时，会运行一个effect ，更新本地存储中的值。
### 案例
假设你想在本地存储中存储用户主题首选项
```jsx
import useLocalStorageState from './useLocalStorageState';
const App = (props) => {
  // setting default theme to light
  const [theme, setTheme] = useLocalStorageState('theme', 'light');
  return (
    <div>
      <p>Current theme is {theme}</p>
      <button onClick={() => setTheme('dark')}>
        Change theme to dark
      </button>
    </div>
  );
}
```
当你点击更改主题按钮时，状态和本地存储中的值都会更新。页面刷新后，你将获得存储在本地存储中的最后一个值。

## 结语
感谢你阅读到最后。我希望这些自定义hook对你有用。

