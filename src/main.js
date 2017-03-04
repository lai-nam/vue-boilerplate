// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import router from './app/router'
import store from './app/store/index'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  http: {
    withCredentials: true
  },
  template: '<App/>',
  components: { App }
})
