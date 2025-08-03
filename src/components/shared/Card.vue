<template>
  <div class="card">
      <div class="card-hover-view" v-if="$slots.hover">
        <slot name="hover"></slot>
      </div>

      <div class="card-thumbnail" :style="`background-image: url('${thumbnail.src.toString()}');`">

      </div>

      <div class="card-body">
        <h3 class="title" style="color: black;">
          {{ title }}
        </h3>
        <slot name="body"></slot>
      </div>
  </div>
</template>


<script setup lang="ts">
import { type ImageMetaData } from '../../models/Helpers';

const props = defineProps<{
  thumbnail: ImageMetaData,
  title: string
}>();

</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;

  transition: all 0.5s linear;
  align-items: stretch;
  scale: 0.95;
}

.card:hover {
  cursor: pointer;
  scale: 1;
}

.card p {
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 400;
}

.card-thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;

  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;

  border-top: 2px solid var(--accent-dark);
  border-radius: 5px;
}

.card-body {
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: 30px 20px;
}

.card-hover-view {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: var(--accent-dark);
  opacity: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.2s linear;
}

.card-hover-view:hover {
  opacity: 1;
}
</style>
