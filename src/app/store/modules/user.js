import * as types from '../mutation-types'
import Vue from 'vue'
import firebaseLogin from '@/app/services/auth/firebase-login'

const state = {
  token: '',
  loginErrMsg: ''
}

const getters = {
  token: state => state.token,
  loginErrMsg: state => state.loginErrMsg
}

const actions = {
  getToken ({ commit }) {
    commit(types.USER_SET_TOKEN, 'todo-get-token-from-server')
  },

  loginAction ({ commit }, loginInfo) {
    console.log('fireEventLOginAction')
    firebaseLogin.signInWithEmailAndPassword(loginInfo, function (error) {
      commit(types.USER_LOGIN_FAIL, error)
    })
  },

  loginSuccess ({ commit }, userInfo) {
    commit(types.USER_LOGIN_SUCCESS)
  }
}

const mutations = {
  [types.USER_SET_TOKEN] (state, token) {
    state.token = token
  },

  [types.USER_LOGIN_SUCCESS] (state, userInfo) {
    Vue.router.push({
      name: 'post'
    })
  },

  [types.USER_LOGIN_FAIL] (state, error) {
    state.loginErrMsg = error.message
    Vue.router.push({
      name: 'login'
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

