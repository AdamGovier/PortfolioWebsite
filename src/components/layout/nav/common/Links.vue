<template>
  <a
    href="/"
    :class="{ active: isActive('/') }"
  >About</a>
  <a
    href="/experience"
    :class="{ active: isActive('/experience') }"
  >Experience</a>
  <a
    href="/blog"
    :class="{ active: isActive('/blog') }"
  >Blog</a>
  <a
    href="/contact"
    :class="{ active: isActive('/contact') }"
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

<style scoped>
a.active {
  color: var(--accent);
  cursor: pointer;
}

@media (max-width: 550px) {
  a {
    margin: 15px 0;
    font-size: 36px;
  }

  a:nth-of-type(1) {
    margin-top: 0;
    text-underline-offset: 18px;
  }
}
</style>