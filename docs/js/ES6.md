# 

## 一、let与const

1. let 不允许变量提升
2. 暂时性死区：到达定义之前也没法获取和使用全局的同名变量
3. 块级作用域

const不能锁定变量，要锁定变量，需要使用：object.freeze()

## 二、解构赋值

原理即为模式匹配，左右两边模式相同就可以进行赋值。  
数组的解构赋值  
对象的解构赋值  
字符串的解构赋值  
数值和布尔值的解构赋值  
函数参数的解构赋值  
圆括号问题      
用途    

1、解构赋值中对象的解构赋值需要使用对应的属性名，或者使用冒号转化到指定变量
::: tip
import的时候{}就用的是解构赋值
:::
2、解构赋值也可以设置默认值 

## 三、字符串扩展

字符的 Unicode 表示法
字符串的遍历器接口
直接输入 U+2028 和 U+2029
JSON.stringify() 的改造
模板字符串
实例：模板编译
标签模板
模板字符串的限制

1、增加for of循环遍历，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。  
2、模板字符串即为使用反引号，其中外部变量使用${}写入 
::: tip
模板字符串中的空格和换行都会被保留，也可以放入表达式和函数（有返回值的）
:::
3、实例：模板编译： 没看太懂  
模板编译就是将你所使用的模板转化成原生的js或者html等
:::tip
类似于vue的写法最终转换成原生
:::

## 四、字符串新增方法
String.fromCodePoint()   //String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足

String.raw()  //该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。
实例方法：codePointAt()  //正确处理 4 个字节储存的字符，返回一个字符的码点。
实例方法：normalize()  //用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。
实例方法：includes(), startsWith(), endsWith()   //是否包含，是否在头部，是否在尾部
实例方法：repeat()    //表示将原字符串重复n次
实例方法：padStart()，padEnd()  //ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。常见用途是为数值补全指定位数  
实例方法：trimStart()，trimEnd()  //行为与trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。
实例方法：matchAll()   //返回一个正则表达式在当前字符串的所有匹配  
实例方法：replaceAll()  //一次性替换所有匹配。返回一个新字符串，不会改变原字符串。  
:::error
对于正则表达式，必须使用/g 否则会报错
:::

## 五、正则的扩展
RegExp 构造函数
字符串的正则方法
u 修饰符    //Unicode模式
RegExp.prototype.unicode 属性
y 修饰符
RegExp.prototype.sticky 属性
RegExp.prototype.flags 属性
s 修饰符：dotAll 模式
后行断言
Unicode 属性类
具名组匹配
正则匹配索引
String.prototype.matchAll()

## 六、数值扩展
二进制和八进制表示法
数值分隔符
Number.isFinite(), Number.isNaN()
Number.parseInt(), Number.parseFloat()
Number.isInteger()
Number.EPSILON
安全整数和 Number.isSafeInteger()
Math 对象的扩展
BigInt 数据类型