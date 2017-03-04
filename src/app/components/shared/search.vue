<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="input-group">
      <input type="text" class="form-control"
        v-model="searchCondition.post"/>
      <div class="input-group-btn">
        <input type="button" class="btn btn-primary" value="Search"
          v-on:click="search"/>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../../store/mutation-types'
export default {
  name: 'n-search',
  data () {
    return {
      searchCondition: {}
    }
  },
  methods: {
    search: function () {
      this.$emit(types.SHARED_SEARCH_SEARCH_POST, this.searchCondition)
    }
  }
}
</script>
