const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
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
  loading: { color: '#fff' },

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
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@dinamomx/nuxtent',
    'nuxt-netlify-cms',
    '@nuxtjs/style-resources',
    ['@reallifedigital/nuxt-image-loader-module', {
      imagesBaseDir: 'static/images',
      imageStyles: {
        thumb: { actions: ['scale|320', 'quality|100'] },
        small: { actions: ['scale|512', 'quality|100'] },
        medium: { actions: ['scale|756', 'quality|100'] },
        large: { actions: ['scale|1080', 'quality|100'] },
      },
      // Optional responsive style profiles:
      // responsiveStyles: {
      //   thumb: {
      //     srcset: 'small 160w, medium 320w, large 640w',
      //     sizes: '(min-width: 1280px) 100vw, 50vw',
      //   },
      // },
      forceGenerateImages: {
        // imageStyle: globPattern
        thumb: '**/*',
        small: '**/*',
        medium: '**/*',
        large: '**/*'
      }
    }]
  ],

  nuxtent: {
    content: [
      ["pages", {
        page: 'pages/_page',
        permalink: ':slug',
        generate: [
          // assets to generate static build
          'get',
          'getAll'
        ]
      }],
      ["posts", {
        page: 'posts/_post',
        permalink: ':slug',
        generate: [
          // assets to generate static build
          'get',
          'getAll'
        ]
      }]
    ]
  },
  netlifyCms: {
    adminPath: 'admin',
    adminTitle: 'Stuible Portfolio Manager'
  },

  /*
  ** Build configuration
  */
  build: {
    styleResources: {
      scss: './assets/scss/variables.scss'
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
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
