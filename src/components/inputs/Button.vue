<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  theme: "fake-anchor" | "primary" | "secondary",
  class?: string
}>();
</script>
