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
    meta: { title: '首页' },
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/Home')
    }]
  }, {
    path: '/',
    component: Layout,
    meta: { title: '订单' },
    redirect: '/order/buyer',
    children: [{
      path: '/buyer',
      name: 'buyer',
      meta: { title: '买家订单' },
      component: () => import('@/views/order/Buyer')
    }, {
      path: '/seller',
      name: 'seller',
      meta: { title: '卖家订单' },
      component: () => import('@/views/order/Seller')
    }]
  }, {
    path: '/',
    component: Layout,
    meta: { title: '明细' },
    redirect: '/detail/balance',
    children: [{
      path: '/balance',
      name: 'balance',
      meta: { title: '余额明细' },
      component: () => import('@/views/detail/Balance')
    },
    {
      path: '/deposit',
      name: 'deposit',
      meta: { title: '提现明细' },
      component: () => import('@/views/detail/Deposit')
    }]
  }, {
    path: '/user',
    component: Layout,
    meta: { title: '用户' },
    redirect: '/user',
    children: [{
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/User')
    }]
  }, {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login')
  }, {
    path: '*',
    redirect: { path: '/404' }
  }
]

const router = new VueRouter({
  routes
})

export default router
