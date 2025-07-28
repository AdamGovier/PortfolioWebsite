<template>
  <IconButton :label="theme == 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'" :icon="themeIcon" @click="onChange" size="large" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import LocalStorage from '../../scripts/LocalStorage';
import { localStorageKeys, icons } from '../../constants';
import { type ColourTheme } from '../../models/Themeing';
import { computed } from 'vue';
import IconButton from './IconButton.vue';


const themeIcon = computed(() => {
  return theme.value === "dark" ? icons.sun : icons.moon;
});

const getTheme = () => {
  let selectedTheme: ColourTheme = LocalStorage.getItemAsString(localStorageKeys.theme) as ColourTheme;

  if (!import.meta.env.SSR && selectedTheme == null) {
    selectedTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark";
    LocalStorage.setItemAsString(localStorageKeys.theme, selectedTheme);
  }

  return selectedTheme;
}

const theme = ref<ColourTheme>(getTheme());

const onChange = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  LocalStorage.setItemAsString(localStorageKeys.theme, theme.value);
  document.querySelector("html")?.setAttribute("data-theme", theme.value);
}

onMounted(() => {
  if(theme.value) {
    document.querySelector("html")?.setAttribute("data-theme", theme.value);
  }
});
</script>