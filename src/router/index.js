import Vue from 'vue'
import VueRouter from 'vue-router'
const login = () => import('@/views/index.vue')
const child1 = () => import('@/views/child1.vue')
const child2 = () => import('@/views/child2.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/log'
  },
  {
    path: '/log',
    name: 'log',
    component: login,
    children: [{ path: '/child1/:address', name: 'child1', component: child1 }]
  },
  {
    path: `/child2`,
    name: 'child2',
    component: child2,
  }
]

const router = new VueRouter({
  routes
})

export default router
