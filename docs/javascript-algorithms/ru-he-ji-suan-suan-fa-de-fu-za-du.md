---
title: '如何计算算法的复杂度'
date: 2022-06-13 21:39:29
---

## 前言
提到数据结构与算法的学习，有两个问题是不可避免的。一个是<code>时间复杂度</code>，可以理解为算法的运行时间，如果算法运行时间太长，那这个算法就没法用；另一个是算法的<code>空间复杂度</code>，可以理解为把算法存储在计算机中需要多大的空间，如果需要空间太大，那这个算法也没法用。因此，需要对一个算法的时间复杂度和空间复杂度进行分析，来确定该算法的可行性。<code>时间复杂度</code>和<code>空间复杂度</code>就是我们本节讨论的话题。

## 复杂度的表示方法:大O符号
- O(1): 常数复杂度
- O(log n): 对数复杂度
- O(n): 线性时间复杂度
- O(n^2) 平方
- O(n^3) 立方
- O(2^n) 指数
- O(n!) 阶乘

注意⚠️：只看最高复杂度的运算

### O(1)
```js
const n = 1000;
console.log('Hey,you input is:', n)
```


### O(n)
```js
for (let index = 0; index < n; index++) {
   console.log(n)
}
```


### O(n^2)
```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) { 
        console.log('i和j:',i,j)
    }
}
```


### O(log(n))
```js
for (let i = 0; i < n; i = i*2) {
    console.log('i:',i)
}
```

### O(k^n)
```js
for (let i = 0; i <=Math.pow(2,n); i++) {
    console.log('i:',i)
}
```
### O(n!)
```js
for (let i = 0; i <=factorial(n); i++) {
    console.log('i:',i)
}
```

## 常见递归如何考虑复杂度
- 二分查找 (O(log n))
- 二叉树的遍历 (O(n))
- 矩阵 (O(n))
- 归并排序类+快速排序类 (O(nlog n)) 
