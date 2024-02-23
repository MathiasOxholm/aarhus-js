import type { AppState } from "@/types/app"
import type { EnterspeedNavigationResponse } from "@/types/enterspeed"

export default defineNuxtPlugin({
  name: 'initialize-plugin',
  parallel: true,
  async setup() {
    const appState = useState<AppState>('app', () => ref({
      navigation: null,
    }))

    const { data, error } = await useAsyncData('root', () => {
      return useEnterSpeed<EnterspeedNavigationResponse>({
        handles: ['navigation', 'translations', 'settings']
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
    }

    return {
      provide: {
        appState
      }
    }
  }
})