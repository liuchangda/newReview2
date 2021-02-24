### 1.了解过（用过）react或者angular吗，他们有什么区别？
<details>
<summary>答案</summary>
<pre><code>
Vue 借鉴了 angular 的模板和数据绑定技术，又借鉴了 react 的组件化和虚拟 DOM 技术。
</code></pre>
</details>

### 2.谈谈对vue的理解
<details>
<summary>答案</summary>
<pre><code>
关键点： 渐进式 JavaScript 框架、核心库加插件、动态创建用户界面（异步获取后台数据，数据展示在界面）
特点：   MVVM 模式；代码简洁体积小，运行效率高，适合移动PC端开发；本身只关注 UI （和 react 相似），可以轻松引入  Vue 插件或其他的第三方库进行开发。
</code></pre>
</details>

### 3.你刚刚说到了MVVM，能详细说说吗
<details>
<summary>答案</summary>
<pre><code>
全称： Model-View-ViewModel,Model 表示数据模型层。 view 表示视图层， ViewModel 是 View 和 Model 层的桥梁，数据绑定到 viewModel 层并自动渲染到页面中，视图变化通知 viewModel 层更新数据。
</code></pre>
</details>

### 4.vue是如何实现响应式数据的呢？（响应式数据原理）
<details>
<summary>答案</summary>
<pre><code>
Vue2： Object.defineProperty 重新定义 data 中所有的属性， Object.defineProperty 可以使数据的获取与设置增加一个拦截的功能，拦截属性的获取，进行依赖收集。拦截属性的更新操作，进行通知。
具体的过程：首先Vue使用 initData 初始化用户传入的参数，然后使用  new Observer 对数据进行观测，如果数据是一个对象类型就会调用 this.walk（value） 对对象进行处理，内部使用  defineeReactive  循环对象属性定义响应式变化，核心就是使用 Object.defineProperty 重新定义数据。
</code></pre>
</details>

<details>
    <summary>答案<summary>
    <pre><code>
    
    </code></pre>
</details>

<details>
    <summary>答案<summary>
    <pre><code>
    
    </code></pre>
</details>

<details>
    <summary>答案<summary>
    <pre><code>
    
    </code></pre>
</details>