# 基础
## vue route
使用方式：
```js
//注册
//也可以import
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]
const router = new VueRouter({
    routes
})
const app = new Vue({
    router
}).$mount('#app')

//使用
this.$route.params//查看路由参数
//路由跳转
this.$router.push('/foo')
this.$router.go(-1)

```
## 动态路由匹配
1. 在path中使用：  以冒号让路由动态匹配路径，可以在this.$route.params中查看参数对象
2. 使用路由参数，会复用组件实例，意味着不会经过生命周期钩子，此时可以watch $route对象
3. 路由守卫中可以beforeRouteUpdate中处理
## 嵌套路由
嵌套路由中可以使用children来设置子路由

## 编程式导航
两种方式使用路由：
1.  <router-link>
2. router.push(location, onComplete?, onAbort?)
如：
```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```
:::tip
注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：
:::
```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```

## 命名路由
可以使用name标示路由
## 命名视图
多个视图可以设置名字，在components设置不同的页面
## 重定向和别名
redirect可以重定向
alias可以设置别名
## 路由传参
1. 布尔模式
2. 对象模式
3. 函数模式
项目中使用query以对象传参，页面中使用this.$route.query.【属性名】获取

## history模式
vue-router默认使用hash模式
使用时在new VueRouter的时候mode设置为history即可
history模式需要后台支持

# 进阶

## 导航守卫
1. 全局前置守卫

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```
2. 