import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('pages/home/Home')
const Category = () => import('pages/category/Category')
const Cart = () => import('pages/cart/Cart')
const Profile = () => import('pages/profile/Profile')
const Detail = () => import('pages/detail/Detail')
const Leaf = () => import('pages/leaf/Leaf')

export default new Router({
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
        keepAlive: true
      }
    },{
      path: '/profile',
      name: Profile,
      component: Profile,
      meta: {
        keepAlive: true
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
    }
  ],
  mode: 'history'
})
