 
const compileUtil = {
    getValue(expr,vm) {
        return expr.split('.').reduce((data, currentVal) => {
            return data[currentVal];
        }, vm.$data);
    },
    text(node, expr, vm) { //expr: msg
        let value;
        if(expr.indexOf('{{') !== -1) {
            value = expr.replace(/\{\{(.+?)\}\}/g,(...args) => {
                return this.getValue(args[1],vm);
            })
        } else {
            value = this.getValue(expr,vm)//vm.$data[expr];
        }
        this.updater.textUpdater(node,value)
    },
    html(node, expr, vm) {
        const value = this.getValue(expr,vm)//vm.$data[expr];
        // 需要在这添加监听 Watcher
        new Watcher(vm, expr, (newVal) => {
            this.updater.htmlUpdater(node, newVal)
        })
        this.updater.htmlUpdater(node,value)
    },
    model(node, expr, vm) {
        const value = this.getValue(expr,vm)//vm.$data[expr];
        new Watcher(vm, expr, (newVal) => {
            this.updater.modelUpdater(node, newVal)
        })
        this.updater.modelUpdater(node,value)
    },
    on(node, expr, vm,eventName) {
        let fn = vm.$options.methods && vm.$options.methods[expr];
        // 这边fn是要在实例上执行，不能再node上，所以要绑定
        node.addEventListener(eventName,fn.bind(vm),false)
    },
    // 
    updater: {
        textUpdater(node, value) {
            node.textContent = value;
        },
        htmlUpdater(node, value) {
            node.textContent = value;
        },
        modelUpdater(node, value) {
            node.textContent = value;
        }
    }
}

class Compile{
    // vm 就是传进来的this，也就是当前调用者
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        // 1.获取文档碎片对象，放入内存会减少页面的回流和重绘
        const fragment = this.node2Fragment(this.el);
        // 2. 编译模板
        // console.log(fragment)
        this.compile(fragment)
        // 3. 追加子元素到根元素
        this.el.appendChild(fragment);
    }
    // 编译模板的函数，将vue写的代码编译成三剑客
    compile(fragment) {
        const childNodes = fragment.childNodes;
        [...childNodes].forEach(child => {
            if(this.isElementNode(child)) {
                // 是元素节点
                // 编译元素节点
                this.compileElement(child);
            } else {
                // 文本节点
                // 编译文本节点
                this.compileText(child)
            }
            if(child.childNodes && child.childNodes.length) {
                // 循环遍历里面的元素
                this.compile(child)
            }
        })
    }
    compileElement(node) {
        const attributes = node.attributes;
        // 通过解构可以将类数组元素转化成数组元素👍
        [...attributes].forEach(attr => {
            const {name,value} = attr;
            if(this.isDirective(name)) {
                // 能进来说明是个指令 类似 v-text v-html
                const [, directive] = name.split('-');
                const [dirName, eventName] = directive.split(':')
                // 更新数据 数据驱动视图
                compileUtil[dirName](node,value,this.vm,eventName)
                // 删除有指令的标签上的属性
                node.removeAttribute('v-', + directive);
            }
            // 这边可以else 判断下@的形式       
        })

    }
    compileText(node) {
        const content = node.textContent;
        if(/\{\{(.+?)\}\}/.test(content)) {
            // 处理文本
            compileUtil['text'](node,content,this.vm)
        }

    }
    isDirective(attrName) {
        // ES6 新方法，是否以什么开头
        return attrName.startsWith('v-')
    }
    node2Fragment(el) {
        // 创建文档碎片
        const f = document.createDocumentFragment();
        let firstChild
        while(firstChild = el.firstChild) {
            // appendChild 是剪切
            f.appendChild(firstChild)
        }
        return f;
    }
    isElementNode(node) {
        // nodeType 1: 元素节点 2：文字节点 3：
        return node.nodeType === 1;
    }
}
class MVue{
    constructor(option) {
        this.$el = option.el;
        this.$data = option.data;
        this.$options = option;
        if(this.$el) {
            // 1. 实现一个数据观察者
            new Observer(this.$data)
            // 2. 实现一个指令解析器
            new Compile(this.$el, this)
        }
    }
}