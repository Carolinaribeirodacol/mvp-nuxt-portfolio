// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  ui: {
    colorMode: true
  },

  runtimeConfig: {
    public: {
      githubToken: process.env.NUXT_PUBLIC_GITHUB_TOKEN,
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [{
        name: 'keywords',
        content: 'nuxt portfolio, nuxt developer'
      }]
    }
  },
  site: {
    name: 'MVP Nuxt Portfolio',
    description: 'My Nuxt Portfolio',
    defaultLocale: 'pt-BR',
    lang: 'pt-BR',
    url: 'https://mvp-nuxt-course.netlify.app',
    keywords: 'vuejs, nuxt'
  },
  nitro: {
    preset: 'netlify',
    prerender: {
      routes: ['/']
    }
  }
})