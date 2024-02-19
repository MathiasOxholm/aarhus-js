<script setup lang="ts">
import type { EnterspeedContentPage } from '~/types/enterspeed';

useHead({
  title: 'Frontend Data Orchestration',
})

const { data } = await useAsyncData('enterspeed-home', () => {
  return useEnterSpeed<EnterspeedContentPage>({
    url: '/'
  })
})
</script>

<template>
  <div>
    <div v-if="data" class="h-screen flex items-center pt-12">
      <UContainer class="text-center">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          {{ data.route?.hero?.header }}
        </h1>

        <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
          {{ data.route?.hero?.description }}
        </p>

        <UButton 
          to="https://www.enterspeed.com" 
          class="mt-10"
          size="xl"
          icon="i-heroicons-fire"
          :external="true"
          target="_blank"
        >
          Visit Enterspeed
        </UButton>
      </UContainer>
    </div>

    <UContainer class="py-20">
      <Code :code="data" />
    </UContainer>
  </div>
</template>
