<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    language?: string;
    code: unknown
  }>(),
    {
      language: 'json'
  }
);

const languageClass = computed(() => {
  return `language-${props.language}`
});
</script>

<template>
  <pre>
    <code class="dark:bg-white/10 rounded-lg p-8 overflow-scroll max-h-[80vh]" :class="languageClass">
      {{ code }}
    </code>
  </pre>
</template>
