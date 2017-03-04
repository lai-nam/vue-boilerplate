<template>
  <div>
    <n-search></n-search>
    <div v-for="post in posts.all">
      <n-panel v-bind:post="post"></n-panel>
    </div>
    <n-pagination
      v-on:go_to_page="goToPage"
      v-bind:config="pagConfig"
      v-bind:currentData="posts.all">

    </n-pagination>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import nPagination from './../shared/pagination'
import nPanel from './../shared/panel'
import nSearch from './../shared/search'

export default {
  name: 'PostManager',
  computed: {
    ...mapState([
      'posts'
    ])
  },

  components: { nPagination, nPanel, nSearch },
  data () {
    return {
      mapGetters: mapGetters,
      pagConfig: {
        totalSize: 200,
        pageSize: 20,
        pageRange: 5
      }
    }
  },

  methods: {
    ...mapActions({
      getPost: 'getPost'
    }),

    goToPage (pageNumber = 1) {
      // TODO: render data here
      console.log('getPost', this.getPost('url'))
      return pageNumber
    },

    searchSearchPost (searchCondition = {}) {
      return searchCondition
    }
  }
}
</script>
