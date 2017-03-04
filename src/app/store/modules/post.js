import * as types from '../mutation-types'

const state = {
  all: [
    {
      title: 'title1',
      body: 'body',
      color: 'primary'
    },
    {
      title: 'title1',
      body: 'body',
      color: 'success'
    },
    {
      title: 'title1',
      body: 'body',
      color: 'success'
    },
    {
      title: 'title1',
      body: 'body',
      color: 'info'
    },
    {
      title: 'title1',
      body: 'body',
      color: 'success'
    }
  ]
}

const getters = {
  posts: st => st.all
}

const actions = {
  getPost: function getPost ({ commit }) {
    commit(types.POST_GET_POSTS)
  }
}

const mutations = {
  [types.POST_GET_POSTS] (mState) {
    mState.all.pop()
    mState.all.push({ postName: 'namlai111', title: 'newTitle', body: 'newBody', color: 'danger' })
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
