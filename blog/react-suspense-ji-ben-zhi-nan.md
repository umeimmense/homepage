---
title: 'React Suspense 基本指南'
date: 2022-03-22 03:16:27
tags: [React]
---
##  前言
在 React 18 中发布的另一个重要特性是 Suspense。如果你在之前使用过 React ，那么你就会知道 Suspense 功能并不是特别新。早在 2018 年，Suspense 作为 React 16.6 版的一部分作为实验性功能发布。然后，它主要针对与React.lazy。

但是现在，有了 React 18，Suspense 的正式发布就在我们面前。伴随着并发渲染的发布，Suspense 的真正威力终于解锁了。Suspense 和并发渲染之间的交互为改善用户体验开辟了广阔的世界。

但就像所有功能一样，就像并发渲染一样，从基础开始很重要。Suspense 到底是什么？为什么我们首先需要Suspense ？Suspense 如何解决这个问题？有什么好处？为了帮助你理解这些基础知识，本文将详细介绍这些问题，并为你提供有关 Suspense 的知识基础。


## 什么是Suspense？
本质上，Suspense 是 React 开发人员向 React 指示组件正在等待数据准备好的一种机制。然后 React 知道它应该等待该数据被获取。同时，将向用户显示一个反馈，并且 React 将继续渲染应用程序的其余部分。数据准备好后，React 会返回到那个特定的 UI 并相应地更新它。

从根本上说，这听起来与 React 开发人员必须实现数据获取流程的当前方式没有太大区别：使用某种状态来指示组件是否仍在等待数据，useEffect开始获取数据，显示加载状态基于数据的状态，并在数据准备好后更新 UI。

但在实践中，Suspense 使这在技术上完全不同。与上面提到的数据获取流程相反，Suspense 与 React 深度集成，允许开发人员更直观地编排加载状态，并避免竞争条件。为了更好地理解这些细节，了解我们为什么需要 Suspense 很重要。

## 为什么我们需要Suspense？
在没有 Suspense 的情况下，实现数据获取流程的主要方法有两种：**渲染时获取**和**渲染后获取**。但是，这些传统的数据获取流程存在一些问题。要了解 Suspense，我们必须深入研究这些流程的问题和局限性。

### 渲染时获取
useEffect大多数人将使用和状态变量来实现前面提到的数据获取流程。这意味着只有在组件呈现时才开始获取数据。所有数据获取都发生在组件的副作用和生命周期方法中。

这种方法的主要问题是:组件仅在渲染时触发数据获取，异步特性迫使组件必须等待其他组件的数据请求。

假设我们有一个ComponentA获取一些数据并具有加载状态的组件。在内部，ComponentA还呈现另一个组件ComponentB，该组件也自己执行一些数据获取。但是由于数据获取的实现方式，ComponentB只有在渲染时才开始获取数据。这意味着它必须等到ComponentA完成获取数据然后渲染ComponentB。

这导致了瀑布式方法，其中组件之间的数据获取顺序发生，这实质上意味着它们相互阻塞。

```jsx
function ComponentA() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAwesomeData().then(data => setData(data));
  }, []);

  if (user === null) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <h1>{data.title}</h1>
      <ComponentB />
    </>
  );
}

function ComponentB() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchGreatData().then(data => setData(data));
  }, []);

  return data === null ? <h2>Loading data...</h2> : <SomeComponent data={data} />;
}
```
### 渲染后获取
为了防止组件之间数据获取的顺序阻塞，一种替代方法是尽早开始所有数据获取。因此，与其让组件负责处理渲染时的数据获取，而且数据请求都单独发生，而是在树开始渲染之前启动所有请求。

