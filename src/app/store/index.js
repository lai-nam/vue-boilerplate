import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/post'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions: {},
  getters: {},
  modules: {
    posts
  },
  strict: debug
})
