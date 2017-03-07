<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="container col-md-4 col-md-offset-4 login-layout">
      <div class="panel" v-bind:class="loginStatus">
        <div class="panel-heading text-center">{{this.user.loginErrMsg || 'Login'}}</div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <div class="input-group input-group-md">
                <span class="input-group-addon" id="user-addon">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </span>
                <input type="input" class="form-control" id="username" placeholder="User Name"
                  v-model="username">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group input-group-md">
                <span class="input-group-addon" id="password-addon">
                  <i class="fa fa-key" aria-hidden="true"></i>
                </span>
                <input type="password" class="form-control" id="password" placeholder="Password"
                v-model="password">
              </div>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="isRememberMe"> Remember me
              </label>
            </div>
            <input type="button" class="btn btn-primary btn-block" value="Login"
             v-on:click="loginAction(loginInfo)">
            <router-link :to="{ path: 'forgot-password' }">
              <p class="text-center forgot-password">Forgot password</p>
            </router-link>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import store from '@/app/store'

  export default {
    name: 'login',
    store,
    data () {
      return {
        username: '',
        password: '',
        isRememberMe: false
      }
    },
    computed: {
      loginStatus () {
        const panelPrimary = this.user.loginErrMsg === ''
        return {
          'panel-primary': panelPrimary,
          'panel-danger': !panelPrimary
        }
      },

      loginInfo () {
        return {
          username: this.username,
          password: this.password,
          isRememberMe: this.isRememberMe
        }
      },
      ...mapState([
        'user'
      ])
    },

    methods: {
      ...mapActions({
        loginAction: 'loginAction'
      })
    }
  }

</script>

<style scoped>
  .forgot-password {
    color: grey;
  }

  .login-layout {
    margin-top: 120px;
  }
</style>
