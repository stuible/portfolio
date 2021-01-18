import axios from 'axios'

export default {
  target: 'static',

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
      { hid: 'description', name: 'description', content: "My personal portfolio website" },
      { name: 'msapplication-TileColor', content: '#ffffff'},
      { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png'},
      { name: 'msapplication-config', content: '/favicons/browserconfig.xml'},
      { name: 'theme-color', content: '#ffffff'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "apple-touch-icon", type: "image/x-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" },
      { rel: "icon", type: "image/x-icon", sizes: "32x32", href: "/favicons/favicon-32x32.png" },
      { rel: "icon", type: "image/x-icon", sizes: "16x16", href: "/favicons/favicon-16x16.png" },
      { rel: "manifest", type: "image/x-icon", href: "/favicons/site.webmanifest" },
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
    ['@nuxtjs/axios', { baseURL: 'https://api.stuible.com' }],
    '@nuxtjs/style-resources',
    "@nuxtjs/svg",
  ],

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
  },
  generate: {
    interval: 500,
    routes() {
      return axios.get('https://api.stuible.com/posts')
        .then((res) => {
          return res.data.data.map((post) => {
            return '/' + post.slug
          })
        })
        .catch(() => {
          console.error("MESSAGE FROM JOSH: FAILED TO REACH STUIBLE API")
          return []
        })
    }
  }
}
