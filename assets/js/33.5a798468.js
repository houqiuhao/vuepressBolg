(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{451:function(t,e,a){"use strict";a.r(e);var s=a(15),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue知识点-自问自答式整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue知识点-自问自答式整理"}},[t._v("#")]),t._v(" VUE知识点 自问自答式整理")]),t._v(" "),a("h2",{attrs:{id:"vue的生命周期有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的生命周期有哪些"}},[t._v("#")]),t._v(" vue的生命周期有哪些")]),t._v(" "),a("p",[t._v("vue的生命周期有"),a("br"),t._v("\nbeforeCreate：此时vue实例还未创建，data 和 dom 都没有\ncreated：此时实例已创建，data 已经可以获取，但dom还没有挂载\nbeforeMount：挂载实例之前，此时一般可以进行数据请求之类\nmounted：实例已挂载，可操作dom\nbeforeUpdate：实例中的data被更改，触发组件重新渲染，一般要在更新前处理数据时会在这里操作\nupdated：数据已更新\nbeforeDestroy：实例销毁前，一般会在这里进行监听、定时器之类的删除\ndestroyed：实例已经销毁")]),t._v(" "),a("h2",{attrs:{id:"父子组件的生命周期和更新顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父子组件的生命周期和更新顺序"}},[t._v("#")]),t._v(" 父子组件的生命周期和更新顺序")]),t._v(" "),a("p",[t._v("父子组件生命周期是父从beforeCreate到beforeMount，然后子加载完成到mounted，然后再父mounted"),a("br"),t._v("\n更新也是先父级beforeUpdate，子完成后再父级updated")]),t._v(" "),a("h2",{attrs:{id:"v-if-和-v-show-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if-和-v-show-的区别"}},[t._v("#")]),t._v(" v-if 和 v-show 的区别")]),t._v(" "),a("p",[t._v("v-if 为false的时候直接不加载组件，也就是没有组件的dom"),a("br"),t._v("\nv-show 无论 true 或 false 都会加载组件，只不过 false 的时候不进行展示"),a("br"),t._v("\n一般来说当条件经常变化的时候使用v-show，变化没那么多的时候使用v-if即可")]),t._v(" "),a("h2",{attrs:{id:"请求数据一般在哪个生命周期-为什么不在-beforecreate-和-created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求数据一般在哪个生命周期-为什么不在-beforecreate-和-created"}},[t._v("#")]),t._v(" 请求数据一般在哪个生命周期 （为什么不在 beforeCreate 和 created）")]),t._v(" "),a("p",[t._v("我觉得请求数据在beforeMount和created里面都可以，不知道正确答案应该是啥\n❓")]),t._v(" "),a("h2",{attrs:{id:"watch-和-computed-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch-和-computed-有什么区别"}},[t._v("#")]),t._v(" watch 和 computed 有什么区别")]),t._v(" "),a("p",[t._v("computed 计算属性，会缓存上次的计算结果而watch没有缓存"),a("br"),t._v("\ncomputed 需要 return 数据而 watch 不需要\nwatch 更多会根据变化做一些操作 computed 一般就是数据\n✅\ncomputed 是声明式的描述一个依赖了其他值的值，当依赖值变化的时候计算属性也会跟着改变，而 watch 是监听的 data 中已经存在的值，只有当这个值改变的时候 watch 才会被触发"),a("br"),t._v("\nwatch 是一个对象，键是需要观察的对象，值是需要调用的回调函数，主要用来监听某些特定数据的变化，从而进行某些业务逻辑操作，一般在数据变化时需要异步或者开销大的操作时使用"),a("br"),t._v("\ncomputed 计算属性的值会被缓存，当computed值没有发生变化的时候，调用 computed 的值会首先从缓存里读取，除非依赖的值发生变化，computed 才会重新计算")]),t._v(" "),a("h2",{attrs:{id:"组件中的data为什么是一个函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中的data为什么是一个函数"}},[t._v("#")]),t._v(" 组件中的data为什么是一个函数")]),t._v(" "),a("p",[t._v("组件可能会被多次调用，如果不是函数的话就会公用一个数据，导致组件劈腿"),a("br"),t._v("\ndata 为函数时，就会为每一个实例化的组件创建独立的数据")]),t._v(" "),a("h2",{attrs:{id:"为什么-v-for-和-v-if-不建议一起使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-v-for-和-v-if-不建议一起使用"}},[t._v("#")]),t._v(" 为什么 v-for 和 v-if 不建议一起使用")]),t._v(" "),a("p",[t._v("v-for 的优先级比 v-if 高，所以一起使用的时候会先 v-for 创建一堆实例，然后将 v-if 用到每一个实例中，如果列表较大就会造成很大的性能浪费")]),t._v(" "),a("blockquote",[a("p",[t._v("3.x 中 v-if 的优先级高于 v-for 但总的来说语法存在歧义，不建议一起使用")])]),t._v(" "),a("h2",{attrs:{id:"vue组件的通信方式-数据传输方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue组件的通信方式-数据传输方式"}},[t._v("#")]),t._v(" VUE组件的通信方式（数据传输方式）")]),t._v(" "),a("p",[t._v("父——》子 方式：\n1. 可以通过 prop 直接传递\n2. children、Ref等方式获取子组件实例，然后调用其方法或属性\n3. 父级 provide 、子组件 inject    这个倒是没咋用过，伟霖最近用了\n4. EventBus\n5. VUEX")]),t._v(" "),a("p",[t._v("子——》父\n1. 子组件$emit 父组件$on监听事件（兄弟间也可以）\n2. EventBus\n3. VUEX")]),t._v(" "),a("p",[t._v("跨级间：\n1. EventBus\n2. VUEX\n3. $attrs、$listeners\n4. provide inject")]),t._v(" "),a("h2",{attrs:{id:"vue-中的-key-作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-中的-key-作用"}},[t._v("#")]),t._v(" vue 中的 key 作用")]),t._v(" "),a("p",[t._v("key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度，更高效的更新虚拟DOM;"),a("br"),t._v("\nvue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。在vue的diff函数中，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快。")]),t._v(" "),a("p",[t._v("为了在数据变化时强制更新组件，以避免“就地复用”带来的副作用。"),a("br"),t._v("\n当 Vue.js 用 v-for 更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。重复的key会造成渲染错误。")]),t._v(" "),a("h2",{attrs:{id:"nexttick-的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-的实现"}},[t._v("#")]),t._v(" nextTick 的实现")]),t._v(" "),a("ol",[a("li",[t._v("nextTick 是 vue 提供的全局API，会在下次 DOM 更新结束后触发，执行回调，")]),t._v(" "),a("li",[t._v("vue 的更新是异步的，当有更新事件触发时，会将事件加入队列中，等待过程中如果再次调用也不会重复执行，然后在一次事件循环结束的时候在进行调用")])]),t._v(" "),a("p",[t._v("nextTick 优先使用Promise、然后MutationObserver、其次setImmediate、其次setTimeout")]),t._v(" "),a("h2",{attrs:{id:"插槽的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插槽的使用"}},[t._v("#")]),t._v(" 插槽的使用")]),t._v(" "),a("p",[t._v("就是slot，相当于占位"),a("br"),t._v("\nslot 分匿名插槽和具名插槽，匿名插槽就是默认写的都会放进来，具名插槽需要使用具体名字才可以写入")]),t._v(" "),a("h2",{attrs:{id:"keep-alive的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive的实现"}},[t._v("#")]),t._v(" keep-alive的实现")]),t._v(" "),a("p",[t._v("keep-alive可以实现组件的缓存，后面重复调用的时候直接使用缓存，提升性能"),a("br"),t._v("\nkeep-alive 的实现：vue 会将组件抽象成一个个 VNode 节点，keep-alive就是缓存 VNode 节点，")]),t._v(" "),a("h2",{attrs:{id:"vuex-的用法-action-和-mutations的区别-vuex实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-的用法-action-和-mutations的区别-vuex实现原理"}},[t._v("#")]),t._v(" vuex 的用法，action 和 mutations的区别， vuex实现原理")]),t._v(" "),a("p",[t._v("state 为放置状态树的地方，调用方式如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接用")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("【属性】\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//mapState")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mapState "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n\tcomputed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("getter 是调用的方法,可以对数据做一些操作然后再返回"),a("br"),t._v("\nmutations 是提交，可以修改state的值，一般都是做同步操作"),a("br"),t._v("\nstore.commit('increment', 10)\naction 中可以做异步操作\nstore.dispatch('increment')")])])}),[],!1,null,null,null);e.default=r.exports}}]);