<template lang="pug">
LazyLocadView(:initFN="init" v-cloak)
  template(#loading)
    PageHold
  v-app(dark)
    v-navigation-drawer(v-model="drawer" clipped fixed app disable-resize-watcher disable-route-watcher)
      v-list(v-if="$route.name === 'index' && menus[$route.name]")
        v-list-item-group(v-model="indexActive" @change="navChange")
          v-list-item(v-for="(item, i) in menus[$route.name].list" :key="item.gameTagId")
            v-list-item-content
              v-list-item-title(v-text="item.tagName")
      v-list(v-else-if="menus[$route.name]")
        v-list-item 个人首页
        v-list-group(v-for="(group, i) in menus[$route.name].list"
        v-model="indexActive" :key="group.groupId")
          template(v-slot:activator)
            v-list-item-content
              v-list-item-title(v-text="group.groupName")
          v-list-item(v-for="(channel, i) in group.group" :key="i")
            v-list-item-content(v-text="channel.channelName")
    v-app-bar(app :clipped-left="$vuetify.breakpoint.lgAndUp"
      scroll-target="#scrolling-techniques"
      fixed)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
      v-toolbar-title.select-none
        img(src="https://www.nn.com/_nuxt/img/4105e51.png" width="110" alt="logo")
      v-spacer
      .inline-flex
        v-btn(icon)
          v-icon mdi-magnify
        v-btn(icon)
          SvgIcon(className="#iconlianhe161")
        v-btn(icon nuxt to="/sign/in")
          SvgIcon(className="#icontuichu")
      template(v-slot:extension)
        v-tabs(centered show-arrows v-if="servers.length")
          v-tabs-slider
          v-tab(v-for="server in servers" :key="server.serverId" :to="`/${server.serverTypeId === 1 ? 'person' : 'server'}/${server.serverId}`")
            v-avatar(size="32")
              img(:src="server.userUrlNn" alt="server.nickName")
            .ml-2 {{server.nickName}}
          v-tab(to="/" nuxt exact)
            SvgIcon(className="#iconmore1")
            .ml-2 更多社区
    v-main
      v-container#scrolling-techniques.overflow-y-auto(fluid)
        nuxt
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import LazyLocadView from '@/components/wc/LazyLoadView'
import PageHold from '@/components/container/PageHold'

export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      collapse: false,
      active: '',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
    }
  },
  components: {
    LazyLocadView,
    PageHold,
  },
  computed: {
    ...mapState(['menus']),
    ...mapState('channel', ['gameTags', 'servers']),
    indexActive: {
      get() {
        return this.menus[this.$route.name].active
      },
      set(val) {
        this.ACTIVE({ key: 'index', active: val })
      },
    },
  },
  methods: {
    ...mapActions('channel', ['serversAction']),
    ...mapMutations(['ACTIVE']),
    async init() {
      return new Promise(async (resolve) => {
        await this.serversAction()
        setTimeout(resolve, 6000)
      })
    },
    navChange() {
      if (this.$vuetify.breakpoint.md) {
        this.drawer = false
      }
    },
  },
}
</script>
