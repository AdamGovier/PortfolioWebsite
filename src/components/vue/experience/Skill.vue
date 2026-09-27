<template>
  <div>
    <div>
      <h1>{{ type }}</h1>
    </div>
    <div>
      <img :src="image?.src?.toString()" />
      <h1>{{ title }}</h1>
    </div>
    <div>
      <Star
        v-for="n in nGoldStars"
        type="Gold"
      />
      
      <Star
        v-for="n in nOtherStars"
        type="Other"
      />
      <span v-if="needsRefresher">
        <i></i>
      </span>
    </div>
  </div>
</template>



<script lang="ts" setup>
import { type ImageMetaData } from '../../../models/Helpers';
import Star from "../shared/Star.vue";

const props = defineProps<{
  type: "Language" | "Markup" | "Backend Runtime" | "Styling" | "Servers" | "Database" | "Mobile Apps" | "Framework" | "UI Design" | "Cloud" | "Debugging" | "Source Control",
  image?: ImageMetaData,
  title: string,
  nGoldStars?: number,
  nOtherStars?: number,
  needsRefresher?: boolean
}>();
</script>
