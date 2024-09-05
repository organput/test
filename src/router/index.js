import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "home" */ '../views/create/Create')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "shop" */ '../views/orderList/OrderList')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/login/Register'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "register" */ '../views/cartList/CartList')
  },
  {
    path: '/order/:id',
    name: 'Order',
    component: () => import(/* webpackChunkName: "register" */ '../views/order/OrderPage')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  const name = to.name
  const isLoginOrRegister = (name === 'Login' || name === 'Register')
  isLogin || isLoginOrRegister ? next() : next({ name: 'Login' })
})

export default router
