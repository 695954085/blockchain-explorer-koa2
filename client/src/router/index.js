import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BlockChain from '@/components/BlockChain'
import Register from '@/components/Register'
import store from '../store'

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
  if (!store.state.isLogin && storage()) {
    next('/login')
    return
  }
  next()
})

// 判断sessionStorage
function storage () {
  if (sessionStorage.getItem('isLogin')) {
    store.commit('reStore')
  }
  return !store.state.isLogin
}

export default router
