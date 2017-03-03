<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div v-for="data in currentData">
      {{ data.postName }}
    </div>
    <nav>
      <ul class="pagination pagination-sm">
        <li class="page-item">
          <a class="page-link" href="#" tabindex="-1" v-on:click="(e) => {e.preventDefault(); goToPage(currentPage - 1)}">«</a>
        </li>
        <li v-bind:class="{ active: page === currentPage }" v-for="page in upperPage" class="page-item">
          <a v-if="page === currentPage " class="page-link">
            {{page}}
            <span class="sr-only">(current)</span>
          </a>
          <a v-else class="page-link" href="#" v-on:click="(e) => {e.preventDefault(); goToPage(page)}">
            {{page}}
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" v-on:click="(e) => {e.preventDefault(); goToPage(currentPage + 1)}">»</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import * as types from '../../store/mutation-types'

export default {
  name: 'kbi-pagination',
  computed: {
    upperPage () {
      return [...Array(this.pageRange).keys()]
        .map(elem => elem + this.firstPage)
    },
    totalPage () {
      return Math.round(this.totalSize / this.pageSize)
    }
  },

  data () {
    let actPageRange = this.config.totalSize / this.config.pageSize
    if (actPageRange > this.config.pageRange) {
      actPageRange = this.config.pageRange
    }

    return {
      firstPage: this.config.firstPage || 1,
      currentPage: this.config.firstPage || 1,
      pageRange: actPageRange,
      totalSize: this.config.totalSize,
      pageSize: this.config.pageSize
    }
  },

  props: {
    config: {
      type: Object,
      required: true
    },
    currentData: {
      type: Array,
      required: true
    }
  },

  methods: {
    goToPage (pageNumber) {
      if (pageNumber < 1 || pageNumber > this.totalPage) {
        return
      }

      if (pageNumber >= this.firstPage + this.pageRange) {
        this.firstPage = (pageNumber - this.pageRange) + 1
      }

      if (pageNumber < this.firstPage) {
        const pos = this.firstPage - this.pageRange
        this.firstPage = pos > 0 ? pos : 1
      }

      this.currentPage = pageNumber
      this.$emit(types.SHARED_PAG_GO_TO_PAGE, pageNumber)
    }
  }
}
</script>
