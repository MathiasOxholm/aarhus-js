<script setup lang="ts">
import type { HorizontalNavigationLink } from '#ui/types';

const links: HorizontalNavigationLink[] = [ 
  {
    label: 'Spaghetti code',
    icon: 'i-heroicons-trash',
    to: '/spaghetti',
  }, 
  {
    label: 'Enterspeed',
    icon: 'i-heroicons-fire',
    to: '/enterspeed'
  }
]
</script>

<template>
  <header 
    class="border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 z-50 w-full bg-gray-950"
  >
    <UContainer class="flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="text-2xl font-bold flex-1">Aarhus JS</NuxtLink>
      </div>

      <div>
        <UHorizontalNavigation :links="links" class="justify-end" />
      </div>
    </UContainer>
  </header>
</template>