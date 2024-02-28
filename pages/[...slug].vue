<script setup lang="ts">
import type { EnterspeedContentPage } from '~/types/enterspeed';

definePageMeta({
  key: route => route.fullPath
})

const home = resolveComponent('LazyViewsHome');
const contentPage = resolveComponent('LazyViewsContentPage');
const productList = resolveComponent('LazyViewsProductList');
const productPage = resolveComponent('LazyViewsProductPage');

const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
  return useEnterSpeed<EnterspeedContentPage>({
    url: route.path
  })
})

const viewTemplate = computed(() => {
  let view = null
  const type = data.value?.route?.type

  if (!type) {
    return null
  }

  switch (type) {
    case 'home':
      view = home
      break
    case 'contentPage':
      view = contentPage
      break
    case 'products':
      view = productList
      break
    case 'product':
      view = productPage
      break
    default:
      view = contentPage
  }

  return view
})
</script>

<template>
  <Component
    :is="viewTemplate"
    v-if="viewTemplate"
    :data="data?.route"
  />
</template>