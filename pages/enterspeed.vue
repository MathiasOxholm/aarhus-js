<script setup lang="ts">
const { $appState } = useNuxtApp()
</script>

<template>
  <div>
    <Page 
      title="Enterspeed"
      description="Simplify your frontend data orchestration."
      badge="Parent Page"
      >

      <div class="grid grid-cols-5 gap-8">
        <UVerticalNavigation
          class="col-span-1"
          v-if="$appState?.navigation" 
          :links="$appState.navigation" 
        />
        
        <div class="col-span-4">
          <NuxtPage />
        </div>
      </div>
      
    </Page>
  </div>
</template>