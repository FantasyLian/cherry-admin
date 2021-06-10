import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Layout'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', redirect: { name: 'home' } },
      { path: '/home', name: 'home', component: () => import('@/views/home/Home') },
      { path: '/buyer', name: 'buyer', component: () => import('@/views/order/Buyer') },
      { path: '/seller', name: 'seller', component: () => import('@/views/order/Seller') },
      { path: '/balance', name: 'balance', component: () => import('@/views/detail/Balance') },
      { path: '/deposit', name: 'deposit', component: () => import('@/views/detail/Deposit') },
      { path: '/user', name: 'user', component: () => import('@/views/user/User') },
      { path: '/404', component: () => import('@/views/NotFound') }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login')
  },
  {
    path: '*',
    redirect: { path: '/404' }
  }
]

const router = new VueRouter({
  routes
})

export default router
