class EventEmitter {
    constructor() {
        this._events = {}
    }
    emit(name, ...args) {
        const callback = this._events[name] || []
        callback.forEach((event) => {
            event(...args)
        });
    }
    
    on(name, fn) {
        // const callback = this._events[name] || []
        if(this._events[name]) {
            this._events[name].push(fn)
        } else {
            this._events[name] = [fn]
        }
        // callback.push(fn)
        // this._events[name] = callback
    }

    off(name, fn) {
        if(!this._events[name]) return false
        for(let i =0; i < this._events[name].length; i++) {
            if(this._events[name][i] === fn){
                this._events[name].splice(i,1)
            }
        }
    }
    once(name, fn) {
        const newFn = () => {
            fn()
            this.off(name, newFn)
        }
        this.on(name, newFn)
    }
}

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve,this.rejecte)            
        } catch (error) {
            this.rejecte(error)
        }
    }
    status = PENDING
    value = null
    reason = null
    onFulfilledCallback = []
    onRejectedCallback = []
    
    resolve = (value) => {
        if(this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
            while(this.onFulfilledCallback.length) {
                this.onFulfilledCallback.shift()(value)
            }
        }
    }

    rejecte = (reason) => {
        if(this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
                while(this.onRejectedCallback.length) {
                    this.onRejectedCallback.shift()(reason)
                }
        }
    }

    then(onFulfilled,onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
        const promise2 = new MyPromise((resolve,rejecte) => {
            if(this.status === PENDING) {
                this.onFulfilledCallback.push(() => {
                    queueMicrotask(() => {
                        const x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, rejecte)
                    })
                })
                this.onRejectedCallback.push(() => {
                    queueMicrotask(() => {
                        const x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, rejecte)
                    })
                })
            } else if(this.status === FULFILLED) {
                //❌❌不能完全复制的啊哥！这边需要执行，不能添加了
                // this.onFulfilledCallback.push(() => {
                    queueMicrotask(() => {
                        const x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, rejecte)
                    })
                // })
            } else if(this.status === REJECTED) {
                // this.onRejectedCallback.push(() => {
                    queueMicrotask(() => {
                        const x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, rejecte)
                    })
                // })
            }
        })
        return promise2
    }
    // ❗❗静态方法记得
    static resolve (parameter) {
        if(parameter instanceof MyPromise) {
            return parameter
        }
        return new MyPromise(resolve => {
            resolve(parameter)
        })
    }
    static reject (reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if(promise2 === x) {
        //❌ 不是throw 是reject
        // throw Error('type error')
        return reject(new TypeError('chaining cycle detected for promise #<Promise>'))
    }
    if(x instanceof MyPromise) {
        x.then(resolve,reject)
    } else {
        resolve(x)
    }
}