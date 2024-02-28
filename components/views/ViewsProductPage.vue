<script setup lang="ts">
import type { EnterspeedProduct } from '@/types/enterspeed';

defineProps<{
  data: EnterspeedProduct
}>()
</script>

<template>
  <Page 
      v-if="data" 
      :title="data.name" 
      :description="data.description"
      :is-sub-page="false"
      :badge="data.type"
    >
    <p>{{ data.price }} {{ data.currency?.defaultCurrency }}</p>
    <pre>{{ data }}</pre>
  </Page>
</template>