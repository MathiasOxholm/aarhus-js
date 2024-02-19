<script setup lang="ts">
import type { EnterspeedContentPage } from '@/types/enterspeed';

defineProps<{
  data: EnterspeedContentPage['route']
}>()
</script>

<template>
  <Page 
      v-if="data" 
      :title="data.headline" 
      :is-sub-page="true"
      :badge="data.type"
    >

    <BlockList v-if="data.blocks?.length" :blocks="data.blocks" class="mb-10" />

    <div class="grid grid-cols-3 gap-4 mb-10">
      <UCard v-for="child in data.children" :key="child.headline">
        <h2 class="text-xl font-bold tracking-tight mb-4">{{ child.headline }}</h2>

        <UButton :to="child.url">View page</UButton>
      </UCard>
    </div>

    <Code v-if="data" :code="data" />
  </Page>
</template>