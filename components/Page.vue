<script setup lang="ts">
const props = defineProps<{
  title?: string
  description?: string
  isSubPage?: boolean
  badge: string
}>()

useHead({
  title: props.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: props.description,
    },
  ]
})
</script>

<template>
  <div>
    <UContainer :class="{ 'py-40' : !isSubPage }">
      <div class="flex justify-between">
        <div class="mb-10">
          <h1 
            v-if="title" 
            class="font-bold text-gray-900 dark:text-white tracking-tight"
            :class="[
              isSubPage ? 'text-2xl sm:text-4xl' : 'text-3xl sm:text-6xl'
            ]"
          >
            {{ title }}
          </h1>

          <p v-if="description" class="mt-4 text-lg tracking-tight text-gray-600 dark:text-gray-300">
            {{ description }}
          </p>
        </div>

        <div>
          <UBadge v-if="badge" variant="soft">{{ badge }}</UBadge>
        </div>
      </div>

      <div>
        <slot />
      </div>
    </UContainer>
  </div>
</template>
