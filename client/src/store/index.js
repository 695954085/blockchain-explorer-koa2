import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state, getters, mutations
})

export default store
