<template lang="pug">
.server server {{$route.params.id}}
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
      console.log(this.$route)
      this.serverChannelsAction({
        id: this.$route.params.id,
        active: this.$route.name,
      })
    },
  },
}
</script>
