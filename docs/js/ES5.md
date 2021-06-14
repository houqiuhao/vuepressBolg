# javascript 基础教学

## 
1、js保留字：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。
2、lable: //标签 可以让代码跳转到此处
## js特殊使用方式

### 非数组转化为数组
```js 如转化arguments
var args = Array.prototype.slice.call(arguments);

// 或者
var args = [];
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i]);
}
```

## 缺陷/坑记录

### 基础语法坑
1、var： 直接对变量进行赋值相当于使用了var 若未定义或赋值而直接使用会报错undefined

2、变量提升的奇怪之处
```js
console.log(b);var b = 2;//输出undefined 
VM254:1 undefined
undefined

console.log(a);
var a = 1;
//相当于
var a;
console.log(a);
a = 1;
```
::: tip
    变量提升只是提升了定义！
:::

3、函数的变量提升：
function声明的函数会进行变量提升，而赋值形的不会，如 var f = funciton(){};
4、函数执行时的作用域，是定义时的作用域，而不是调用时的作用域
5、没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入undefined
```js
function f(a, b) {
  return a;
}

f( , 1) // SyntaxError: Unexpected token ,(…)
f(undefined, 1) // undefined
```
6、函数传值：如果传入的是原始类型的值，则是传值传递，即在函数内部修改不会影响外部的值，而如果传入的是复杂类型的值，如数组对象，则为传址传值，即函数内修改会导致外部变量变化。
::: tip
注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。
:::
```js
var obj = [1, 2, 3];

function f(o) {
  o = [2, 3, 4];
}
f(obj);

obj // [1, 2, 3]
```