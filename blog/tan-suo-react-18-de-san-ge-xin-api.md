---
title: '探索 React 18 的三个新 API'
date: 2022-03-03 00:16:50
tags: [React,React Conf 2021]

---

## 前言
目前 React 生态系统中最大的话题是 React 18 及其备受期待的并发渲染功能的完整发布。 2021 年 6 月，React 团队宣布了 React 18 的计划以及即将发生的事情。 2021年 12 月，React Conf 2021 的主题是所有新发布的并发渲染功能。

与 React 18 一起发布的几个新 API 允许用户充分利用 React 的并发渲染功能。 这些hook是：
- [useSyncExternalStore](#the-usesyncexternalstore-hook)
- [useId](#the-useid-hook)
- [useInsertionEffect](#the-useinsertioneffect-hook)

本文将介绍这三个新 API、它们的用例、它们解决的问题、添加它们的原因以及它们如何集成到并发渲染领域。

# the-usesyncexternalstore-hook
在 React v16.14.0 中引入的用于适应并发渲染的 API 之一是 useMutableSource，它旨在允许 React 组件在并发渲染期间安全有效地与外部可变源集成。

Hook 将附加到数据源，等待更改，并相应地安排更新。 所有这一切都会以一种防止撕裂的方式发生，即当出现视觉不一致时，因为同一状态有多个值。

这对于新的并发渲染特性来说是一个特别突出的问题，因为状态流可以很快地交织在一起。 然而，采用 useMutableSource 被证明是困难的，原因如下：
1. Hook 是异步的
Hook 不知道如果选择器函数的结果值发生变化，它是否可以重用它。 唯一的解决方案是重新订阅提供的数据源并再次检索快照，这可能会导致性能问题，因为它发生在每次渲染上。

对于用户和库（如 Redux），这意味着他们必须记住项目中的每个选择器，并且无法内联定义选择器函数，因为它们的引用不稳定。

2. 它必须处理外部状态
最初的实现也有缺陷，因为它必须处理 React 之外的状态。 这意味着由于其可变性，状态可能随时更改。

因为 React 试图以异步方式解决这个问题，这有时会导致 UI 的可见部分被替换为备用，从而导致次优的用户体验。

所有这一切都使得库维护者的迁移变得痛苦，并且对开发人员和用户来说都是次优的体验。

### 使用 useSyncExternalStore 解决这些问题

为了解决这些问题，React 团队更改了底层实现并将 Hook 重命名为 useSyncExternalStore 以正确反映其行为。 这些变化包括：

- 每次选择器（用于快照）更改时都不会重新订阅外部源——相反，React 将比较选择器的结果值，而不是选择器函数，以决定是否再次检索快照，以便用户可以定义 选择器内联而不会对性能产生负面影响
- 每当外部存储发生更改时，生成的更新现在始终是同步的，这可以防止 UI 被替换为回退
  
唯一的要求是 getSnapshot Hook 参数的结果值需要是引用稳定的。 React 在内部使用它来确定是否需要检索新快照，因此它需要是不可变值或记忆/缓存对象。

为了方便起见，React 将提供一个附加版本的 Hook，它自动支持对 getSnapshot 的结果值的记忆。

## 如何使用 useSyncExternalStore
```jsx
// Code illustrating the usage of `useSyncExternalStore`.
// Source: <https://github.com/reactwg/react-18/discussions/86>

import {useSyncExternalStore} from 'react';

// React will also publish a backwards-compatible shim
// It will prefer the native API, when available
import {useSyncExternalStore} from 'use-sync-external-store/shim';

// Basic usage. getSnapshot must return a cached/memoized result
const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

// Selecting a specific field using an inline getSnapshot
const selectedField = useSyncExternalStore(store.subscribe, () => store.getSnapshot().selectedField);

// Code illustrating the usage of the memoized version.
// Source: <https://github.com/reactwg/react-18/discussions/86>

// Name of API is not final
import {useSyncExternalStoreWithSelector} from 'use-sync-external-store/with-selector';

const selection = useSyncExternalStoreWithSelector(
	store.subscribe,
	store.getSnapshot,
	getServerSnapshot,
	selector,
	isEqual
);
```

# The useId Hook
## 在服务器端运行 React
长期以来，一个 React 项目只在客户端运行。简而言之，这意味着所有代码都被发送到用户的浏览器（客户端），然后浏览器负责向用户呈现和显示应用程序。

React 作为一个整体一直在向服务器端渲染（SSR）领域扩展。在 SSR 中，服务器负责根据 React 代码生成 HTML 结构。而不是所有的 React 代码，只有 HTML 被发送到浏览器。

然后，浏览器只负责采用该结构并通过渲染组件、在其上添加 CSS 并将 JavaScript 附加到它来使其具有交互性。这个过程称为水合作用。

hydration 最重要的要求是服务器和客户端生成的 HTML 结构必须匹配。如果他们不这样做，浏览器就无法确定它应该对结构的特定部分做什么，这会导致不正确地呈现或非交互式 UI。

这在依赖于标识符的特性中尤为突出，因为它们必须在两边都匹配，例如在生成唯一样式类名称和可访问性标识符时。

## useID Hook 的演进
为了解决这个问题，React 最初引入了 useOpaqueIdentifier Hook，但不幸的是，它也存在一些问题：

在不同的环境中，Hooks 会产生不同的输出（不透明）：

服务器端：它会产生一个字符串
客户端：它会产生一个特殊的对象，必须直接传递给 DOM 属性
这意味着 Hook 只能生成一个标识符，并且不可能动态生成新的 ID，因为它必须遵守 Hook 的规则。 因此，如果您的组件需要 X 个不同的标识符，它必须在不同的时间调用 Hook X，这在实践中显然不能很好地扩展。
```jsx
// Code illustrating the way `useOpaqueIdentifier` handles the need for N identifiers in a single component, namely calling the hook N times.
// Source: <https://github.com/facebook/react/pull/17322#issuecomment-613104823>

function App() {
	const tabIdOne = React.unstable_useOpaqueIdentifier();
	const panelIdOne = React.unstable_useOpaqueIdentifier();
	const tabIdTwo = React.unstable_useOpaqueIdentifier();
	const panelIdTwo = React.unstable_useOpaqueIdentifier();

return (
	<React.Fragment>
		<Tabs defaultValue="one">
			<div role="tablist">
				<Tab id={tabIdOne} panelId={panelIdOne} value="one">
					One
				</Tab>
				<Tab id={tabIdTwo} panelId={panelIdTwo} value="one">
					One
				</Tab>
			</div>
			<TabPanel id={panelIdOne} tabId={tabIdOne} value="one">
				Content One
			</TabPanel>
			<TabPanel id={panelIdTwo} tabId={tabIdTwo} value="two">
				Content Two
			</TabPanel>
		</Tabs>
	</React.Fragment>
	);
}
```
某些可访问性 API（如 aria-labelledby）可以通过空格分隔的列表接受多个标识符，但由于 Hook 的输出被格式化为不透明的数据类型，它总是必须直接附加到 DOM 属性。这意味着无法正确使用上述可访问性 API。

为了解决这个问题，实现已更改并重命名为 useId。这个新的 Hook API 在 SSR 和 hydration 期间生成稳定的标识符以避免不匹配。在服务器渲染的内容之外，它回退到一个全局计数器。

与使用 useOpaqueIdentifier 创建不透明数据类型（服务器中的特殊对象和客户端中的字符串）不同，useId Hook 会在两侧生成非透明字符串。

这意味着如果我们需要 X 个不同的 ID，就没有必要再调用 Hook X 次了。相反，组件可以调用 useId 一次并将其用作整个组件所需的标识符的基础（例如，使用后缀），因为它只是一个字符串。这解决了 useOpaqueIdentifier 中存在的两个问题。

## 如何使用 useID
下面的代码示例说明了如何根据我们上面讨论的内容使用 useId。 因为 React 生成的 ID 是全局唯一的，并且后缀是本地唯一的，所以动态创建的 ID 也是全局唯一的——因此不会导致任何水合不匹配。
```jsx
// Code illustrating the improved way in which `useId` handles the need for N identifiers in a single component, namely calling the hook once and creating them dynamically.
// Source: <https://github.com/reactwg/react-18/discussions/111>

function NameFields() {
	const id = useId();
	return (
		<div>
			<label htmlFor={id + '-firstName'}>First Name</label>
			<div>		
				<input id={id + '-firstName'} type="text" />
			</div>
			<label htmlFor={id + '-lastName'}>Last Name</label>
			<div>		
				<input id={id + '-lastName'} type="text" />
			</div>
		</div>
	);
}
```
# The useInsertionEffect Hook . CSS-in-JS 库的问题
最后一个将在 React 18 中添加的 Hook——我们将在这里讨论——是 useInsertionEffect。这个与其他的略有不同，因为它的唯一目的对于动态生成新规则并在文档中插入带有 `<style>` 标记的 CSS-in-JS 库很重要。

在某些场景下，`<style>`标签需要在客户端生成或编辑，如果不仔细处理，可能会导致并发渲染的性能问题。这是因为在添加或删除 CSS 规则时，浏览器必须检查这些规则是否适用于现有树。它必须重新计算所有样式规则并重新应用它们——而不仅仅是改变的规则。如果 React 发现另一个组件也生成了新规则，那么同样的过程将再次发生。

这实际上意味着在 React 渲染时，必须针对每一帧的所有 DOM 节点重新计算 CSS 规则。虽然你很有可能不会遇到这个问题，但它的规模并不大。

从理论上讲，有一些方法主要与时间有关。这个时间问题的最佳解决方案是在对 DOM 进行所有其他更改的同时生成这些标签，就像 React 库那样。最重要的是，它应该发生在任何尝试访问布局之前以及所有内容呈现给浏览器进行绘制之前。

这听起来像是 useLayoutEffect 可以解决的问题，但问题是同一个 Hook 将用于读取布局和插入样式规则。这可能会导致不希望的行为，例如在一次通过中多次计算布局或读取不正确的布局。

## useInsertionEffect 如何解决并发渲染问题
为了解决这个问题，React 团队引入了 useInsertionEffect Hook。 它与 useLayoutEffect Hook 非常相似，但它无法访问 DOM 节点的 refs。

这意味着只能插入样式规则。 它的主要用例是插入全局 DOM 节点，如 `<style>` 或 SVGs `<defs>`。 由于这仅与在客户端生成标签有关，因此 Hook 不会在服务器上运行。
```jsx
// Code illustrating the way `useInsertionEffect` is used.
// Source: <https://github.com/reactwg/react-18/discussions/110>

function useCSS(rule) {
	useInsertionEffect(() => {
		if (!isInserted.has(rule)) {
			isInserted.add(rule);
			document.head.appendChild(getStyleForRule(rule));
		}
	});
	return rule;
}

function Component() {
	let className = useCSS(rule);
	return <div className={className} />;
}
```
React 18 最令人期待的特性是它的并发渲染特性。 随着团队的宣布，我们收到了新的 API，允许用户根据他们的用例采用并发渲染功能。 虽然有些是全新的，但有些是基于社区反馈的先前 API 的改进版本。

在本文中，我们介绍了三个最新的 API，即 useSyncExternalStore、useId 和 useInsertionEffect Hooks。 我们查看了它们的用例、它们解决的问题、与以前的版本相比为什么需要进行某些更改，以及它们用于并发渲染的目的。

React 18 充满了新功能，绝对值得期待！
   
