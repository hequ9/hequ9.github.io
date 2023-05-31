// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  modules: ['@unocss/nuxt', '@unocss/preset-rem-to-px'],
  vite: {
    envDir: './env',
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in', // default
    },
  },
})
