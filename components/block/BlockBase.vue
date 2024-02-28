<script setup lang="ts">
const props = defineProps<{
  badge: string
}>()
</script>

<template>
  <div class="border border-gray-800 p-10 rounded-xl relative">
    <UBadge v-if="badge" variant="soft" class="absolute top-4 right-4">{{ badge }}</UBadge>
    <slot />
  </div>
</template>
