### 1.react或者angular区别
<details>
<summary>答案</summary>
<pre><code>
Vue 借鉴了 angular 的模板和数据绑定技术，又借鉴了 react 的组件化和虚拟 DOM 技术。
</code></pre>
</details>

### 2.对vue的理解
<details>
<summary>答案</summary>
<pre><code>
关键点： 渐进式 JavaScript 框架、核心库加插件、动态创建用户界面（异步获取后台数据，数据展示在界面）
特点：   MVVM 模式；代码简洁体积小，运行效率高，适合移动PC端开发；本身只关注 UI （和 react 相似），可以轻松引入  Vue 插件或其他的第三方库进行开发。
</code></pre>
</details>

### 3.MVVM
<details>
<summary>答案</summary>
<pre><code>
全称： Model-View-ViewModel,Model 表示数据模型层。 view 表示视图层， ViewModel 是 View 和 Model 层的桥梁，数据绑定到 viewModel 层并自动渲染到页面中，视图变化通知 viewModel 层更新数据。
</code></pre>
</details>

### 4.vue是如何实现响应式数据（响应式数据原理）
<details>
<summary>答案</summary>
<pre><code>
Vue2： Object.defineProperty 重新定义 data 中所有的属性， Object.defineProperty 可以使数据的获取与设置增加一个拦截的功能，拦截属性的获取，进行依赖收集。拦截属性的更新操作，进行通知。
具体的过程：首先Vue使用 initData 初始化用户传入的参数，然后使用  new Observer 对数据进行观测，如果数据是一个对象类型就会调用 this.walk（value） 对对象进行处理，内部使用  defineeReactive  循环对象属性定义响应式变化，核心就是使用 Object.defineProperty 重新定义数据。
</code></pre>
</details>

### 5.vue中是如何检测数组变化
<details>
<summary>答案</summary>
<pre><code>
数组就是使用 object.defineProperty 重新定义数组的每一项，那能引起数组变化的方法我们都是知道的， pop 、 push 、 shift 、 unshift 、 splice 、 sort 、 reverse 这七种，只要这些方法执行改了数组内容，我就更新内容就好了
1.是用来函数劫持的方式，重写了数组方法，具体呢就是更改了数组的原型，更改成自己的，用户调数组的一些方法的时候，走的就是自己的方法，然后通知视图去更新。
2.数组里每一项可能是对象，那么我就是会对数组的每一项进行观测，（且只有数组里的对象才能进行观测，观测过的也不会进行观测

vue3：改用 proxy ，可直接监听对象数组的变化。
</code></pre>
</details>

### 6.Vue的事件绑定原理
<details>
    <summary>答案</summary>
    <pre><code>
   1. 原生 DOM 的绑定：Vue在创建真实DOM时会调用 createElm ，默认会调用 invokeCreateHooks 。会遍历当前平台下相对的属性处理代码，其中就有 updateDOMListeners 方法，内部会传入 add（） 方法
   2.组件绑定事件，原生事件，自定义事件；组件绑定之间是通过Vue中自定义的 $on 方法实现的。
   可以理解为：组件的 nativeOnOn 等价于 普通元素on 组件的on会单独处理）
    </code></pre>
</details>

### 7.v-model中的实现原理及如何自定义v-model
<details>
    <summary>答案</summary>
    <pre><code>
    v-model 可以看成是 value+input 方法的语法糖（组件）。原生的 v-model ，会根据标签的不同生成不同的事件与属性。解析一个指令来。
    自定义：自己写 model 属性，里面放上 prop 和 event
    </code></pre>
</details>

### 8.为什么Vue采用异步渲染
<details>
    <summary>答案</summary>
    <pre><code>
    Vue 是组件级更新，如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染，所以为了性能， Vue 会在本轮数据更新后，在异步更新视图。核心思想 nextTick 。
    dep.notify（） 通知 watcher进行更新， subs[i].update 依次调用 watcher 的 update ， queueWatcher 将watcher 去重放入队列， nextTick（ flushSchedulerQueue ）在下一tick中刷新watcher队列（异步）。
    </code></pre>
</details>

### 9.nextTick
<details>
    <summary>答案</summary>
    <pre><code>
    异步方法，异步渲染最后一步，与JS事件循环联系紧密。主要使用了宏任务微任务（setTimeout、promise那些），定义了一个异步方法，多次调用nextTick会将方法存入队列，通过异步方法清空当前队列。
    </code></pre>
</details>

### 10.Vue的生命周期
<details>
    <summary>答案</summary>
    <pre><code>
   
    </code></pre>
</details>