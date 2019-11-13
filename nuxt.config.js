const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Josh Stuible',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/_base.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazyload'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-rfg-icon',
    '@nuxtjs/manifest',
    ['@nuxtjs/axios', {baseURL: 'https://api.stuible.com'}],
    // '@dinamomx/nuxtent',
    // 'nuxt-netlify-cms',
    '@nuxtjs/style-resources',
    "nuxt-svg",
    // ['@reallifedigital/nuxt-image-loader-module', {
    //   imagesBaseDir: 'static/images',
    //   imageStyles: {
    //     load: { actions: ['scale|10', 'quality|10'] },
    //     thumb: { actions: ['scale|320', 'quality|100'] },
    //     small: { actions: ['scale|512', 'quality|100'] },
    //     medium: { actions: ['scale|756', 'quality|100'] },
    //     large: { actions: ['scale|1080', 'quality|100'] },
    //   },
    //   // Optional responsive style profiles:
    //   responsiveStyles: {
    //     medium: {
    //       srcset: 'load 10w, medium 756w',
    //       sizes: '100vw',
    //     },
    //   },
    //   forceGenerateImages: {
    //     // imageStyle: globPattern
    //     load: '**/*',
    //     thumb: '**/*',
    //     small: '**/*',
    //     medium: '**/*',
    //     large: '**/*'
    //   }
    // }]
  ],

  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'static/logo.svg',
    // rfg: <faviconDescription.json from realfavicongenerator.net>
  },
  styleResources: {
    scss: [
      './assets/scss/variables.scss',
      './assets/scss/breakpoints.scss'
    ],
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // config.module.rules.push({
      //   test: /\.svg$/,
      //   loader: 'vue-svg-loader',
      // });


      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
