<template lang="pug">
v-app(dark)
  v-navigation-drawer(v-model="drawer" clipped fixed app)
    v-list
      v-list-item(v-for="(item, i) in items" :key="i" :to="item.to" router exact)
        v-list-item-action
          v-icon {{item.icon}}
        v-list-item-content
          v-list-item-title(v-text="item.title")
  v-app-bar(app :clipped-left="$vuetify.breakpoint.lgAndUp" elevate-on-scroll absolute collapse-on-scroll prominent)
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
      v-tabs(align-with-title v-if="gameTags.length")
        v-tab(v-for="tag in gameTags" :key="tag.gameTagId" v-text="tag.tagName")
  v-main
    v-container(fluid)
      nuxt
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      drawer: true,
      fixed: false,
      collapse: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ]
    }
  },
  computed: {
    ...mapState('channel', ['gameTags'])
  }
}
</script>
