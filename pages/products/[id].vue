<script setup lang="ts">
import type { EnterspeedProductView } from '@/types/enterspeed';

const route = useRoute();
const id = route.params.id?.toString();
const { $appState } = useNuxtApp();

const { data } = await useAsyncData(route.path, () => {
  return useEnterSpeed<EnterspeedProductView>({
    handles: [id]
  })
}, {
  transform: (data) => {
    return data?.views[id]
  }
})
</script>

<template>
  <Page 
      v-if="data" 
      :title="data.name" 
      :description="data.description"
      :is-sub-page="false"
      :badge="data.type"
    >
    <div class="text-xl font-bold">
      <p>Price: {{ data.price }} {{ $appState.currency?.defaultCurrency }}</p>
      <p>Sku: {{ data.sku }}</p>
    </div>

    <BlockList 
      v-if="data.content[0].blocks?.length" 
      :blocks="data.content[0].blocks" 
      class="mt-10" 
    />

    <section class="mt-20">
      <Code :code="data" />
    </section>
  </Page>
</template>