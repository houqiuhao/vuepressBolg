(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{447:function(e,t,s){"use strict";s.r(t);var a=s(15),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("前几天同事问我个问题，说他想延迟两秒后再执行后面的操作，但是 await 了一个 setTimeout 后没生效，后面的直接执行了\n嗨 my homie，事件循环啊兄弟👀")]),e._v(" "),s("blockquote",[s("p",[e._v("await 后面直接执行 setTimeout 只会让 setTimeout 中的函数加入事件队列而已，并不能阻塞\n可以使用这个方式： sleep = (delay) => new Promise((resolve,reject) => setTimeout(resolve, delay))\n由此可见事件循环不止是面试中用的，实际开发中也会遇到类似的问题，所以今天对事件循环做一个整理")])]),e._v(" "),s("h1",{attrs:{id:"js中的事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js中的事件循环"}},[e._v("#")]),e._v(" js中的事件循环")]),e._v(" "),s("p",[e._v("js 中存在同步和异步任务，而异步任务又分为宏任务和微任务，事件循环中会优先执行同步任务，遇到异步任务的时候会将任务加入任务队列，待同步任务执行完之后再去执行异步任务，异步任务中又分宏任务和微任务，每次事件循环执行完成同步任务时，会先执行微任务，再执行宏任务，每当执行完一次宏任务会查看下有没有微任务，如果有就会先执行完微任务。")]),e._v(" "),s("h1",{attrs:{id:"node中的事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node中的事件循环"}},[e._v("#")]),e._v(" node中的事件循环")])])}),[],!1,null,null,null);t.default=o.exports}}]);