这种方法的优点是所有数据请求都是一起发起的，因此ComponentB不必等待ComponentA完成。这解决了组件顺序阻塞彼此数据流的问题。但是，它引入了另一个问题，我们必须等待所有数据请求完成，然后才能为用户呈现任何内容。可以想象，这不是最佳体验。
```jsx
// Start fetching before rendering the entire tree
function fetchAllData() {
  return Promise.all([
		fetchAwesomeData(),
		fetchGreatData()
  ]).then(([awesomeData, greatData]) => ({
    awesomeData,
		greatData
  }))
}

const promise = fetchAllData();

function ComponentA() {
  const [awesomeData, setAwesomeData] = useState(null);
  const [greatData, setGreatData] = useState(null);

  useEffect(() => {
    promise.then(({ awesomeData, greatData }) => {
      setAwesomeData(awesomeData);
      setGreatData(greatData);
    });
  }, []);

  if (user === null) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <h1>{data.title}</h1>
      <ComponentB />
    </>
  );
}

function ComponentB({data}) {
  return data === null ? <h2>Loading data...</h2> : <SomeComponent data={data} />;
}
```

## Suspense 如何解决数据获取问题？
从本质上讲，**fetch-on-render **和 **fetch-then-render** 的主要问题归结为我们试图强制同步两个不同的流程，即数据获取流程和 React 生命周期。借助 Suspense，我们获得了一种不同类型的数据获取方法，即所谓的 **render-as-you-fetch** 方法。
```jsx
const specialSuspenseResource = fetchAllDataSuspense();

function App() {
  return (
    <Suspense fallback={<h1>Loading data...</h1>}>
      <ComponentA />
      <Suspense fallback={<h2>Loading data...</h2>}>
        <ComponentB />
      </Suspense>
    </Suspense>
  );
}

function ComponentA() {
  const data = specialSuspenseResource.awesomeData.read();
  return <h1>{data.title}</h1>;
}

function ComponentB() {
	const data = specialSuspenseResource.greatData.read();
  return <SomeComponent data={data} />;
}
```
与之前实现的不同之处在于它允许组件在 React 到达它的那一刻启动数据获取。这甚至发生在组件渲染之前，并且 React 并没有就此停止。然后它继续评估组件的子树，并在等待数据获取完成时继续尝试渲染它。

这意味着 Suspense 不会阻塞渲染，这意味着子组件不必等待父组件完成后再发起其数据获取请求。React 尝试尽可能多地渲染，同时启动适当的数据获取请求。请求完成后，React 将重新访问相应的组件并使用新接收的数据相应地更新 UI。

## Suspense有什么好处？
- 尽早开始获取数据。Suspense 引入的 render-as-you-fetch 方法最大和最直接的好处是数据获取尽早启动。这意味着用户必须等待的时间更少，应用程序更快，这对任何前端应用程序都是普遍有益的。
- 更直观的加载状态。使用 Suspense，组件不必再包含大量的 if 语句或单独跟踪状态来实现加载状态。相反，加载状态被集成到它所属的组件本身中。这使得组件更直观，通过保持加载代码接近相关代码，并且更可重用，因为加载状态包含在组件中。
- 避免竞争条件。我没有在本文中深入讨论的现有数据获取实现的问题之一是竞争条件。在某些情况下，传统的 fetch-on-render 和 fetch-then-render 实现可能会导致竞争条件，具体取决于时间、用户输入和参数化数据请求等不同因素。主要的潜在问题是我们试图强制同步两个不同的进程，React 和数据获取。但是使用 Suspense，这可以更优雅、更集成地完成，从而避免了上述问题。
- 更集成的错误处理。使用 Suspense，我们基本上已经为数据请求流创建了边界。最重要的是，由于 Suspense 使其与组件代码的集成更加直观，它允许 React 开发人员还为 React 代码和数据请求实现更集成的错误处理。
## 总结
React Suspense 已经被关注了 3 年多。但是随着 React 18 的发布，官方发布的时间越来越近了。除了并发渲染，它将是作为 React 版本的一部分发布的最大功能之一。就其本身而言，它可以将数据获取和加载状态实现提升到一个新的直观和优雅水平。

为了帮助你了解 Suspense 的基础知识，本文介绍了几个对其很重要的问题和方面。这涉及到 Suspense 是什么，为什么我们首先需要像 Suspense 这样的东西，它如何解决某些数据获取问题以及 Suspense 带来的所有好处。



