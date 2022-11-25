---
title: 'JavaScript 中缺失的数学方法'
date: 2022-10-19 16:02:42
tags: [JavaScript,Algorithm]
---

## 前言
在本文中，我们将探讨 JavaScript 中一些缺失的数学方法，以及我们如何为它们编写函数。

JavaScript Math 对象包含一些非常有用且功能强大的数学运算，可用于 Web 开发，但它缺少大多数其他语言提供的许多重要运算（例如 Haskell，其中有大量运算）。

## JavaScript 中缺少数学方法：求和
你可能记得在学校里，“sum”是“add”的同义词。例如，如果我们将数字 1、2 和 3 相加，它实际上意味着1 + 2 + 3。

我们的sum函数将涉及对数组中的所有值求和。

编写这个函数有两种方法：我们可以使用for循环，或者我们可以使用reduce函数。如果您想重新熟悉该reduce函数，可以阅读有关在 JavaScript 中使用 [map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 和 [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 的信息。

使用for循环：
```javascript
function sum(array){
    let total = 0
    for(let count = 0; count < array.length; count++){
        total = total + array[count]
    }
    return total
}
```
