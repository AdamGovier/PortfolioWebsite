<template>
  <a class="card-anchor-wrapper" :href="uri">
    <div class="blog-card" :style="`background-image: url('${imageURL}');`">
      <div class="blog-card-tags-container big">
        <div class="blog-card-tags">
          <div class="blog-card-tag" v-for="tag in tags">
            <span class="text-small">#{{tag}}</span>
          </div>
        </div>
      </div>

    </div>

    <div class="blog-card-content">
      <h1 class="text-large">{{title}}</h1>
      <span class="sub-text">{{dateParsed}} | {{author}}</span>
    </div>
  </a>
</template>

<style>
  .blog-card {
    height: 100%;
    width: 100%;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    transition: all 0.1s linear;

  }

  .blog-card-content {
    background-color: rgba(0, 0, 0, 0.95);
    padding: var(--margin-small) 20px;
  }

  .card-anchor-wrapper {
    border-bottom: 5px rgba(0, 0, 0, 0.95) solid;
  }
  .card-anchor-wrapper:hover {
    border-bottom: 5px var(--accent) solid;
  }
  
  .blog-card-tags-container {
    margin-left: var(--margin-small);
  }
</style>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';

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