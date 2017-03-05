// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)
new Vue(App).$mount('#app')
