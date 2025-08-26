<template>
  <Card :thumbnail="thumbnail" :title="title" :href="href">
    <template #body>
      <div class="card-project-body">
        <slot></slot>

        <p class="sub-text-2">
          <i>{{ status }}</i>
        </p>
      </div>
    </template>

    <template #hover>
      <h5>Click to View Article</h5>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { type ImageMetaData } from '../../models/Helpers';
import Card from "../shared/Card.vue";

const props = defineProps<{
  thumbnail: ImageMetaData,
  title: string,
  status: string,
  href?: string
}>();
</script>

<style>
.card-project-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-grow: 1;
}
</style>