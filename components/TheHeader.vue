<script setup lang="ts">
const { $appState } = useNuxtApp()
</script>

<template>
  <header 
    class="border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 z-50 w-full bg-gray-950"
  >
    <UContainer class="flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="text-2xl font-bold flex-1">{{ $appState.settings?.siteName }}</NuxtLink>
      </div>

      <div>
        <UHorizontalNavigation 
          v-if="$appState.navigation" 
          :links="$appState.navigation" 
          class="justify-end" 
        />
      </div>
    </UContainer>
  </header>
</template>