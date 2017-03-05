import * as types from '../mutation-types'

const state = {
  token: ''
}

const getters = {
  token: state => state.token
}

const actions = {
  getToken: function getPost ({ commit }) {
    commit(types.USER_SET_TOKEN, 'todo-get-token-from-server')
  }
}

const mutations = {
  [types.USER_SET_TOKEN] (state, token) {
    state.token = token
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

