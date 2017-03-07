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

// Initialize Firebase
// import firebase here
import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBWNOC8lBdjI266Huloawg3pHzf22lYNJU',
  authDomain: 'n-operator.firebaseapp.com',
  databaseURL: 'https://n-operator.firebaseio.com',
  storageBucket: 'n-operator.appspot.com',
  messagingSenderId: '579440220716'
}

firebase.initializeApp(config).auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('loginSuccess', user)
  }
})
