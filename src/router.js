import Vue from 'vue'
import Router from 'vue-router'
import Crypto from './views/Crypto.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/crypto'
    },
    {
      path: '/crypto',
      name: 'crypto',
      component: Crypto 
    }
  ]
})
export default router
