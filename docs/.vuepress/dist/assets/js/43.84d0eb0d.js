(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{447:function(n,t,r){"use strict";r.r(t);var s=r(20),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("p",[n._v("不知道是不是在修改了node包版本后出现的这个问题，在使用yarn install的时候会报如下错误")]),n._v(" "),r("p",[r("img",{attrs:{src:"https://s4.ax1x.com/2022/01/10/7VVnpT.png",alt:"An image"}})]),n._v(" "),r("p",[n._v("很奇妙\n试过各种方法，比如：\n清除缓存：yarn cache clean  / npm cache clean\n卸载yarn重装\n卸载core-js重装\n怀疑core-js版本问题，分别重新装了 2 和 3 版本\n申请管理员权限回退了node版本\n安装删除nvmw")]),n._v(" "),r("p",[n._v("之前使用npm的时候会报这种错误："),r("br"),n._v(" "),r("img",{attrs:{src:"https://s4.ax1x.com/2022/01/10/7VVZt0.png",alt:"An image"}})]),n._v(" "),r("p",[n._v("后面删除nvmw后也不对劲，哪怕nvmw不在了，但是npm指令运行的时候还是会经过nvmw，猜测应该是nvmw在npm运行前做了些前置操作去选择node版本"),r("br"),n._v(" "),r("img",{attrs:{src:"https://s4.ax1x.com/2022/01/10/7VVA7n.png",alt:"error3"}})]),n._v(" "),r("p",[n._v("在使用nvmw安装node包的时候，会因为权限问题报错"),r("br"),n._v(" "),r("img",{attrs:{src:"https://s4.ax1x.com/2022/01/10/7VVehV.png",alt:"error3"}})]),n._v(" "),r("p",[n._v("申请管理员权限后，回退node版本也不行  ，这就监介了，不是权限问题导致的吗，仔细去排查了下\n发现我之前的node包是放在D盘，路径如下："),r("br"),n._v(" "),r("img",{attrs:{src:"https://s4.ax1x.com/2022/01/10/7VZZbd.png",alt:"error3"}})]),n._v(" "),r("p",[n._v("调用node的时候在.npmrc文件中将环境变量还是路径映射到了C盘的AppData，路径如下"),r("br"),n._v(" "),r("img",{attrs:{src:"https://s4.ax1x.com/2022/01/10/7VZVDH.png",alt:"error3"}})]),n._v(" "),r("p",[n._v("而nvmw是安装在系统盘，也就是C盘（npm install nvmw -g），猜测一是没有权限，二是位置导致，所以在调用npm的时候走到这就卡住了，nvmw中的node和使用到的node中的core-js不匹配")]),n._v(" "),r("p",[n._v("有了管理员权限后，将nvmw卸载重装，并且将node装在C盘中，然后调用就好了"),r("br"),n._v(" "),r("img",{attrs:{src:"https://s4.ax1x.com/2022/01/10/7VVVkq.png",alt:"error3"}})]),n._v(" "),r("p",[n._v("不过这边看起来node的版本好像没有更改，去vscode使用的时候发现已经改了，重启个cmd发现也已经变了，应该就是缓存问题"),r("br"),n._v(" "),r("img",{attrs:{src:"https://s4.ax1x.com/2022/01/10/7VVu1U.png",alt:"error3"}})]),n._v(" "),r("p",[n._v("OK，终于解决了，耗光了所有力气")])])}),[],!1,null,null,null);t.default=a.exports}}]);