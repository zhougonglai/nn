<template lang="pug">
v-app(dark)
  v-main
    #sign.w-screen.h-screen.bg-cover.bg-center.flex.items-center.justify-center
      #box.bg-cover.bg-center.inline-flex.justify-end.p-16
        nuxt
</template>
<script>
export default {
  name: 'SignLayout'
}
</script>
<style lang="scss" scoped>
#sign {
  background-image: url('~assets/img/bg.png');
  #box {
    width: 915px;
    height: 542px;
    background-image: url('~assets/img/sign_bg.png');
  }
}
</style>
