<template>
  <div class="article-highlight-container">
    <div class="content">
      <div class="header-row">
        <div class="header-left">
          <div class="thumbnail" :style="`background-image: url('${organisationImage.src.toString()}')`"></div>
          <div class="role-info">
            <strong>{{ organisationName }}</strong>
            <span class="sub-text">{{ roleName }}</span>
          </div>
        </div>
        <span class="period"><strong>{{ period }}</strong></span>
      </div>

      <div class="intro">
        <slot></slot>
      </div>

      <div class="button-wrapper" v-if="article">
        <a :href="article">View Related Article</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type ImageMetaData } from '../../models/Helpers';

const props = defineProps<{
  organisationName: string,
  organisationImage: ImageMetaData,
  roleName: string,
  period: string,
  article?: string
}>();
</script>

<style scoped>
.content {
  padding: 25px 25px;
  width: 100%;
}

.article-highlight-container {
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 50px;
  border-top: 2px dashed var(--sub-text-colour);
  border-bottom: 2px dashed var(--sub-text-colour);
  padding-top: 2.5%;
  padding-bottom: 2.5%;
}

.thumbnail {
  margin-right: 15px;
  border-radius: 10px;
  height: 100%;
  aspect-ratio: 1/1;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  background-image: url('https://media.licdn.com/dms/image/v2/C4D0BAQGNwzX02lp_kw/company-logo_200_200/company-logo_200_200/0/1630515340986/dev4_online_logo?e=2147483647&v=beta&t=wMeWFWGJ4j6wO56qUjNfbcFz6AI-4e1KzON8eWANYK8');
}

/* New utility classes extracted from former inline styles */
.header-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.header-left {
  display: flex;
  width: 100%;
}

.role-info {
  display: flex;
  flex-direction: column;
}

.period {
  white-space: nowrap;
}

.intro {
  margin-top: var(--margin-medium);
}

.button-wrapper {
  display: flex;
  justify-self: flex-end;
}

.sub-text {
  color: var(--sub-text-colour);
}
</style>

