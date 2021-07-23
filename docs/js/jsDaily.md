## js类型判断

 typeof 和 instanceof区别
 typeof会判断数据类型，可以分辨出number、boolean、string、object、function（object有call方法的会展示function）、undefined
 ::: tip
 null 的typeof为object
 :::
 instanceof根据原型链判度是否是此类型，返回值为boolean,如：
 ```js

 console.log([] instanceof object) //true  Array也是object

 ```

 ::: tip
  可用Object.prototype.toString.call(【元素】)来判断元素类型
 :::

 ## js堆与栈
 栈：js中为原始类型开辟的一块内存空间
 堆：js中为引用类型开辟的一块内存空间

 ## js深拷贝
 1、Object.create()  //浅拷贝
 深拷贝方法：
 1、遍历：
 ```js
 function deepClone(startObj, endObj) {
     //为了不把原对象清空
     var obj = endObj || {}
     for(var i in startObj) {
         if(typeof startObj[i] === 'object') {
             obj[i] = startObj[i].constructor === Array ? []:{}
             deepClone(startObj[i], obj[i])
         } else {
             obj[i] = startObj[i]
         }
     }
     return obj
 }
 ```
 2、JSON.parse  JSON.stringify


 ## 浏览器中的缓存机制区别
 一般使用三种，cookie、localstorage、sessionstorage

 cookie用来记录用户的一些信息，会在数据请求的时候携带

 local storage会保存在浏览器中，除非手动删除或者覆盖，否则一直存在

 session storage保存在浏览器中，刷新浏览器或关闭浏览器会删除


### 覆写console的理解：
覆写方法如下：
```js
//将console.log写为自执行函数，并将原生的console.log当作参数传入
window.console.log = (function (oriLog) {
    //返回一个函数，此时console.log为堆中的一个函数，当调用时，会执行此函数内容，即oriLog.call（）
        return function () {
            try {
                //将this指向console，即会执行console下的oriLog，即原生console.log指令
                oriLog.call(console,...arguments);
                if (remoteable) {
                    postWebLog(...arguments);
                }
            }
            catch (err){}
        }
    })(console.log)  //
```