<template>
  <Button theme="fake-anchor" :class="`${buttonSizeClass}`">
    <i :class="`${icon} mr-1 text-colour text-colour-hover`"></i> {{label}}
  </Button>
</template>

<script lang="ts" setup>
import { type Size } from '../../models/Themeing';
import Button from "./Button.vue";
import { computed } from 'vue';

const props = defineProps<{
  icon: string,
  size: Size,
  label?: string
}>();

const buttonSizeClass = computed(() => {
  switch (props.size) {
    case "large":
      return "text-large"
    case "regular":
      return "text-regular"
    case "small":
      return "text-small"
  }
});
</script>