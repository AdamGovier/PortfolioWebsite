<template>
  <div v-if="sources && sources.length" class="sources-wrapper">
    <h4 class="sources-title">Referenced Content</h4>
    <div v-for="source in sources" :key="source.href">
      <a :href="source.href" target="_blank" rel="noopener noreferrer" class="source">
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
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

<style>
.sources-wrapper {
  margin-top: 1.5rem;
  padding: 1em;
  border: 1px solid var(--surface-colour);
  border-radius: 8px;
}

.sources-wrapper .source {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: var(--margin-small);
  margin-bottom: 0.5rem;
  padding: 2%;
  background-color: var(--surface-colour);
  text-align: right;
}

.sources-wrapper span {
  font-size: 16px;
}

.sources-wrapper i {
  color: var(--surface-text-colour);
  font-size: 32px;
}
</style>
