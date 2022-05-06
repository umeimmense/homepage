---
title: 'JavaScript 中的稀疏数组与密集数组的区别？'
date: 2021-12-12 16:02:13
tags: [JavaScript]

---
## 前言
JavaScript 中的数组非常易于使用。但是，你应该注意一个细微差别：某些数组中可能存在漏洞。
在这篇文章中，我将描述 JavaScript 中稀疏数组和密集数组之间的区别。此外，你将找到创建稀疏数组的常用方法。

## 密集数组
JavaScript 中的数组是一个对象，表示元素的有序集合。数组中的元素有一个确切的顺序。你可以使用索引访问数组的第 n 项。
```javascript
const names = ['Batman', 'Joker', 'Bane'];
console.log(names[0]); // logs 'Batman'
console.log(names[1]); // logs 'Joker'
console.log(names[2]); // logs 'Bane'
console.log(names.length); // logs 3
```
- `names[0]` 访问索引 0（第一个元素）处的数组项。
- 数组还有一个属性长度，它表示数组中的项数。在前面的示例中，`names.length` 为 3，因为数组中的元素个数为 3。
- 上面创建的名称数组是一个密集数组：这意味着它包含每个索引处的元素，从 0 开始，直到 names.length - 1。
 我们定义这是一个函数 isDense(array) ，用于确定数组是否在每个索引处都有元素：
 ```javascript
 function isDense(array) {
  for (let index = 0; index < array.length; index++) {
    if (!(index in array)) {
      return false;
    }
  }
  return true;
}
const names = ['Batman', 'Joker', 'Bane'];
console.log(isDense(names)); // logs true
 ```
 其中 `index in array` 确定数组是否在索引位置有一个元素。

这是一个有趣的问题：JavaScript 中的所有数组都是密集的吗？或者当 `isDense(array)` 返回 false 时可能有数组？
## 稀疏数组
有些情况下 JavaScript 数组中可能存在漏洞。这样的数组被命名为稀疏数组。
例如，如果你使用数组字面量但省略指示项就会创建了一个稀疏数组：
```javascript
const names = ['Batman', , 'Bane'];
console.log(names[0]); // logs 'Batman'
console.log(names[1]); // logs undefined
console.log(names[2]); // logs 'Bane'
console.log(isDense(names)); // logs false
```
`['Batman', , 'Bane']` 数组文字创建一个稀疏数组，在 1 索引处有一个缺失。如果你访问这个位置的值——names[1]——它的计算结果是 `undefined`。

要明确检查特定索引处是否有空缺，你可以这样写`index in names`中：
```javascript
const names = ['Batman', , 'Bane'];
// No hole
console.log(0 in names); // logs true
// Hole
console.log(1 in names); // logs false
```
当然，如果你在稀疏数组上运行 isDense() 它将返回 false：
```javascript
const names = ['Batman', , 'Bane'];
console.log(isDense(names)); // logs false
```
现在你对稀疏数组有所了解。但是创建稀疏数组的常用方法是什么？

## 创建稀疏数组的方法
### 数组字面量
在使用数组字面量时省略一个值会创建一个稀疏数组（注意记录器数组中的空词）：
```javascript
const names = ['Batman', , 'Bane'];
console.log(names); // logs ['Batman', empty, 'Bane']
```
### Array() 构造函数
调用 `Array(length)` 或 `new Array(length)`（带有一个数字参数）会创建一个完全稀疏的数组：
```javascript
const array = Array(3);
console.log(isDense(array)); // logs false
console.log(array);          // logs [empty, empty, empty]
```
### 删除操作符
在数组上使用 `delete array[index] `运算符时：
```javascript
const names = ['Batman', 'Joker', 'Bane'];
delete names[1];
console.log(isDense(names)); // logs false
console.log(names);          // logs ['Batman', empty, 'Bane']
```
最初，names数组是密集的。
但是执行 `delete names[1] `会删除索引 1 处的元素并使 `names` 数组变得稀疏。

### 增加length属性
如果你增加数组的长度属性，那么你也会在数组中创建空缺：
```javascript
const names = ['Batman', 'Joker', 'Bane'];
names.length = 5;
console.log(isDense(names)); // logs false
console.log(names); // logs ['Batman', 'Joker', 'Bane', empty, empty]
```
最初`names`数组有3个元素，是一个密集数组。
但是，将`names.length` 增加到 5 个元素会在 3 和 4 个索引处创建 2 个孔。

附带说明一下，减少 `length` 属性不会创建稀疏数组，而是从数组末尾删除元素。

### 数组方法和稀疏数组
稀疏数组的一个问题是许多数组内置方法只是跳过稀疏数组中的空缺。
例如， `array.forEach(eachFunc)` 不会在孔上调用 `eachFunc` ：
```javascript
const names = ['Batman', , 'Bane'];
names.forEach(name => {
  console.log(name);
});
// logs 'Batman'
// logs 'Bane'
```
以同样的方式 `array.map(mapperFunc)`、`array.filter(predicateFunc)` 和更多函数跳过这些空缺位置。如果你不小心创建了一个稀疏数组，可能很难理解为什么数组方法不能按预期工作。

## 总结
在 JavaScript 中，数组可以是密集的或稀疏的。

如果每个索引处都有从 0 开始直到 `array.length - 1` 的元素，则数组是密集的。否则，如果任何索引处至少缺少一项，则数组是稀疏的。

虽然你不会过多地处理稀疏数组，但你应该了解可以创建一个数组的情况：
- 跳过数组 `[1, , 3]` 中的值时
- 使用 `Array(length)` 时
- 使用`delete array[index]`
- 当增加 `array.length` 属性时

稀疏数组的问题在于某些 JavaScript 函数（如 `array.forEach()`、`array.map()` 等）在迭代数组项时会跳过空缺值。

## 拓展
稀疏数组在访问元素的速度上比密集数组慢
```javascript
const arr = new Array(200000)
arr[19999] = 88
console.time('using[]')
arr[19999]
console.timeEnd('using[]')
// using[]: 0.031982421875ms

const ddd = [...new Array(200000)]
ddd[19999] = 88
console.time('using[]')
ddd[19999]
console.timeEnd('using[]')
// using[]: 0.010009765625ms 
```
具体原因是，对于稀疏数组 V8 引擎访问对象是使用 散列表模式的，该种模式在访问时需要计算一遍哈希值，所以会比较慢，但散列表对于空间利用来说，效率更高。而密集数组，它是申请一段连续的内存空间，访问时可以直接通过「索引」来访问，所以速度比较快。

