<template>
  <Button theme="fake-anchor">
    <i></i> {{label}}
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