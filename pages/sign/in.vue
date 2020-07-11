<template lang="pug">
v-form#sign-in(v-model="valid")
  .h-full
    .body-1 登录nn
    v-text-field(v-model="sign.username" label="手机号/nn号/邮箱号" required)
    v-text-field(v-model="sign.verify" label="验证码" required)
    v-btn(block @click="login") 登录
</template>
<script>
export default {
  name: 'SignIn',
  layout: 'sign',
  data() {
    return {
      valid: false,
      sign: {
        username: '',
        verify: ''
      }
    }
  },
  methods: {
    login() {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
#sign-in {
  width: 300px;
}
</style>
