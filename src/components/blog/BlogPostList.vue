<template>
  <div class="spacer d-flex justify-between align-center big">
    <div class="blog-card-tags">
      <div :class="['blog-card-tag', 'tag-filter', selectedTags.includes(tag) ? 'tag-filter-active' : '']" v-for="tag in tags" @click.native="toggleTagFilter(tag)">
        <span class="text-small">#{{tag}}</span>
      </div>
    </div>

    <div class="blog-card-tags-search">
      <div class="inputContainer">
          <input v-model="searchString" name="Search" type="text" placeholder="Search..."/>
      </div>
    </div>
  </div>
  <div class="blog-list-grid spacer-small">
    <h4 v-if="filteredPosts == null || !filteredPosts.length">
      No posts match the selected filters.
    </h4>
    <div class="blog-list-item" v-for="post in filteredPosts">
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
import { computed, defineProps, ref } from 'vue';
import BlogCard from './BlogCard.vue';
import { type BlogPostMetadata } from '../../types/collection.ts';
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
      // If no filter is on remove pinned posts.
      if(!searchString.value && post.pinned) return false;

      // If no tags are selected, show all non-pinned posts.
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

<style scoped>
.blog-list-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: var(--margin-medium);
  grid-row-gap: var(--margin-medium);
}

@media (max-width: 1400px) {
  .blog-list-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.blog-list-item {
  min-height: 600px;
}

.tag-filter {
  cursor: pointer;
}

.tag-filter:hover {
  scale: 1.05;
}

.tag-filter-active {
  background-color: purple;
}
</style>