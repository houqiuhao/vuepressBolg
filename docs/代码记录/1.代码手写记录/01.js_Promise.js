// 这边做一个联系手写代码的场地

// 1. 手写promise 
// 跟着大佬写过一遍了，自己再写写加深印象  2022/02/19
// 首先需要三个全局变量
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
    // 首先构造函数,需要有一个立即执行函数 忘了干啥使的了
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)            
        } catch (error) {
            this.reject(error)
        }
    }
    // 保存状态的变量
    status = PENDING

    // 事件队列
    onFulfilledCallback = []
    onRejectedCallback = []

    value = null
    reason = null

    // resolve
    resolve = (value) => {
        if(this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
            // this.onFulfilledCallback.forEach(fn => {
            //     result = fn(value)
            // });
            //❌需要将数组中的函数取出来并执行
            while(this.onFulfilledCallback.length) {
                try {
                    this.onFulfilledCallback.shift()(value)                   
                } catch (error) {
                    this.reject(error)
                }
            }
        }
    }

    // reject
    reject = (reason) => {
        if(this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
            while(this.onRejectedCallback.length) {
                try {
                    this.onRejectedCallback.shift()(reason)
                } catch (error) {
                    this.reject(error)
                }
            }
        }
    }
    
    // then
    // ❌then是个方法
    // then = (fn) => {
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        const promise2 = new MyPromise((resolve, reject) => {
            if(this.status === PENDING) {
                this.onFulfilledCallback.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.onRejectedCallback.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onRejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            } else if (this.status === FULFILLED) {
                queueMicrotask(() => {
                    try {
                        // ❌❗❌ 这里参数应该传value！！！！
                        // const x = onFulfilled(this.resolve)
                        const x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.status === REJECTED) {
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
        })
        return promise2
    }
    //❗❓需要添加静态方法
    static resolve (parameter) {
        if(parameter instanceof MyPromise) {
            return parameter
        } else {
            return new MyPromise((resolve) => {
                resolve(parameter)
            })
        }
    }
    static reject (reason) {
        return new MyPromise((reject) => {
            reject(reason)
        })
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if(promise2 === x) {
        // throw new Error('Chainng cycle detected for promise #<Promise>')
        // ❌应该是reject
        reject('Chainng cycle detected for promise #<Promise>')
    }
    if(x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}
module.exports = MyPromise