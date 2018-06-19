import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state, getters
})

export default store
