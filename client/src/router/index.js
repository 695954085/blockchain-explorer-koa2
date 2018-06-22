import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BlockChain from '@/components/BlockChain'
import Register from '@/components/Register'
import store from '../store'
import _ from 'lodash'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/register',
      component: Register,
      name: 'Register'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/register' || to.path === '/login') {
    next()
    return
  }
  if (_.isEmpty(store.state.userList)) {
    next('/login')
    return
  }
  next()
})

export default router
