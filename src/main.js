// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import store from './app/store'
import router from './app/router'

import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false
Vue.use(VueResource)
new Vue(App).$mount('#app')
