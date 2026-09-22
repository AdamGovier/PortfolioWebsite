<template>
    <i class="fa-solid fa-star" :style="`color: ${colour};`"></i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  type?: "Gold" | "Other"
}>(), {
  type: "Gold"
});

const colour = computed(() => {
  return props.type === "Gold" ? "gold" : "purple";
});
</script>