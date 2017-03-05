<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from '@/app/store'
import router from '@/app/router'
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState([
      'user'
    ])
  },
  store,
  router,
  mounted () {
    if (this.user.token === '') {
      console.log('Not Authenticated')
      return
    }
  }
}
</script>
