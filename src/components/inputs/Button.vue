<template>
  <button :class="['button', props.theme, props.class]">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  theme: "fake-anchor" | "primary" | "secondary",
  class?: string
}>();
</script>

<style>
.button {
  padding: 10px 20px;
  cursor: pointer;
}

.button.fake-anchor {
  background: none;
  color: var(--accent);
  border: none;
  padding: 0;
}

.button.fake-anchor:hover {
  color: var(--accent-dark);
}

.button.primary {
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: 4px;
}

.button.secondary {
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
}
</style>