<template lang="pug">
v-layout
  .grid.gap-4(v-if="ready" class="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2")
    v-card.mx-auto(v-for="server in tagServers[activeMenu('index').list[activeMenu('index').active].gameTagId]" max-width="400" :key="server.serverId")
      v-img(:src="server.bigImgUrl")
      v-card-title(v-text="server.serverName")
      v-card-subtitle(v-text="server.intor")
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { head } from 'lodash'

export default {
  name: 'Home',
  data() {
    return {
      ready: false,
    }
  },
  computed: {
    ...mapState('channel', ['tagServers']),
    ...mapState(['menus']),
    ...mapGetters(['activeMenu']),
  },
  mounted() {
    this.$nextTick(this.init)
  },
  methods: {
    ...mapActions('channel', ['gameTagsAction', 'findServerByGameTag']),
    async init() {
      const list = await this.gameTagsAction({ size: 50 })
      this.findServerByGameTag(head(list)).then(() => {
        this.$nextTick(() => {
          this.ready = true
        })
      })
    },
  },
}
</script>
