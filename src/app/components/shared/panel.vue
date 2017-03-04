<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div v-bind:class="['panel-' + post.color]" class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">{{ post.title }}</h3>
      </div>
      <div class="panel-body">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'n-panel',
//  data () {
//    return {
//      post: this.post
//    }
//  },

  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
