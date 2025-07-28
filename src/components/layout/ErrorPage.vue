<template>
  <div class="flex justify-around items-center pt-12">
    <div>
        <h1>Ooops! <strong>{{ code }}</strong>!</h1>

        <p>{{ message }}</p>
    </div>

    <div class="error-img" :aria-label="imageCaption" :style="`background-image: url('${image?.src}');`"></div>
  </div>


</template>

<script lang="ts" setup>
const { code, message, image } = defineProps<{
  code: number,
  message: string,
  image?: ImageMetadata,
  imageCaption? : string
}>();
</script>

<style>
.error-img {
  height: 50dvh;
  aspect-ratio: 1/1;
  border-radius: 35px;
  background-size: cover;
  background-position: center;
}
</style>