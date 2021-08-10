## HTML
1. html5标签
2. 语义化
3. 块级元素和行内元素

## CSS
1. 水平垂直居中
    1. 父级flex + justify-content + align-item
    2. position:absolution/fixed + top/left/buttom/right : 0 + margin: auto
    3. position:absolution/fixed + top/left: 50% + margin-left/top或transform: translate: (50%, 50%)
    4. display:table-cell + vertical-align: middle + align-item: center
    5. js获取document.documentElement.clientHeight，加子元素offsetHeight 
2. 清除浮动/BFC
    1、清除浮动方式：添加空div属性设置clear: both 2、伪元素after设置clear: both 3、使用BFC
    BFC概念：
        1、float不为none，
        2、position不为static或者relative，
        3、display值为inline-block，talbe-cell，flex、inline-flex
        4、overflow不为visible
3. 回流/重绘
    回流必然重绘，重绘不一定回流
4. 隐藏元素的方式
5. 溢出点点点方式
6. 伪类和伪元素
7. 选择器及优先级

## JS
1. ES6常用：const是否能修改，箭头函数和普通函数区别，解构
2. promise all（返回结果组成的数组）和race，promise实现原理
3. js的事件循环机制
4. 缓存的方式，cookie和storey，保存用户登录状态
5. 判断数组，检测是否有某属性
6. ajax
7. 响应式布局
8. 继承的方法
9. 判断数据类型的方法
10. 深浅拷贝
性能优化

## VUE
1. vue生命周期
    1. beforecreate：此时只创建了vue实例,数据观察和事件机制还未形成
    2. created、此时创建了vue实例，可获取$vm,无法获取dom，已经有了数据data
    3. beforeMount、此时vue挂在的根节点已创建，
    4. mounted、此时dom挂载完成，可以进行操作，绘制完成，一般异步请求都写在这
    5. beforeUpdate、数据更新后没有立即更新，但dom数据会改变
    6. updated、dom和更改过的内容同步
    7. beforedestroy、可以做自定义事件的接触绑定，定时任务销毁，绑定的window和document事件销毁
    8. destroyed，
2. v-if和v-show区别
3. 计算属性和监听属性的区别
4. 组件传值方法
5. eventbus的原理
6. vue双向绑定和响应式的实现原理
7. vuex的基础，哪个是异步,VUEX工作机制,数据流动过程
8. vue中对数组做了什么更改，哪些api可以用
9. vue router的两种模式，传参，路由守卫
10. 封装组件方法
11. 对MVVM看法，单页面和多页面的优劣
12. data为什么为函数
13. 自定义指令

## HTTP
1. http状态码
2. http缓存
3. 三次握手四次挥手
4. GET POST区别
5. 跨域，同源协议，如何解跨域
6. TCP/UDP区别

## WEBPACK
1. webpack打包原理
2. loader和plugin区别
3. webpack打包优化

## NODE
1. 进程和线程理解
2. node事件循环机制

