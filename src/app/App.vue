<template>
  <div id="app">
    <kuppa-tabs></kuppa-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import KuppaTabs from './components/shared/tabs'

export default {
  name: 'app',
  components: { KuppaTabs }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
