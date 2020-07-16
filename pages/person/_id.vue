<template lang="pug">
.person person {{$route.params.id}}
</template>
<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    this.$nextTick(this.init)
  },
  methods: {
    ...mapActions('channel', ['serverChannelsAction']),
    init() {
      this.serverChannelsAction({
        active: this.$route.name,
        id: this.$route.params.id
      })
    }
  }
}
</script>
