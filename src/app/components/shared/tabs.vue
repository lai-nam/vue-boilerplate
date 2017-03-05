<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <ul class="nav nav-tabs">
      <li v-bind:class="{ active: currentView === 'kuppa-tab-dashboard' }"
          role="presentation">
        <a id="kuppa-tab-dashboard" v-on:click="focusTab" href="#">Dashboard</a>
      </li>
      <li v-bind:class="{ active: currentView === 'kuppa-tab-post' }"
          role="presentation">
        <a id="kuppa-tab-post" v-on:click="focusTab" href="#post">Post</a>
      </li>
      <li v-bind:class="{ active: currentView === 'kuppa-tab-category' }"
          role="presentation">
        <a id="kuppa-tab-category" v-on:click="focusTab" href="#category">Category</a>
      </li>
      <li v-bind:class="{ active: currentView === 'kuppa-tab-user' }"
          role="presentation">
        <a id="kuppa-tab-user" v-on:click="focusTab" href="#user">User</a>
      </li>
      <li v-bind:class="{ active: currentView === 'kuppa-tab-contact-form' }"
          role="presentation">
        <a id="kuppa-tab-contact-form" v-on:click="focusTab" href="#contact-form">ContactForm</a>
      </li>
      <li v-bind:class="{ active: currentView === 'kuppa-tab-contact-address-book' }"
          role="presentation">
        <a id="kuppa-tab-contact-address-book" v-on:click="focusTab" href="#address-book">AddressBook</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'n-tab',

  data: function data () {
    return {
      currentView: 'kuppa-tab-dashboard'
    }
  },
  methods: {
    focusTab: function focusTab (e) {
      this.currentView = e.target.id
    }
  }
}
</script>
