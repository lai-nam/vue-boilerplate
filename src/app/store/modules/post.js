import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  all: []
}

const getters = {
  posts: st => st.all
}

const actions = {
  getPost ({ commit }, url) {
    Vue.http.get(url).then(response => {
      // get body data
      commit(types.POST_GET_POSTS, response.data)
    }, response => {
      // error callback
    })
  }
}

const mutations = {
  [types.POST_GET_POSTS] (state, data) {
    state.all = data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
