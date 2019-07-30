
import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../components/goods/goods'
import Rating from '../components/rating/ratings'
import Seller from '../components/seller/seller'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/seller',
      component: Seller
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/rating',
      component: Rating
    },
    {
      path: '/',
      redirect: '/goods'
    }
  ]
})
