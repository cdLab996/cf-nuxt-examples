// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },

  devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare-pages',
    experimental: {
      wasm: true,
      database: true,
    },
    database: {
      default: {
        connector: 'cloudflare-d1',
        options: {
          bindingName: 'DB',
        },
      },
    },
  },

  modules: ["nitro-cloudflare-dev"]
})
