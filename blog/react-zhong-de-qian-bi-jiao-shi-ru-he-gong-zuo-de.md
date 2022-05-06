---
title: 'React 中的浅比较是如何工作的？'
date: 2022-04-09 15:34:48
tags: [React]

---
## 前言
浅比较在 React 开发中无处不在。它在不同的流程中起着关键作用，也可以在 React 组件生命周期的多个地方找到。类组件是否应该更新的机制，React hooks 的依赖数组，通过 React.memo 进行记忆等等。

如果你曾经阅读过 React 的官方文档，你很可能已经经常看到浅比较这个术语。因此，本文将研究浅比较的概念，它到底是什么，它是如何工作的。

## 什么是浅比较？
理解浅层比较最直接的方法是深入研究它的实现。相应的代码可以在共享子包的 [React Github](https://github.com/facebook/react/blob/main/packages/shared/shallowEqual.js) 项目中找到。例如下面的实现：
```jsx
import is from './objectIs';
import hasOwnProperty from './hasOwnProperty';

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA: mixed, objB: mixed): boolean {
  if (is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    const currentKey = keysA[i];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !is(objA[currentKey], objB[currentKey])
    ) {
      return false;
    }
  }

  return true;
}
```
这过程中发生了很多事情，所以让我们将其拆分并逐步执行该功能。
```jsx
function shallowEqual(objA: mixed, objB: mixed): boolean {
	// ...
}
```
从函数定义开始，函数接受两个将相互比较的实体。与 TypeScript 不同，此代码使用 Flow 作为类型检查系统。两个函数参数都是使用特殊的混合 Flow 类型键入的，类似于 TypeScript 的未知数。它表明参数可以是任何类型的值，该函数将找出其余的并使其工作。
```jsx
import is from './objectIs';

function shallowEqual(objA: mixed, objB: mixed): boolean {
  if (is(objA, objB)) {
    return true;
  }
	// ...
}
```
其次，首先使用来自 React 内部对象的 is 函数将函数参数相互比较。导入的函数只不过是 JavaScript 的 Object.is 函数的 polyfill 版本。这个比较函数基本上等同于常见的 === 运算符，但有两个例外：
- Object.is 认为相反的有符号零（+0 和 -0）不相等，而 === 认为它们相等。
- Object.is 认为 Number.NaN 和 NaN 相等，而 === 认为它们不相等。

基本上，第一个条件语句处理所有简单的情况：如果两个函数参数具有相同的值，对于原始类型，或引用相同的对象，对于数组和对象，那么它们被认为是浅比较相等的。

```jsx
function shallowEqual(objA: mixed, objB: mixed): boolean {
	// ...

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

	// ...
}
```
在处理了两个函数参数值相等或引用同一个对象的所有简单情况之后，我们想要进入更复杂的结构（对象和数组）。但是，如果任何一个参数是原始值，前面的条件语句仍然可以给我们留下原始值。

因此，为了确保我们从现在开始处理两个复杂的结构，代码会检查任一参数是否不是对象类型或等于 null。前一个检查确保我们正在处理对象或数组，而后一个检查是过滤掉空值，因为它们的类型也是对象。如果任一条件成立，我们肯定是在处理不相等的参数（否则前面的条件语句会将它们过滤掉），因此浅比较返回 false。

```jsx
function shallowEqual(objA: mixed, objB: mixed): boolean {
	// ...

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

	// ...
}
```
现在可以确定我们只处理数组和对象，我们可以专注于浅比较这些数据结构。为此，我们必须深入研究复杂数据结构的值，并在两个函数参数之间进行比较。

但在我们这样做之前，我们可以通过一个简单的检查来确保两个参数具有相同数量的值。如果不是，则通过浅层比较可以保证它们不相等，这可以节省我们一些精力。为此，我们使用参数的键。对于对象，键数组将由实际键组成，而对于数组，键数组将由字符串中原始数组中占用的索引组成。

```jsx
import hasOwnProperty from './hasOwnProperty';

function shallowEqual(objA: mixed, objB: mixed): boolean {
	// ...

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    const currentKey = keysA[i];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !is(objA[currentKey], objB[currentKey])
    ) {
      return false;
    }
  }

  return true;
}
```
作为最后一步，我们按键迭代两个函数参数的值，并逐个验证它们以确定它们是否等效。为此，代码使用在上一步中生成的键数组，使用 hasOwnProperty 检查键是否实际上是参数的属性，并使用与比较值之前相同的 Object.is 函数。

如果事实证明任何键在两个参数之间没有等效值，那么通过浅比较可以肯定它们不相等。因此，我们缩短了 for 循环，并从 shallowEqual 函数中返回 false。如果所有值都相等，那么我们可以通过浅比较调用函数参数相等并从函数返回 true。

## 一些有趣的点
现在我们了解了浅层比较及其背后的实现，我们可以从这些知识中学到一些有趣的东西：

- 浅比较不使用严格相等、=== 运算符，而是使用 Object.is 函数。
- 通过浅比较，空对象和数组是等价的。
- 通过浅比较，以索引为键的对象等效于在各个索引处具有相同值的数组。例如。 { 0: 2, 1: 3 } 等价于 [2, 3]。
- 由于 Object.is 优于 === 的使用，通过浅比较，+0 和 -0 不等价，NaN 和 Number.NaN 也不等价。- 如果它们在复杂结构内进行比较，这也适用。
虽然两个内联创建的对象（或数组）通过浅比较相等（{} 和 [] 浅相等），但具有嵌套内联对象的内联对象不相等（{ someKey: {} } 和 { someKey: [] } 不浅平等的）。
