(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{431:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-基础教学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-基础教学"}},[t._v("#")]),t._v(" javascript 基础教学")]),t._v(" "),s("h2",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("p",[t._v("1、js保留字：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。\n2、lable: //标签 可以让代码跳转到此处")]),t._v(" "),s("h2",{attrs:{id:"运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),s("p",[t._v("1、 减法会先转化为number，加法会根据情况\n2、比较运算符，非字符串情况下，原始类型会转化为数值再进行比较，非原始类型会调用 valueOf().toString();\n3、|  二进制或，可快速转化32位\n4、^  二进制异或，可以快速交换两数字\n5、void  可以在form表单中使用，方式post数据跳转，void返回undefined")]),t._v(" "),s("h2",{attrs:{id:"语法专题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法专题"}},[t._v("#")]),t._v(" 语法专题")]),t._v(" "),s("h3",{attrs:{id:"数据转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据转换"}},[t._v("#")]),t._v(" 数据转换")]),t._v(" "),s("p",[t._v("1、number较为严格，只要有不能转的就会转为NaN，parseInt会把能转的转了\n2、String 会将对象转化成[object,object]，将数组转化成字符串形式")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Object]"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1,2,3"')]),t._v("\n")])])]),s("p",[t._v("3、Boolean, 只有null，undefined，0，NaN，''为false，其他都是true")]),t._v(" "),s("h2",{attrs:{id:"标准库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准库"}},[t._v("#")]),t._v(" 标准库")]),t._v(" "),s("h3",{attrs:{id:"arrary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arrary"}},[t._v("#")]),t._v(" Arrary")]),t._v(" "),s("p",[t._v("1、array.toString()可以将数组扁平化\n2、array的sort是根据字典序排序，会将数字先转化为字符串再进行排序")]),t._v(" "),s("h3",{attrs:{id:"object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),s("p",[t._v('1、原生的js对象，查看时会展示"function valueOf() { [native code] }"\n查看方法：Object.valueOf().toString()')]),t._v(" "),s("h2",{attrs:{id:"面向对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),s("h2",{attrs:{id:"document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[t._v("#")]),t._v(" DOCUMENT")]),t._v(" "),s("p",[t._v('window.prompt("【内容】"): 浏览器弹出提醒 让用户输入   //让其等于一个变量 这个变量就是用户输入的值\n1、document.visibilityState属性返回状态值，可以判度文档是否可见\nvisible：页面可见。注意，页面可能是部分可见，即不是焦点窗口，前面被其他窗口部分挡住了。\nhidden：页面不可见，有可能窗口最小化，或者浏览器切换到了另一个 Tab。\nprerender：页面处于正在渲染状态，对于用户来说，该页面不可见。\nunloaded：页面从内存里面卸载了。')]),t._v(" "),s("h3",{attrs:{id:"css操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css操作"}},[t._v("#")]),t._v(" CSS操作")]),t._v(" "),s("p",[t._v("Element.style返回的只是行内样式，并不是该元素的全部样式，元素的全部样式要通过window.getComputedStyle()得到。")]),t._v(" "),s("h2",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("p",[t._v("1、冒泡和捕获？\n回答：冒泡就是从目标到上层，捕获就是从上层到目标；\n事件代理：将子节点的监听放到父节点统一处理")]),t._v(" "),s("p",[t._v("2、addEventListener方法可以为针对当前对象的同一个事件，添加多个不同的监听函数。这些函数按照添加顺序触发，即先添加先触发。如果为同一个事件多次添加同一个监听函数，该函数只会执行一次，多余的添加将自动被去除（不必使用removeEventListener方法手动去除）。")]),t._v(" "),s("p",[t._v("3、派发事件：dispatchEvent（）")]),t._v(" "),s("h3",{attrs:{id:"event对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event对象"}},[t._v("#")]),t._v(" Event对象")]),t._v(" "),s("p",[t._v("Event构造函数接受两个参数，一个是type，即事件类型，一个是options，表示事件配置")]),t._v(" "),s("ol",[s("li",[t._v("options有两个属性： bubbles：表示事件是否冒泡，默认false， cancelable：表示事件是否可取消，即能否用Event.preventDefault()取消事件")])]),t._v(" "),s("h3",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("p",[t._v("1、Event.bubbles，Event.eventPhase（返回一个整数常量，表示事件目前所处的阶段）"),s("br"),t._v("\n0，事件目前没有发生。"),s("br"),t._v("\n1，事件目前处于捕获阶段，即处于从祖先节点向目标节点的传播过程中。"),s("br"),t._v("\n2，事件到达目标节点，即Event.target属性指向的那个节点。"),s("br"),t._v("\n3，事件处于冒泡阶段，即处于从目标节点向祖先节点的反向传播过程中。"),s("br"),t._v("\n2、Event.cancelable，Event.cancelBubble，event.defaultPrevented"),s("br"),t._v("\n3、Event.currentTarget，Event.target"),s("br"),t._v("\n4、Event.type"),s("br"),t._v("\n5、Event.timeStamp属性返回一个毫秒时间戳，表示事件发生的时间"),s("br"),t._v("\n6、Event.isTrusted"),s("br"),t._v("\n7、Event.detail")]),t._v(" "),s("h3",{attrs:{id:"实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),s("p",[t._v("Event.preventDefault方法取消浏览器对当前事件的默认行为")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("注意，该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播。如果要阻止传播，可以使用stopPropagation()或stopImmediatePropagation()方法。")])]),t._v(" "),s("p",[t._v("Event.composedPath()返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("lodash函数库提供了现成的throttle函数，可以直接使用。")])]),t._v(" "),s("h2",{attrs:{id:"浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),s("h3",{attrs:{id:"script-元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-元素"}},[t._v("#")]),t._v(" script 元素")]),t._v(" "),s("p",[t._v("1、defer属性：作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本"),s("br"),t._v("\n2、async属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。"),s("br"),t._v("\n3、手动插入脚本时，可以使用async属性为false，防止顺序错误（先下载完的先处理导致）")]),t._v(" "),s("p",[t._v("染引擎处理网页，通常分成四个阶段。")]),t._v(" "),s("p",[t._v("解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。\n对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。\n布局：计算出渲染树的布局（layout）。\n绘制：将渲染树绘制到屏幕。")]),t._v(" "),s("h3",{attrs:{id:"重流和重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重流和重绘"}},[t._v("#")]),t._v(" 重流和重绘")]),t._v(" "),s("p",[t._v("页面生成以后，脚本操作和样式表操作，都会触发“重流”（reflow）和“重绘”（repaint）。用户的互动也会触发重流和重绘，比如设置了鼠标悬停（a:hover）效果、页面滚动、在输入框中输入文本、改变窗口大小等等。"),s("br"),t._v("\n1、重流必然导致重绘，重绘不一定需要重流。比如改变元素颜色，只会导致重绘，而不会导致重流；改变元素的布局，则会导致重绘和重流。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("使用window.requestAnimationFrame()，因为它可以把代码推迟到下一次重绘之前执行，而不是立即要求页面重绘。")])]),t._v(" "),s("h2",{attrs:{id:"cookie和同源限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie和同源限制"}},[t._v("#")]),t._v(" cookie和同源限制")]),t._v(" "),s("p",[t._v("2、跨域方式")]),t._v(" "),s("ol",[s("li",[t._v("JSONP：使用一个script脚本请求，在url中加入？callback=【回调函数】，服务器端做拼接，就可以在回调函数中拿到数据了")]),t._v(" "),s("li",[t._v("websocket：通信协议，其中有字段origin，服务端可以根据origin处理要不要返回给他数据")]),t._v(" "),s("li",[t._v("CORS")])]),t._v(" "),s("h2",{attrs:{id:"js特殊使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js特殊使用方式"}},[t._v("#")]),t._v(" js特殊使用方式")]),t._v(" "),s("p",[t._v("1、非数组转化为数组")]),t._v(" "),s("div",{staticClass:"language-js 如转化arguments extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"缺陷-坑记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺陷-坑记录"}},[t._v("#")]),t._v(" 缺陷/坑记录")]),t._v(" "),s("h3",{attrs:{id:"基础语法坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础语法坑"}},[t._v("#")]),t._v(" 基础语法坑")]),t._v(" "),s("p",[t._v("1、var： 直接对变量进行赋值相当于使用了var 若未定义或赋值而直接使用会报错undefined")]),t._v(" "),s("p",[t._v("2、变量提升的奇怪之处")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出undefined ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VM254")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相当于")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("变量提升只是提升了定义！\n")])])])]),t._v(" "),s("p",[t._v("3、函数的变量提升：\nfunction声明的函数会进行变量提升，而赋值形的不会，如 var f = funciton(){};\n4、函数执行时的作用域，是定义时的作用域，而不是调用时的作用域\n5、没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入undefined")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SyntaxError: Unexpected token ,(…)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),s("p",[t._v("6、函数传值：如果传入的是原始类型的值，则是传值传递，即在函数内部修改不会影响外部的值，而如果传入的是复杂类型的值，如数组对象，则为传址传值，即函数内修改会导致外部变量变化。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("o")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobj "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1, 2, 3]")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);