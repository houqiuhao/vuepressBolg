class Watcher{
    // cb为callback
    constructor(vm,expr, cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb;
        // 保存老值
        this.oldVal = this.getOldVal()
    }
    getOldVal() {
        // 这个时候加入dep 中的观察者
        Dep.target = this;
        const oldVal = compileUtil.getVal(this.expr,this.vm);
        // 这个时候已经修改过了，所以要删掉旧的观察者
        Dep.target = null;
        return oldVal;
    }
    update() {
        const newVal = compileUtil.getVal(this.expr,this.vm)
        if(newVal !== this.oldVal) {
            this.cb(newVal)
        }
    }
}

class Dep {
    constructor() {
        this.subs = [];
    }
    // 收集观察者
    addSub(watcher) {
        this.subs.push(watcher)
    }
    // 通知
    notify() {
        console.log('通知了观察者')
        this.subs.forEach(w=> {
            w.update()
        })
    }
}

class Observer {
    constructor(data) {
        this.observer(data)
    }
    observer(data) {
        if(data && typeof data === 'object') {
            Object.keys(data).forEach((key) => {
                this.defineReactive(data, key, data[key]);
            })
        }
    }
    defineReactive(data,key,vlaue) {
        // 递归遍历，对象属性也有可能是对象
        this.observer(value);
        // 观察数据时候需要创建dep ，也就是依赖
        const dep = new Dep()
        Object.defineProperty(obj,key, {
            enumerable:true,
            configurable:false,
            get() {
                // 订阅数据变化的时候 在Dep中添加观察者
                Dep.target && dep.addSub(Dep.target)
                return value;
            },
            set(newVal) {
                this.observer(newVal);
                if(newVal !== value) {
                    value = newVal;
                }
                // 告诉Dep 通知变化
                dep.notify()
            }
        })
    }
}