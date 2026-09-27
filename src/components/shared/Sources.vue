<template>
  <div v-if="sources && sources.length">
    <h4>Referenced Content</h4>
    <div v-for="source in sources" :key="source.href">
      <a :href="source.href" target="_blank" rel="noopener noreferrer">
        <i></i>
        <span>{{ source.displayName }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Source } from '../../types/collection';

defineProps<{
  sources?: Source[];
}>();
</script>
