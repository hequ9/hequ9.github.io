// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{
    path: '~/components',
    pathPrefix: false,
  }],

  imports: {
    dirs: ['./apis'],
  },

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    // '@unocss/preset-rem-to-px',
  ],

  app: {
    head: {
      title: 'Aaron\'s homepage',
      meta: [
        { name: 'description', content: 'trying to break out of the ghetto was a day-to-day fight🙂' },
      ],
    },
    buildAssetsDir: '/static/',
    pageTransition: {
      name: 'page',
      mode: 'out-in', // default
    },
  },

  typescript: {
    shim: false,
  },

  vite: {
    envDir: './env',
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  compatibilityDate: '2025-02-15',
})