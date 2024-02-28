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
    },
    head: {
      bodyAttrs: {
        class: 'dark'
      },
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",
          type: "text/javascript"
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js",
          type: "text/javascript"
        }
      ],
      link: [
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/a11y-dark.min.css",
          rel: "stylesheet"
        }
      ]
    }
  }
})
