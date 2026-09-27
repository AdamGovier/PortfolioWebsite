<template>
  <div>
    <div>
      <div>
        <div>
          <div></div>
          <div>
            <div></div>
            <div>
              <div>
                <h3>{{ organisationName }}</h3>
                <span>{{ roleName }}</span>
              </div>
              <span>{{ period }}</span>
            </div>
          </div>
        </div>
        <span>{{ period }}</span>
      </div>

      <div>
        <slot></slot>
      </div>

      <div v-if="article">
        <a :href="article">View Related Article</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type ImageMetaData } from '../../../models/Helpers';

const props = defineProps<{
  organisationName: string,
  organisationImage: ImageMetaData,
  roleName: string,
  period: string,
  article?: string
}>();
</script>
