<template>
  <div>
    <div>
        <h1>Ooops! <strong>{{ code }}</strong>!</h1>

        <p>{{ message }}</p>
    </div>

    <div :aria-label="imageCaption"></div>
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
