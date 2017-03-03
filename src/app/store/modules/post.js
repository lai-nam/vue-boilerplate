import * as types from '../mutation-types'

const state = {
  posts: [
    {
      postName: 'postName1'
    },
    {
      postName: 'postName2'
    },
    {
      postName: 'postName3'
    },
    {
      postName: 'postName4'
    },
    {
      postName: 'postName5'
    },
    {
      postName: 'postName6'
    },
    {
      postName: 'postName7'
    },
    {
      postName: 'postName8'
    },
    {
      postName: 'postName9'
    },
    {
      postName: 'postName10'
    }
  ]
}

const getters = {
  allPost: st => st.posts
}

const actions = {
  getPost: function getPost ({ commit }) {
    commit(types.POST_GET_POSTS)
  }
}

const mutations = {
  [types.POST_GET_POSTS] (mState) {
    mState.posts.push({ postName: 'namlai111' })
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
