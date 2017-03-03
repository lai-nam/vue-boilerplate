import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions: {},
  getters: {},
  modules: {
    post
  },
  strict: debug
})
