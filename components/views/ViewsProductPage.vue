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
      :is-sub-page="true"
      :badge="data.type"
    >
    <p>{{ data.price }} {{ data.currency.defaultCurrency }}</p>
  </Page>
</template>