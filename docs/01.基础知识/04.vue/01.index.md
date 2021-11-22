---
title: index
date: 2021-04-13 22:03:08
permalink: /pages/4fffe6/
categories:
  - vue
tags:
  - 
---
 # vue总结记录

 ## VUE 特性
 1、声明式渲染
 可以使用模板语法声明式的将数据渲染进DOM系统，也就是可以在data中定义要展示的数据
 2、双向数据绑定
 实现MVVM，数据双向绑定，不再去操作DOM
 3、虚拟DOM
 更快的渲染，通过diff算法，快速比对，进行最小的DOM操作




 ## 理解记录
 1、el：element 元素每个vue实例都需要传入   
 2、vue实例的data熟悉中的数据，如果在声明的时候没有加入，后面加入是无效的，无法进行响应式展示（比如给data中只有a，后面使用的时候添加了b）
 3、使用vm和data修改数据结果相同
 4、可以使用vm.$调取vue提供的方法如vm.$watch('【监听的数据名称】,function(newVal,oldVal){【newVal和oldVal分别是新的值和旧值】}>')
 5、v-once:只使用一次的数据，后续不会再变化，不想让变化也可以使用Object.freeze()
 6、事件修饰符：.stop  .prevent .self .capture .once .passive
 7、插槽：给个入口，可以插入html模板或者组件之类
 8、vue中有filter，可以过滤，类似methods