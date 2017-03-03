<template>
  <kbi-pagination
    v-on:go_to_page="goToPage"
    v-bind:config="pagConfig"
    v-bind:currentData="post.posts">

  </kbi-pagination>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import KbiPagination from './../shared/pagination'

export default {
  name: 'PostManager',
  computed: mapState([
    'post'
  ]),

  components: { KbiPagination },
  data () {
    return {
      mapGetters: mapGetters,
      msg: 'Welcome to Your Vue.js App',
      pagConfig: {
        totalSize: 200,
        pageSize: 20,
        pageRange: 4,
        currentData: [
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
