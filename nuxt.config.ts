// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      enterspeedApiKey: process.env.NUXT_PUBLIC_ENTERSPEED_API_KEY,
      enterspeedApiBase: process.env.NUXT_PUBLIC_ENTERSPEED_API_BASE,
      frontendBaseUrl: process.env.NUXT_PUBLIC_FRONTEND_BASE_URL
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  }
})
