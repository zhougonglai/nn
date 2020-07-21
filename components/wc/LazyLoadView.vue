<template lang="pug">
.lazy-load-view
  slot(v-if="!ready" name="loading")
  slot(v-else)
</template>
<script>
import CircleLoader from './CircleLoader'

export default {
  props: {
    // () => new Promise((resolve) => setTimeout(resolve, 0)),
    initFN: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      ready: false,
    }
  },
  mounted() {
    this.initFN().then(this.initSlot)
  },
  methods: {
    initSlot() {
      this.ready = true
    },
  },
}
</script>
