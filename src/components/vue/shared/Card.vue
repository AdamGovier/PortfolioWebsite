<template>
  <a :href="href">
    <div>
        <div v-if="$slots.hover">
          <slot name="hover"></slot>
        </div>
  
        <div>
  
        </div>
  
        <div>
          <h3>
            {{ title }}
          </h3>
          <slot name="body"></slot>
        </div>
    </div>
  </a>
</template>


<script setup lang="ts">
import { type ImageMetaData } from '../../../models/Helpers';

const props = defineProps<{
  thumbnail: ImageMetaData,
  title: string,
  href?: string
}>();

</script>
