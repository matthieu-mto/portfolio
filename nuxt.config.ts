// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Fully prerendered: the whole site is static HTML, deployable anywhere.
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html', '/robots.txt', '/sitemap.xml'],
    },
  },

  css: ['~/assets/css/design-system.css', '~/assets/css/app.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f3f2f2' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        // Self-hosted Archivo — preloaded because it carries every heading.
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/archivo-latin.woff2',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
})
