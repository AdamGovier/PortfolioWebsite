<template>
  <div>
    <div>
      <div v-for="tag in tags" @click.native="toggleTagFilter(tag)">
        <span>#{{tag}}</span>
      </div>
    </div>

    <div>
      <div>
          <input v-model="searchString" name="Search" type="text" placeholder="Search..."/>
      </div>
    </div>
  </div>
  <div>
    <h4 v-if="filteredPosts == null || !filteredPosts.length">
      No posts match the selected filters.
    </h4>
    <div v-for="post in filteredPosts">
      <BlogCard 
        :title="post?.title" 
        :tags="post?.tags" 
        :date="post?.pubDate" 
        :author="post?.author" 
        :imageURL="post?.image.url" 
        :slug="post?.slug" 
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import BlogCard from './BlogCard.vue';
import { type BlogPostMetadata } from '../../../types/collection.ts';
import FuzzySearch from 'fuzzy-search';

// TODO: As blog grows, switch to an astro API project to server paginate posts. 
const props = defineProps<{
  posts: BlogPostMetadata[]
}>();

const tags = computed(() => Array.from(new Set(props.posts.flatMap(post => post.tags))));

// Filters
const selectedTags = ref<string[]>([]);
const searchString = ref<string>("");

const filteredPosts = computed(() => {
  const preFiltered = props.posts.filter(post => {    
    if (selectedTags.value.length === 0)  {
      // If no tags are selected, show all posts.
      return true;
    } else {
      return post.tags.some(tag => selectedTags.value.includes(tag));
    }
  });

  if(!searchString.value) return preFiltered;

  const searcher = new FuzzySearch(preFiltered, ['title', 'tags'], {
    caseSensitive: false,
  });

  return searcher.search(searchString.value);
});

function toggleTagFilter(tag: string) {
  console.log(tag)
  if(selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t != tag);
  } else {
    selectedTags.value.push(tag);
  }
}
</script>
