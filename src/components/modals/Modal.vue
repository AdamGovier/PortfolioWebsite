<template>
  <div :id="id">
    <div>
      <span>{{ title }}</span>

      <IconButton icon="fa-solid fa-xmark" size="large"></IconButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconButton from "../inputs/IconButton.vue";

const props = defineProps<{
  title: string;
  id: string;
}>();
</script>
