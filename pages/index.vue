<template lang="pug">
v-layout(column justify-center align-center)
  v-card asadf
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  mounted() {
    this.$nextTick(this.init)
  },
  methods: {
    ...mapActions('channel', ['gameTagsAction']),
    init() {
      this.gameTagsAction({ size: 50 })
    }
  }
}
</script>
