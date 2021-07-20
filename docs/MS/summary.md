# 总结
## 如何提问及回答
### CSS
1、什么是标签语义化  
回答：标签语义化就是合理的标签干合适的事情
    1、有哪些标签，都啥意思
    回答：有行内标签和块状标签
    行内标签：span/a/
    块状标签：div/P/H1-H6/UL/OL/TL/TD/head/footer/nav/
    行内块状标签：img/input/表单元素列标签
    2、三类有啥区别

    3、三类标签如何转化
    display：inline-block、block、inline
    4、除了这几个还有啥
    flex、none、table
    5、除了none隐藏还有啥
    visibility：hidden（占着茅坑不拉屎）
    6、css让一个div消失在视野中，你想到的方式
    7、opacity为0可以让元素小时，IE7-的兼容？
    答：IE: filter:alpha(opacity)
        Mozilla: -moz-opacity
        Safari: -khtml-opacity
    8、filter还能干嘛
    答：滤镜、模糊度、反色
    9、display：flex项目中啥时候用到了
    10、除了这种还有啥居中
    11、响应式布局怎么做
    12、还有哪些盒子模型

### 面试题
1、盒子水平垂直居中的五大方案
答：1、定位：三种
        ① 知道宽高：父级position：relative，自己：position：relative
            top：50%
            left:50%
            margin-top: -25px
            margin-left: -50px
        ② 有宽高，不知道
            position：absolute
            top：0
            left：0
            right：0
            bottom：0
            margin：auto
        ③  可以不知道宽高  不兼容前面 position：absolute
            top：50%
            left：50%
            transform： translate（-50%，-50%）
    2、display：flex
        父容器：display：flex
                justify-content： center
                align-items: center
    3、JavaScript:获取当前屏幕的宽高
::: js
    let HTML = document.documentElement,
        winW=HTML.clientWidth,
        winH=HTML.clientHeight,
        boxW=box.offsetWidth,
        boxH=box.offsetHeight,
    // 父组件positon：relative 子组件 position： absolute
    body.style.position="absolute"
    body.style.left=(winW-bowW) / 2 + 'px'
    body.style.top=(winH-boxH) / 2 + 'px'
:::
    4、display：table-cell  //盒子变成inline 要求父级有固定宽高
        vertical-align：middle
        text-align： center
    5、js还可以获取边界：getboundingClientRect（）
    技巧：这种在我之前项目中还是很常见的需求，我刚接手项目的时候发现其中是使用绝对定位的方式，根据宽高算出应该放置的位置，这个也是公司原因，有严格的UXUE要求，后面在做一些没有那么严格的UE要求项目时候，就使用过flex进行居中操作，平时在MDN和CNDS上也有看到使用……方式的
2、css盒模型
    //盒模型有标准盒模型和怪异盒模型（ie）  flex弹性伸缩
    技巧：常用的标准盒模型，之前写的时候想让盒子多宽多高，但是加上padding、margin就会让它的盒变化，css3中的boxsizing：border-box，会自动更改content大小，我看elementUI等源码中也都用这个来处理，我感觉这个也是个开发标准 
    
3、几大经典布局方案
    圣杯布局
    双飞翼布局
    =》左右固定，中间自适应
