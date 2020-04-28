import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import LocalStorageUtil from 'localStorage/index'
Vue.use(Router)

const Home = () => import('pages/home/Home')
const Category = () => import('pages/category/Category')
const Cart = () => import('pages/cart/Cart')
const Profile = () => import('pages/profile/Profile')
const Detail = () => import('pages/detail/Detail')
const Leaf = () => import('pages/leaf/Leaf')
const ToLogin = () => import('pages/login/Login')
const ContentLogin = () => import('pages/login/childComps/ContentLogin')
const ContentRegister = () => import('pages/login/childComps/ContentRegister')
const Order = () => import('pages/order/Order')
const Star = () => import('pages/star/Star')

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      name: Home,
      component: Home,
      meta: {
        keepAlive: true
      }
    },{
      path: '/category',
      name: Category,
      component: Category,
      meta: {
        keepAlive: true
      }
    },{
      path: '/cart',
      name: Cart,
      component: Cart,
      meta: {
        keepAlive: false
      }
    },{
      path: '/profile',
      name: Profile,
      component: Profile,
      meta: {
        keepAlive: false,
      }
    },{
      path: '/detail',
      name: Detail,
      component: Detail,
      meta: {
        keepAlive: false
      }
    },{
      path: '/leaf',
      name: Leaf,
      component: Leaf,
      meta: {
        keepAlive: true
      }
    },{
      path: '/toLogin',
      name: ToLogin,
      component: ToLogin,
      redirect: '/login',
      meta: {
        keepAlive: false
      },
      children: [
        {
          path: '/login',
          name: ContentLogin,
          component: ContentLogin,
        },
        {
          path: '/register',
          name: ContentRegister,
          component: ContentRegister
        }
      ]
    },{
      path: '/order',
      name: Order,
      component: Order,
      meta: {
        keepAlive: false
      }
    },{
      path: '/star',
      name: Star,
      component: Star,
      meta: {
        keepAlive: false
      }
    }
  ],
  mode: 'history'
})


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (!(to.path !== '/toLogin' && (to.path !== '/cart') && (to.path !== '/profile') )) {

    const storage = new LocalStorageUtil()
    console.log(storage.get("userAndToken"));

    if (storage.get("userAndToken") === null){
      next({
        path: '/toLogin'
      })
    } else{
      next()
    }
  } else {
    next();
  }
});

export default router
