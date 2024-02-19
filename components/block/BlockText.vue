<script setup lang="ts">
import type { EnterspeedBlock } from '~/types/enterspeed';

type BlockText = EnterspeedBlock & {
  text: string
}

defineProps<{
  block: BlockText
}>()
</script>

<template>
  <div class="block-text" v-html="block.text" />
</template>

<style scoped lang="postcss">
.block-text {
  @apply text-lg leading-relaxed;

  :deep(p) {
    @apply mb-4;
  }
}
</style>
