<template>
  <div class="article-highlight-container">
    <div class="content">
      <div class="header-row">
        <div class="header-left">
          <div class="thumbnail big" :style="`background-image: url('${organisationImage.src.toString()}')`"></div>
          <div class="header-left-sub-container">
            <div class="thumbnail small" :style="`background-image: url('${organisationImage.src.toString()}')`"></div>
            <div>
              <div class="role-info text-large">
                <h3 class="text-extra-large org-name">{{ organisationName }}</h3>
                <span class="text-regular sub-text role-name">{{ roleName }}</span>
              </div>
              <span class="period small text-regular">{{ period }}</span>
            </div>
          </div>
        </div>
        <span class="period big text-regular">{{ period }}</span>
      </div>

      <div class="intro text-regular">
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
}

.header-left {
  display: flex;
  flex: 1;
}


.role-info {
  display: flex;
  flex-direction: column;
  margin-left: calc(var(--margin-small) / 2);
}

.period {
  white-space: nowrap;
}

.intro {
  margin-top: calc(var(--margin-small) * 2);
}

.button-wrapper {
  display: flex;
  justify-self: flex-end;
}

@media (max-width: 720px) {
  .header-row {
    flex-direction: column;
  }

  .header-left {
    height: 100%;
    flex-direction: column;
  }

  .thumbnail {
    height: 55px;
  }

  .role-info {
    margin-left: 0;
  }

  .period {
    margin-top: calc(var(--margin-small) / 4);
    color: var(--sub-text-colour);
    font-size: 16px;
  }

  .content {
    padding: 25px 0;
    width: 100%;
  }

  .intro {
    margin-top: var(--margin-small);
    font-size: 16px;
  }

  .org-name {
    font-size: 18px;
    margin-block-end: calc(var(--margin-small) / 4);
  }

  .role-name {
    font-size: 16px;
  }

  .header-left-sub-container {
    display: flex;
    align-items: center;
  }
}
</style>

