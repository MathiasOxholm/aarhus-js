<script setup lang="ts">
defineProps<{
  code: unknown
}>()
</script>

<template>
  <pre class="dark:bg-white/10 rounded-lg p-8 overflow-scroll max-h-[80vh]">
    {{ code }}
  </pre>
</template>