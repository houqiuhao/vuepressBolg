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