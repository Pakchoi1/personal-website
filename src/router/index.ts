import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/math',
    name: 'Math',
    component: () => import('@/views/Math.vue')
  },
  {
    path: '/english',
    name: 'English',
    component: () => import('@/views/English.vue')
  },
  {
    path: '/politics',
    name: 'Politics',
    component: () => import('@/views/Politics.vue')
  },
  {
    path: '/specialized-course',
    name: 'Specialized-Course',
    component: () => import('@/views/Specialized-Course.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
