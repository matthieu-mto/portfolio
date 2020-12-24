import i18n from './config/i18n'

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Matthieu TOUSSAINT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Matthieu TOUSSAINT | Fullstack web developer - Portfolio'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  router: {
    linkActiveClass: 'link__active',
    linkExactActiveClass: 'link__exact-active'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/reset.css'],
  styleResources: {
    scss: ['@/assets/scss/index.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/burger-menu', ssr: false },
    '@/plugins/vue-lazyload'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', { id: 'UA-162795664-1' }],
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English 🇬🇧'
          },
          {
            code: 'fr',
            iso: 'fr-FR',
            name: 'Français 🇫🇷'
          }
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true
        },
        vueI18n: i18n
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
