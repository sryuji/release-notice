/* eslint-disable typescript/no-var-requires */
const customRoutes = require('./vue/routes')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | 時間泥棒の誘惑',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    './assets/stylesheets/config/_bulma.scss',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/vue/main.ts'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { css: false, materialDesignIcons: false }],
    '~/modules/typescript.js',
  ],

  router: {
    middleware: ['user-agent'],
    extendRoutes(routes, resolve) {
      customRoutes.forEach(r => {
        const route = Object.assign({}, r, { component: resolve(__dirname, r.component) })
        routes.push(route)
      })
    },
  },

  vue: {
    config: {
      productionTip: process.env.NODE_ENV !== 'production',
      devtools: process.env.NODE_ENV !== 'production',
      performance: process.env.NODE_ENV !== 'production',
    },
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
