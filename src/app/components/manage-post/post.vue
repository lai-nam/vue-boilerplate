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
import nSearchTypeahead from './../shared/searchTypeahead.vue'

export default {
  name: 'PostManager',
  computed: {
    ...mapState([
      'posts'
    ])
  },

  components: { nPagination, nPanel, nSearch, nSearchTypeahead },
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
      this.getPost('http://localhost:1337/api/posts')
      return pageNumber
    },

    searchSearchPost (searchCondition = {}) {
      return searchCondition
    }
  },
  mounted () {
    console.log('post mounted')
  }
}
</script>
