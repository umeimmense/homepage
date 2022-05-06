---
title: 'useUpdateEffect'
date: 2022-04-27 22:03:14
tags: [React]

---
## useEffect实现只在更新时执行
本节我们实现自定义React hook useUpdateEffect ，它会忽略第一次的副作用，只在后续更新时执行。
```jsx
import * as React from 'react';

const App = () => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) {
      console.log('I run only if toggle changes.');
    } else {
      didMount.current = true;
    }
  }, [toggle]);

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};

export default App;
```
如果你定义一个可复用的自定义Hook，它只在更新时（而不是在挂载时）触发效果函数，你可以使用下面的hook：
```jsx
import * as React from 'react';

const useEffectOnlyOnUpdate = (callback, dependencies) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) {
      callback(dependencies);
    } else {
      didMount.current = true;
    }
  }, [callback, dependencies]);
};

const App = () => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffectOnlyOnUpdate((dependencies) => {
    console.log('I run only if toggle changes.');
  }, [toggle]);

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};

export default App;
```



