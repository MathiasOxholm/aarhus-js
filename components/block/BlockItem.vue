<script setup lang="ts">
import type { EnterspeedBlock } from '@/types/enterspeed';

const props = defineProps<{
  block: EnterspeedBlock
}>()

const blockText = resolveComponent('LazyBlockText')
const blockImage = resolveComponent('LazyBlockImage')

const viewTemplate = computed(() => {
  let view = null
  const type = props.block.alias

  if (!type) {
    console.error('Block type is missing')
    return null
  }

  switch (type) {
    case 'blockText':
      view = blockText
      break
    case 'blockImage':
      view = blockImage
      break
    default:
      view = null
  }

  return view
})
</script>

<template>
  <Component
    :is="viewTemplate"
    v-if="viewTemplate"
    :block="block"
  />
</template>
