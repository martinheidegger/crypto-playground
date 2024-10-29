import Vue from 'vue'
import Router from 'vue-router'
import Introduction from './components/Introduction.vue'
import Asymmetric from './components/Asymmetric.vue'
import Symmetric from './components/Symmetric.vue'
import Zkp from './components/zkp.vue'
import Hash from './components/Hash.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/intro'
    },
    {
      path: '/intro',
      name: 'intro',
      component: Introduction
    },
    {
      path: '/hash',
      name: 'hash',
      component: Hash
    },
    {
      path: '/asymetric',
      name: 'asymetric',
      component: Asymmetric
    },
    {
      path: '/symmetric',
      name: 'symmetric',
      component: Symmetric
    },
    {
      path: '/zkp',
      name: 'zkp',
      component: Zkp
    }
  ]
})
export default router
