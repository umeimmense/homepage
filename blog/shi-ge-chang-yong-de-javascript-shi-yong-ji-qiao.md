---
title: '10个常用的 JavaScript 使用技巧'
date: 2021-11-23 15:48:55
tags: [JavaScript]
---
## 前言
编写简短、简洁和干净的 JavaScript 代码的技巧😎
JavaScript 有很多很酷的特性，大多数初学者和中级开发人员都不知道。本节挑选了 10 个在日常 JavaScript 项目中经常使用的技巧。

## 1. 有条件的向对象中添加属性
我们可以使用扩展运算符 `...` 来有条件地向 JavaScript 对象快速添加属性。
```javascript
const condition = true;
const person = {
  id: 1,
  name: 'John Doe',
  ...(condition && { age: 16 }),
};
```
如果每个操作数的计算结果都为true， && 运算符将返回最后计算的表达式。因此返回一个对象 { age: 16 }，然后将其作为 person 对象的一部分。

如果条件为 false，则 JavaScript 将执行以下操作：
```javascript
const person = {
  id: 1,
  name: 'John Doe',
  ...(false), // evaluates to false
};
// spreading false has no effect on the object
console.log(person); // { id: 1, name: 'John Doe' }
```
## 2. 检查一个属性是否存在于一个对象中
我们可以使用` in `关键字来检查 JavaScript 对象中是否存在属性
``` javascript
const person = { name: 'John Doe', salary: 1000 };
console.log('salary' in person); // returns true
console.log('age' in person); // returns false
```
## 3. 对象中的动态属性名称
使用动态键设置对象属性很简单。只需使用 ['key_name'] 符号添加属性
```javascript
const dynamic = 'flavour';
var item = {
  name: 'Biscuit',
  [dynamic]: 'Chocolate'
}
console.log(item); // { name: 'Biscuit', flavour: 'Chocolate' }
```
同样的技巧也可用于使用动态键引用对象属性：
```javascript
const keyName = 'name';
console.log(item[keyName]); // returns 'Biscuit'
```
## 4. 使用动态键进行对象解构
你可能知道你可以解构一个变量并立即用 : 符号重命名它。但是你知道当你不知道键名或键名是动态的时，你也可以解构对象的属性吗？
首先，让我们看看如何在解构（用别名解构）时重命名变量。
```javascript
const person = { id: 1, name: 'John Doe' };
const { name: personName } = person;
console.log(personName); // returns 'John Doe'
```
现在，让我们使用动态键来解构属性：
```javascript
const templates = {
  'hello': 'Hello there',
  'bye': 'Good bye'
};
const templateName = 'bye';
const { [templateName]: template } = templates;
console.log(template) // returns 'Good bye'
```
## 5. ?? 运算符
这 `??`当你要检查变量是 null 还是 undefined 时，运算符很有用。当其左侧操作数为空或未定义时，它返回右侧操作数，否则返回其左侧操作数。
```javascript
const foo = null ?? 'Hello';
console.log(foo); // returns 'Hello'
const bar = 'Not null' ?? 'Hello';
console.log(bar); // returns 'Not null'
const baz = 0 ?? 'Hello';
console.log(baz); // returns 0
```
在第三个示例中，返回 0 是因为即使 0 在 JavaScript 中被认为是假的，但它不是 null 或未定义的。你可能认为我们可以使用 ||运算符在这里，但这两者之间存在差异：
```javascript
const cannotBeZero = 0 || 5;
console.log(cannotBeZero); // returns 5
const canBeZero = 0 ?? 5;
console.log(canBeZero); // returns 0
```
## 6. ?. 可选链
我们都可能曾经遇到过TypeError：无法读取 null 的属性“foo”之类的错误。这对每个 JavaSript 开发人员来说都是头疼的问题。引入了可选链就是为了解决这个问题。让我们来看看：
```javascript
const book = { id:1, title: 'Title', author: null };
// normally, you would do this
console.log(book.author.age) // throws error
console.log(book.author && book.author.age); // returns null (no error)
// with optional chaining
console.log(book.author?.age); // returns undefined
// or deep optional chaining
console.log(book.author?.address?.city); // returns undefined
```
你还可以使用具有以下功能的可选链：
```javascript
const person = {
  firstName: 'Haseeb',
  lastName: 'Anwar',
  printName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.printName()); // returns 'Haseeb Anwar'
console.log(persone.doesNotExist?.()); // returns undefined
```
## 7. 使用 !! 的布尔转换符
这 `!! `运算符可用于将表达式的结果快速转换为布尔值 `true` 或 `false`。就是这样：
```javascript
const greeting = 'Hello there!';
console.log(!!greeting) // returns true
const noGreeting = '';
console.log(!!noGreeting); // returns false
```
## 8. 字符串和整数转换
使用 + 运算符快速将字符串转换为数字，如下所示：
```javascript
const stringNumer = '123';
console.log(+stringNumer); // returns integer 123
console.log(typeof +stringNumer); // returns 'number'
```
要将数字快速转换为字符串，请使用 + 运算符后跟空字符串 ""：
```javascript
const myString = 25 + '';
console.log(myString); // returns '25'
console.log(typeof myString); // returns 'string'
```
这些类型转换非常方便，但它们的清晰度和代码可读性较差。因此，在生产中使用它们之前，你可能需要考虑一下。不过可以用才`code golf`中。
## 9. 检查数组中的假值
你熟悉 filter、some 和 every 数组方法。但你也应该知道，你可以仅使用布尔方法来测试真值：
```javascript
const myArray = [null, false, 'Hello', undefined, 0];
// filter falsy values
const filtered = myArray.filter(Boolean);
console.log(filtered); // returns ['Hello']
// check if at least one value is truthy
const anyTruthy = myArray.some(Boolean);
console.log(anyTruthy); // returns true
// check if all values are truthy
const allTruthy = myArray.every(Boolean);
console.log(allTruthy); // returns false
```
这是它的工作原理。众所周知，这些数组方法采用回调函数，因此我们将布尔值作为回调函数传递。 `Boolean` 本身接受一个参数并根据参数的真实性返回`true`或 `false`。所以我们可以这样说：
```javascript
myArray.filter(val => Boolean(val));
```
是不是和这个一样：
```javascript
myArray.filter(Boolean);
```
## 10.展平数组
原型 Array 上有一个方法 flat 可以让你从数组的数组中创建一个数组：
```javascript
const myArray = [{ id: 1 }, [{ id: 2 }], [{ id: 3 }]];
const flattedArray = myArray.flat(); 
// returns [ { id: 1 }, { id: 2 }, { id: 3 } 
```
你还可以定义一个深度级别，指定嵌套数组结构应展平的深度。例如：
```js
const arr = [0, 1, 2, [[[3, 4]]]];
console.log(arr.flat(2)); // returns [0, 1, 2, [3,4]]
```
## 结语
感谢你阅读到最后。希望这些技巧对你日常开发有用。





