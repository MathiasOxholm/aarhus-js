<script setup lang="ts">
import type { EnterspeedBlock } from '~/types/enterspeed';

type BlockImage = EnterspeedBlock & {
  url: string
  altText: string
  alias: "blockImage"
}

defineProps<{
  block: BlockImage
}>()
</script>

<template>
  <BlockBase :badge="block.alias">
    <img :key="block.alias" src="https://picsum.photos/900/400" :alt="block.altText" class="w-full object-cover mt-8 rounded-xl" />
    <p class="mt-8 text-xl font-bold">{{ block.altText }}</p>
  </BlockBase>
</template>

