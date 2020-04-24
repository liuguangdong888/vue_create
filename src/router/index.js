import Vue from 'vue'
import VueRouter from 'vue-router'
const login = () => import('@/views/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/log'
  },
  {
    path: '/log',
    name: 'log',
    component:login
  }
]

const router = new VueRouter({
  routes
})

export default router
