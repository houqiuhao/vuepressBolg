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







## 题记

**画一条0.5px的边**  
考察的是CSS3的transform
```js
transform: scale(1,0.5)
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
主要引出BFC
