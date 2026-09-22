<template>
  <div class="spacer-small">
    <p class="text-small">
      <Star
        v-for="n in nStars"
        :type="type"
      />
       - 
      {{ explanation }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import Star from "../shared/Star.vue";

const props = withDefaults(defineProps<{
  type?: "Gold" | "Other",
  explanation: string,
  nStars: number
}>(), {
  type: "Gold"
});


</script>