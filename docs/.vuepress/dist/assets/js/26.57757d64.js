(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{430:function(t,e,n){"use strict";n.r(e);var s=n(20),r=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"双向绑定的做法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定的做法"}},[this._v("#")]),this._v(" 双向绑定的做法")]),this._v(" "),e("p",[this._v("目前主流框架都有单向数据绑定，双向绑定无非就是在单向绑定的基础上给可输入元素（input，textare等）添加了change（input）事件，动态修改model和view"),e("br"),this._v("\n绑定的做法有以下几种"),e("br"),this._v("\n发布订阅模式（backbone.js）\n脏值检查（angular.js）\n数据劫持（vue.js）\n数据劫持的模型类似如下：\nnew MVVM() --\x3e Observer（劫持监听所有属性） -通知变化-> Dep <-添加订阅者/通知变化->\nWatcher(订阅者)\n--\x3e Compile（解析指令） -初始化视图/订阅数据变化-> Updater <-更新视图->")])])}),[],!1,null,null,null);e.default=r.exports}}]);