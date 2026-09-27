<template>
  <a
    href="/"
  >About</a>
  <a
    href="/experience"
  >Experience</a>
  <a
    href="/blog"
  >Blog</a>
  <a
    href="/contact"
  >Contact</a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentUrl = ref();

onMounted(() => {
  if (!import.meta.env.SSR) {
    currentUrl.value = window.location.pathname
  } else {
    return false;
  }
})

function isActive(href) {
  if(href == "/") return currentUrl?.value == href;

  return currentUrl?.value?.includes(href);
}
</script>
