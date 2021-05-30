   # js总结记录

   ## js手写实例

   ### 数组扁平化

``` js
   // const arr = [[1,2],[3,[4,[5,6]]],7];
   const arr = [1,[2,[3,[4,5]]],6];
   const res1 = arr.flat(Infinity)  //[1, 2, 3, 4, 5, 6]
   const res2 = JSON.stringify(arr).replace(/\[|\]/g,'').split(',');  //正则方式 ["1", "2", "3", "4", "5", "6"]
   const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']') //正则优化 [1, 2, 3, 4, 5, 6]
   // reduce方法
   const flatten = arr1 => {
      return arr1.reduce((pre,cur) => {
         return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
      },[])
   }
   const res4 = faltten(arr) 
   // for循环法
   function fn(arr1){
      for(let i = 0; i < arr1.length; i++){
         if(Array.isArray(arr1[i])){
            fn(arr1[i])
         } else {
            res5.push(arr1[i])
         }
      }
   }
   fn(arr)
```

### 数组去重

``` js
   //结果有两个相同的空函数，是因为对象和数组查询的是地址
   const arr = [1,1,'1',12,true,true,false,false,'true','a',{},{},[],[]];
   // 利用set
   const res1 = Array.from(new Set(arr))  // [1, "1", 12, true, false, "true", "a", {…}, {…}, Array(0), Array(0)]
   // for循环加splice
   const unique1 = arr => {
      let len = arr.length;
      for(let i = 0; i < len; i++){
         for(let j = i+1;j<len;j++){
            if(arr[i] === arr[j]){
               arr.splice(j,1);
               len--;
               j--;
            }
         }
      }
      return arr
   }
   // 利用indexOf
   const unique2 = arr => {
      const res = []; 
      for(let i = 0; i < arr.length; i++){
         if(res.indexOf(arr[i]) === -1){
            res.push(arr[i])
         }
      }
      return res;
   }
   // 利用include
   const unique3 = arr => {
      const res = []; 
      for(let i = 0; i < arr.length; i++){
         if(!res.includes(arr[i])){
            res.push(arr[i])
         }
      }
      return res;
   }
   // 利用filter
   const unique4 = arr => {
      return arr.filter((item,index) => {
         return arr.indexOf(item) === index;
      })
   }
   // 利用Map  [1, 12, true, false, "a", {…}, Array(0)] 此方法会将 1 与 ‘1’认为相同，数组和对象也只能有一个
   const unique5 = arr => {
      var map = new Map; var res = [];
      for(let i = 0; i < arr.length; i++){
         if(!map[arr[i]]){
            map[arr[i]] = true;
            res.push(arr[i]);
         }
      }
      return res;
   }
```

### 类数组转化为数组