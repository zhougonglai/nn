// import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '//at.alicdn.com/t/font_1825109_95q9b1tdfat.js'
      }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/styles/index.scss'],
  plugins: [
    '~/plugins/axios',
    {
      src: '~/plugins/wc',
      mode: 'client'
    }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss'
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv', '@nuxtjs/proxy'],
  axios: { proxy: true },
  proxy: {
    '/nchannel': {
      target: 'https://test-web01.nn.com',
      changeOrigin: true
    },
    '/api': {
      target: 'https://reqres.in'
    }
  },
  vuetify: {
    customVariables: ['~/styles/variables.scss'],
    theme: {
      dark: true
    }
  },
  build: {
    extend(config, ctx) {}
  }
}
