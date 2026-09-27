<template>
  <div v-if="attachments && attachments.length">
    <h4>Attachments</h4>
    <div v-for="attachment in attachments" :key="attachment.href">
      <a :href="attachment.href" target="_blank" rel="noopener noreferrer" download>
        <i v-if="attachment.contentType == 'application/pdf'"></i>
        <i v-if="attachment.contentType == 'audio/mpeg'"></i>

        <span>{{ attachment.displayName }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Attachment } from '../../types/collection';

const props = defineProps<{
  attachments?: Attachment[],
}>();
</script>
