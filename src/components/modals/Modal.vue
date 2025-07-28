<template>
  <div class="modal hidden" :id="id">
    <div class="topbar">
      <span>{{ title }}</span>

      <IconButton icon="fa-solid fa-xmark" size="large"></IconButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconButton from "../inputs/IconButton.vue";

const props = defineProps<{
  title: string;
  id: string;
}>();
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}

.modal .topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--accent);
  padding: 10px 15px;
}

.modal h1 {
  margin-block: 0;
}
</style>