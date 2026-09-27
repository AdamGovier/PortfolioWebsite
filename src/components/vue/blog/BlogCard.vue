<template>
  <a :href="uri">
    <div>
      <div>
        <div>
          <div v-for="tag in tags">
            <span>#{{tag}}</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h1>{{title}}</h1>
      <span>{{dateParsed}} | {{author}}</span>
    </div>
  </a>
</template>



<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  title?: string;
  tags?: string[];
  date?: Date;
  author?: string;
  imageURL?: string;
  slug?: string;
}>();

const dateParsed = computed(() => {
  if(props.date == null) return;

  return props.date.toLocaleDateString('en-GB', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
});

const uri = computed(() => {
  if(props.date == null) return;

  return `/blog/${props.date.getFullYear()}/${props.slug}`;
});
</script>
