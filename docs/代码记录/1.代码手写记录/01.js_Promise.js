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
// Promise.all, 所有的promise都处理完毕返回结果，若出错则返回出错
MyPromise.all = (params) => {
    return new MyPromise((resolve, reject) => {
        // if ...
        let result = []
        let count = 0
        params.forEach((event,index) => {
            MyPromise.resolve(event).then((value) => {
                result[index] = value
                count++
                (count === params.length) && resolve(result) 
            }, (error) => {
                reject(error)
            })
        });
    })
}
// race 的效果是先到先得
MyPromise.race = (params) => {
    return new MyPromise((resolve, reject) => {
        params.forEach((event) => {
            MyPromise.resolve(event).then((value) => {
                resolve(value)
            },(error) => {
                reject(error)
            })
        })
    })
}

// any 谁快谁先，全错才返错
MyPromise.any = (params) => {
    return new MyPromise((resolve, reject) => {
        let result = []
        count = 0
        params.forEach((event,index) => {
            MyPromise.resolve(event).then(resolve,(error) => {
                result[index] = {status: 'rejected', val: error}
                count++
                (count === params.length) && reject(new Error('rejected'))
            })
        })
    })
}
// allSettled 全部处理完成才返回
MyPromise.allSettled = (params) => {
    return new MyPromise((resolve, reject) => {
        let result = []
        count = 0
        handler = (status, val, index) => {
            result[index] = {status: status,val: val}
            count++
            (count === params.length) && resolve(result)
        }
        params.forEach((event,index) => {
            MyPromise.resolve(event).then((val) => {
                handler('fulfilled', val, index)
                // result[index] = {status: 'fulfilled', val: val}
                // count++
                // (count === params.length) && resolve(result)
            },(err) => {
                handler('rejected', err, index)
                // result[index] = {status: 'rejected', val: err}
                // count++
                // (count === params.length) && resolve(result)
            })
        })
    })
}

// promise 限制并行数量
// promise在异步操作中经常遇到,对多个并发异步过程的处理Promise自身有Promise.all() Promise.allSettled() Promise.race()等，但都没有对并发数量进行控制。
// 实现一个Schedule类,可以用来对并发数进行控制
class Schedule {
	constructor(num) {
		this.list = []
		this.MAX_NUM = num
		this.WORKING_NUM = 0
	}
	add(event) {
		this.list.push(event)
	}
	start() {
		for (let i = 0; i < this.MAX_NUM; i++) {
			this.doNext()
		}
	}
	doNext() {
		if (this.list.length && this.WORKING_NUM < this.MAX_NUM) {
			this.WORKING_NUM++
			this.list.shift()().then(() => {
				this.WORKING_NUM--
				this.doNext()
			})
		}
	}
}

// 测试代码start
const timeout = time => new Promise((resolve) => {
	setTimeout(resolve, time)
})

const schedule = new Schedule(2)

const addTask = (time, order) => {
	schedule.add(() => timeout(time).then(() => {
		console.log(order)
	}))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)

schedule.start()
// 测试代码end


module.exports = MyPromise