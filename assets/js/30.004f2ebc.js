(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{448:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("以前的js能做的事没那么多，代码也没那么多，所以代码都是放在一起的"),a("br"),t._v("\n随着前端的发展，js能做的事越来越多，js的代码页越来越多，代码再放在一起就会导致很多问题，如代码难以阅读，命名冲突，没法按需引入等问题，然后模块化就来了"),a("br"),t._v("\n模块化就是按照一定的规则，将js文件分为许多单独的文件，暴露接口，需要的时候再引入")]),t._v(" "),a("p",[t._v("JS 模块化分为好几个阶段，从最初的闭包，到commonjs，AMD，CMD，UMD到现在的ES6模块")]),t._v(" "),a("h1",{attrs:{id:"commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[t._v("#")]),t._v(" commonjs")]),t._v(" "),a("p",[t._v("commonjs的模块化规范是nodejs中出来的，其思想就是每一个文件都是一个模块，拥有自己独立的作用域，不会影响全局作用域，使用 module.exports 暴露，使用 require 引入")]),t._v(" "),a("h2",{attrs:{id:"commonjs-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-特点"}},[t._v("#")]),t._v(" commonjs 特点")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("拥有自己独立作用域，不会影响全局作用域\n按引用顺序加载\n可以多次加载，但加载后会进行缓存，后面无论引入多少次，都会优先使用缓存，除非清除缓存\nmodule.exports 输出的是值的拷贝，一旦完成操作，模块内部的变化无法影响暴露的值\n")])])]),a("blockquote",[a("p",[t._v("commonjs 的引入是全量引入，无法按需引入，并且模块的加载是同步的")])]),t._v(" "),a("blockquote",[a("p",[t._v("(warning) exports 是对module.exports的引用，相当于声明了 var exports = module.exports")])]),t._v(" "),a("h1",{attrs:{id:"amd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[t._v("#")]),t._v(" AMD")]),t._v(" "),a("p",[t._v("因为commonjs 是nodejs使用的，基本都是在服务端，文件缓存在本地，不需要异步加载，所以commonjs 加载是同步的，在浏览器中就有点不适用了，所以出现了AMD"),a("br"),t._v("\nAMD 全称：Asynchronous Module Definition， 可以使用异步加载，不会影响后面的代码运行，所有依赖加载的操作都写入 callback，待加载完成之后执行 callback"),a("br"),t._v("\nAMD 通过 define 定义模块，通过 require 加载模块")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块可以直接返回函数，也可返回对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载 其加载有两个参数，一个是 module 名，一个是 callback")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h1",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[t._v("#")]),t._v(" CMD")]),t._v(" "),a("p",[t._v("CMD 规范全称为：Common Module Definition，综合了 CommonJS 和 AMD 规范的特点，推崇 as lazy as possible。代表库为 sea.js 。"),a("br"),t._v("\nCMD 规范和 CMD 规范不同之处："),a("br"),t._v("\nAMD 需要异步加载模块，而 CMD 可以同步可以异步；\nCMD 推崇依赖就近，AMD 推崇依赖前置。")]),t._v(" "),a("h1",{attrs:{id:"umd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#umd"}},[t._v("#")]),t._v(" UMD")]),t._v(" "),a("p",[t._v("UMD 叫做通用模块定义规范（Universal Module Definition）。 它可以通过运行编译时让同一个代码模块在使用 CommonJs、CMD 甚至是 AMD 的项目中运行。 这样就使得 JavaScript 包运行在浏览器端、服务区端甚至是 APP 端都只需要遵守同一个写法就行了。")]),t._v(" "),a("p",[t._v("他的规范就是综合其他的规范，没有自己专有得规范。"),a("br"),t._v("\n代码如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" factory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" define "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" define"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AMD 规范")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" module "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类 Node 环境，并不支持完全严格的 CommonJS 规范")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是属于 CommonJS-like 环境，支持 module.exports 用法")]),t._v("\n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器环境")]),t._v("\n    root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnExports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回值作为 export 内容")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在定义模块得时候会检测当前得环境，将不同的模块定义方式转换为同一种写法。")]),t._v(" "),a("h1",{attrs:{id:"es-原生模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-原生模块化"}},[t._v("#")]),t._v(" ES 原生模块化")]),t._v(" "),a("p",[t._v("ES原生模块化指的就是 ES6 的 module")]),t._v(" "),a("p",[t._v("ES6 模块化有以下特点"),a("br"),t._v("\nexport 的是对象的引用，也就是说所引用模块内部内部有变化的时候外部也可以跟随变化（commonjs中是值的拷贝）\n模块是静态的，编译时就确定模块间的依赖关系")]),t._v(" "),a("p",[t._v("模块设置为静态的，最大的目的就是实现 tree shaking 提升运行性能")]),t._v(" "),a("p",[t._v("ES 中的模块化有两种暴露方式： export 和 export default")]),t._v(" "),a("p",[t._v("export default 是全量输出的，不利于按需引入，也不利于 tree shaking，所以一般来说推荐使用 export {}")])])}),[],!1,null,null,null);s.default=e.exports}}]);