import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  token: ''
}

const getters = {
  token: state => state.token
}

const actions = {
  getToken ({ commit }) {
    commit(types.USER_SET_TOKEN, 'todo-get-token-from-server')
  },

  loginAction ({ commit }, loginInfo) {
    // TODO: send http request here
    window.localStorage.setItem('login_token', 'namLai')
    commit(types.USER_LOGIN_SUCCESS)
  }
}

const mutations = {
  [types.USER_SET_TOKEN] (state, token) {
    state.token = token
  },

  [types.USER_LOGIN_SUCCESS] (state) {
    console.log('Vue', state)
    Vue.router.push({
      name: 'post'
    })
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

