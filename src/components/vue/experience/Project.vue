<template>
  <Card :thumbnail="thumbnail" :title="title" :href="href">
    <template #body>
      <div>
        <slot></slot>

        <p>
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
import { type ImageMetaData } from '../../../models/Helpers';
import Card from "../shared/Card.vue";

const props = defineProps<{
  thumbnail: ImageMetaData,
  title: string,
  status: string,
  href?: string
}>();
</script>
