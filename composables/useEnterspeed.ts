import type { UseEnterspeedInput } from '@/types/enterspeed';

/**
 * Composable for fetching data from Enterspeed
*/
export async function useEnterSpeed<T>(input: UseEnterspeedInput) {
  const { enterspeedApiBase, enterspeedApiKey } = useRuntimeConfig().public;
  const enterspeedSearchParams = new URLSearchParams()

  if (!input.url && !input.handles?.length) {
    throw showError({
      message: 'You must provide either a url or handles to fetch data from Enterspeed'
    })
  }

  if (input.url) {
    enterspeedSearchParams.set('url', input.url)
  }

  if (input.handles?.length) {
    input.handles.forEach((handle) => {
      enterspeedSearchParams.append('handle', handle)
    })
  }

  const path = `?${enterspeedSearchParams.toString()}`

  return await $fetch<T>(path, {
    method: 'GET',
    baseURL: enterspeedApiBase,
    headers: {
      'X-Api-Key': enterspeedApiKey
    }
  });
}
