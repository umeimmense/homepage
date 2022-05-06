---
title: 'useHash  '
date: 2022-04-27 22:47:39
tags: [React]
---
## 获取 url 上的 hash 值
本节我们实现自定义React hook useHash，它能实时获取浏览器的hash值，并允许更改它。

- 使用 useState hook 获取 Location 对象的 hash 属性。
- 使用 useCallback hook 创建一个更新状态的处理程序。
- 在挂载时使用 useEffect hook为“hashchange”事件添加监听器，并在卸载时清理它。
- 使用 useCallback hook 创建一个函数，该函数使用给定值更新 Location 对象的哈希属性。

### 实现
  ```jsx
  const useHash = () => {
  const [hash, setHash] = React.useState(() => window.location.hash);

  const hashChangeHandler = React.useCallback(() => {
    setHash(window.location.hash);
  }, []);

  React.useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  const updateHash = React.useCallback(
    newHash => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );

  return [hash, updateHash];
};
```
### 样例
```jsx
  const MyApp = () => {
  const [hash, setHash] = useHash();

  React.useEffect(() => {
    setHash('#list');
  }, []);

  return (
    <>
      <p>window.location.href: {window.location.href}</p>
      <p>Edit hash: </p>
      <input value={hash} onChange={e => setHash(e.target.value)} />
    </>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
  ```

