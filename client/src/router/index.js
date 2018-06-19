import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BlockChain from '@/components/BlockChain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/',
      component: BlockChain,
      name: 'BlockChain'
    }
  ]
})
