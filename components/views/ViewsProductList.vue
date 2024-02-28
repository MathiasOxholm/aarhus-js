<script setup lang="ts">
import type { EnterspeedProductList } from '@/types/enterspeed';

defineProps<{
  data: EnterspeedProductList['route']
}>()
</script>

<template>
  <Page 
      v-if="data" 
      :title="data.headline" 
      :is-sub-page="false"
      :badge="data.type"
    >
    <ul class="grid grid-cols-3 gap-6">
      <li v-for="product in data.products" :key="product.name">
        <UCard>
          <template #header>
            <h2 class="text-xl font-bold tracking-tight">{{ product.name }}</h2>
          </template>

          <p>{{ product.description }}</p>

          <template #footer>
            <UButton :to="`/products/${product.sku}`">View Product</UButton>
          </template>
        </UCard>
      </li>
    </ul>

    <Code :code="data" class="mt-20" />
  </Page>
</template>