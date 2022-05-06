---
title: 'useIsOverflow'
date: 2022-04-14 16:01:26
tags: [React]
---
## 检查是否溢出
本节我们实现一个简洁的自定义 React Hook，它检查元素的内容是否溢出（这里：垂直溢出）：
```jsx
import * as React from 'react';

export const useIsOverflow = (ref, callback) => {
  const [isOverflow, setIsOverflow] = React.useState(undefined);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};
```
如果你想检测水平溢出，可以将 hasOverflow 分配交换为以下内容：
```jsx
const hasOverflow = current.scrollWidth > current.clientWidth;
```
在一个函数组件中，自定义的 React Hook可以这样使用：
```jsx
import * as React from 'react';

import { useIsOverflow } from './useIsOverflow';

const App = () => {
  const ref = React.useRef();
  const isOverflow = useIsOverflow(ref);

  console.log(isOverflow);
  // true

  return (
    <div style={{ overflow: 'auto', height: '100px' }} ref={ref}>
      <div style={{ height: '200px' }}>Hello React</div>
    </div>
  );
};
```
Hook第一次返回未定义，因为状态尚未设置。

自定义Hook还接受一个可选的回调函数，该函数在检查溢出后触发：
```jsx
const App = () => {
  const ref = React.useRef();
  const isOverflow = useIsOverflow(ref, (isOverflowFromCallback) => {
    console.log(isOverflowFromCallback);
    // true
  });

  console.log(isOverflow);
  // true

  return (
    <div style={{ overflow: 'auto', height: '100px' }} ref={ref}>
      <div style={{ height: '200px' }}>Hello React</div>
    </div>
  );
};
```
如果元素的大小发生变化，你可以调整自定义Hook以再次检查验证溢出，但前提是浏览器支持 ResizeObserver：
```jsx
import * as React from 'react';

export const useIsOverflow = (ref, callback) => {
  const [isOverflow, setIsOverflow] = React.useState(undefined);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      if ('ResizeObserver' in window) {
        new ResizeObserver(trigger).observe(current);
      }

      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};
```
最后，可能有很多方法可以改进这个自定义Hook（例如，在自定义Hook中初始化 ref 并从自定义Hook返回它以将其附加到元素，只触发一次自定义Hook）。
