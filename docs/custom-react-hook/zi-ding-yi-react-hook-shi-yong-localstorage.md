---
title: 'useLocalStorage'
date: 2022-04-14 16:00:46
tags: [React]

---
## 使用本地存储
一个简洁的自定义 React Hook，展示了如何在 React 中使用本地存储来存储状态。你可以在任何 React 组件中使用它，它允许你在本地存储中写入和读取状态：
```jsx
import * as React from 'react';

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

const App = () => {
  const [isOpen, setOpen] = useLocalStorage('is-open', false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && <div>Content</div>}
    </div>
  );
};

export default App;
```
本地存储Hook只是作为一种学习体验。如果你在生产环境中依赖 React 应用程序的本地存储，你应该检查更广泛使用的Hook（因此是健壮的）。