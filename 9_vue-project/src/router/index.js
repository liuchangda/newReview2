import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//1. 定义(路由) 组件。可以从其他文件 import 进来
import Course from '../views/Course.vue'

Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {
    path: '/',
    name: 'Course',
    component: Course,
    children: [
      {
        path: 'fe',
        name: 'Fe',
        component: () => import('../views/Fe.vue'),
      },
      {
        path: 'rd',
        name: 'Rd',
        component: () => import('../views/Rd.vue'),
      }
    ],

  },
  //当我想找what的时候 没有 重定向到about (浏览器的url还是what)
  {
    path: '/about',
    name: 'About',
    // alias: '/what', 
    component: () => import('../views/About.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },

  {
    path: '/detail/:name/:age',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  //重定向 但是页面上的url不显示我输入的地址 不推荐
  {
    path: '/test',
    // path: '/test/:name/:age',
    name: 'Test',
    //redirect: '/', //敲入path 实际访问redirect的
    // redirect: '/detail/:name/:age',
    component: () => import('../views/Test.vue'),
    beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(next);
      if (to.name == 'Test') next();
      else next('/')
    }
  },
  {
    path: '/count',
    name: 'Count',
    component: () => import('../views/Count.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue')
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  /* history：服务器地址后面直接跟斜线 
        内核依赖html5 针对于浏览器的浏览历史增加了一个history对象 可以通过history访问历史 => 高版本浏览器
     hash：服务器地址后面多了个# 兼容性更好 支持的浏览器多
  */
  mode: 'history',
  base: process.env.BASE_URL,
  routes // (缩写) 相当于 routes: routes
})

export default router
