## 0705 易宝 华为云
1、vuex 中哪个是异步
2、vue生命周期，actived和mounted区别
3、计算属性和监听属性区别
4、ES6用过哪些，promise，还有什么实现异步方式
5、盒模型
6、性能优化
7、隐藏元素的方式display：none 、
8、

## 0715 中软国际
从html开始：
1、块级元素有什么，行内元素有什么
2、H5标签都有啥
3、单选框如何在点击字的时候也能选
4、如何引入js和css(除了import？)

css：
1、CSS如何实现圆角，如果border-redius设置为100%是怎样
2、CSS如何设置溢出展示点点点
3、css有什么伪类，如何获取ul的最后一个li，如何获取偶数个li
4、有什么方法隐藏元素，两种方法有什么区别
5、让水平垂直居中，在父级设置怎么处理   
6、如何获取元素？属性选择器

js：
1、有哪些数据类型
2、const能不能修改
3、js中eval的作用
4、保存用户登录状态的方式
5、sessionstorey和localstorey区别
6、如何获取当前页面url：window.local.href

vue：
1、生命周期，created和mounted区别
2、怎么监听属性、watch和compute区别，如何监听对象的属性
3、vue的常用指令，v-html和v-txt区别，v-show和v-if区别
4、计算属性和监听属性的区别









## 通用
1、什么是async/await，及其如何工作
2、展开运算符和rest运算符区别
3、什么是默认参数
4、什么是包装对象（wrapper object）
5、隐式和显示转化的区别
6、什么是NAN，如何检查判断
7、如何判断值是否为数组
8、不用%情况下如何检查数组是否为偶数
9、检查对象中是否有某属性
10、AJAX是什么
11、如何在JS中创建对象
12、object.seal与object.freeze区别
13、对象中的in和hasOwnProperty区别
14、有什么处理异步代码的方法
15、函数表达式和函数声明的区别
16、调用函数的方法
17、缓存及其作用
18、手动实现缓存
19、typeof null 返回object 如何检查null
20、new有什么用
21、什么时候不用箭头函数（三个以上实例）
22、object.freeze（）和const区别
23、如何在js中深冻结对象
24、iterator是什么有什么作用
25、Generator函数是什么，有什么用
26、



vue路由模式：hash，history      //静态路由？
引入axios  
vuex工作机制
组件传参，路由传参，兄弟传参
封装组件的方法
v-modol原理
数据双向绑定原理：观察者模式+object.defineproperty实现

## 题记

**画一条0.5px的边**  
考察的是CSS3的transform
```js
transform: scale(1,0.5)
```
可以用linear-gradient
```js
background: linear-gradient(0deg, #fff,#000)
```
可以用boxshadow
```js
box-shadow: 0 0.5px 0 #000;
```

## css画一个三角形
```css
.divA{
    width: 0;
    height: 0;
    border: solid 3rem;
    border-color: transparent transparent white transparent;
    <--扇形-->
    border-radius: 100% 
}
```

## 清除浮动的方式及原理
主要引出BFC(block formattion context)

Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染。让我们看看有哪些盒子：

    block-level box:display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；
    inline-level box:display 属性为 inline, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 inline formatting context；
    run-in box: css3 中才有， 这儿先不讲了。

Formatting Context

Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。

BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。


    BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

因为BFC内部的元素和外部的元素绝对不会互相影响，因此， 当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。避免margin重叠也是这样的一个道理。

1. BFC的作用是啥
答：页面上的独立容器，内部元素不会影响外部元素，可以清除浮动，可以分割两框、可以消除外边距重叠
2. BFC如何触发
    1. overflow不为visible
    2. float不为none
    3. position不为static或者relative
    4. diaplay值为inline-block、table-cell、flex、table-caption或者inline-flex
3. position各有啥特点
