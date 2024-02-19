<script setup lang="ts">
import type { EnterspeedBlock } from '@/types/enterspeed';

defineProps<{
  blocks: EnterspeedBlock[]
}>()
</script>

<template>
  <div>
    <BlockItem
      v-for="(block, index) in blocks"
      :key="`block-${index}`"
      :block="block"
    />
  </div>
</template>