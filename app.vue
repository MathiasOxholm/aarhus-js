<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: string | undefined) => {
    return titleChunk ? `${titleChunk} | Aarhus JS` : 'Aarhus JS';
  },
  bodyAttrs: {
    class: 'dark'
  }
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply bg-gray-950;
}

.page-enter-active, 
.page-leave-active {
  transition: all 200ms;
}

.page-enter-from, 
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>