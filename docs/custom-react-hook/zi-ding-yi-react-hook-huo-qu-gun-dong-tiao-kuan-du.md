---
title: 'useScrollbarWidth'
date: 2022-04-14 16:02:17
tags: [React]

---
## 获取滚动条宽度 
本节实现一个简洁的自定义 React Hook，它可以让你获得滚动条的宽度。你可以在任何 React 组件中使用它，它会返回这个特定浏览器（和操作系统）的滚动条的宽度：
```jsx
import * as React from 'react';

export const useScrollbarWidth = () => {
  const didCompute = React.useRef(false);
  const widthRef = React.useRef(0);

  if (didCompute.current) return widthRef.current;

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  didCompute.current = true;
  widthRef.current = scrollbarWidth;

  return scrollbarWidth;
};
```
本质上，自定义Hook只是将隐藏的滚动条呈现到项目中，对其进行测量，然后再次将其删除。之后它返回结果。

作为替代方案，如果你希望在水平滚动容器的情况下使用高度而不是滚动条的宽度，则只需将宽度属性替换为高度属性。

就我个人而言，我自己从未遇到过这个问题，但是，当我们在客户端机器上测试应用程序时，在某些情况下滚动条没有覆盖并占用空间。通常这没关系，但是，我们遇到了一些用例，我们必须拥有滚动条的大小才能解决有关应用程序布局的问题。
