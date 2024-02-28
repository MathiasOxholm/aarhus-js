<script setup lang="ts">
import type { EnterspeedBlock } from '@/types/enterspeed';

defineProps<{
  blocks: EnterspeedBlock[]
}>()
</script>

<template>
  <div class="flex flex-col gap-10">
    <BlockItem
      v-for="(block, index) in blocks"
      :key="`block-${index}`"
      :block="block"
    />
  </div>
</template>