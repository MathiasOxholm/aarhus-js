import type { AppState } from "@/types/app"
import type { EnterspeedNavigationResponse } from "@/types/enterspeed"

export default defineNuxtPlugin({
  name: 'initialize-plugin',
  parallel: true,
  async setup() {
    const appState = useState<AppState>('app', () => ref({
      navigation: null,
      settings: null,
      currency: null
    }))

    const { data, error } = await useAsyncData('root', () => {
      return useEnterSpeed<EnterspeedNavigationResponse>({
        handles: ['navigation', 'translations', 'settings', 'currency']
      })
    })


    if (error.value) {
      console.error(error.value)

      throw createError({
        message: 'Failed to fetch Enterspeed settings' + error.value.message,
        statusCode: 500
      })
    }

    if (data.value) {
      appState.value.navigation = data.value.views.navigation.navigationItems
      appState.value.settings = data.value.views.settings
      appState.value.currency = data.value.views.currency
    }

    return {
      provide: {
        appState
      }
    }
  }
})