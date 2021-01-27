import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: () => import('../views/Movie.vue'),
  },
  {
    path: '/tvdetail/:id',
    name: 'TvDetail',
    component: () => import('../views/TvDetail.vue'),
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music.vue'),
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/Book.vue'),
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
