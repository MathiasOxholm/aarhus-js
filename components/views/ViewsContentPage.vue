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
    <Code v-if="data" :code="data" />
  </Page>
</template>