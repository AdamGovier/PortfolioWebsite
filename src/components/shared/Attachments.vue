<template>
  <div class="attachments-wrapper" v-if="attachments && attachments.length">
    <h4 class="attachments-title">Attachments</h4>
    <div v-for="attachment in attachments" :key="attachment.href">
      <a :href="attachment.href" target="_blank" rel="noopener noreferrer" class="attachment" download>
        <i class="fa-solid fa-file-pdf" v-if="attachment.contentType == 'application/pdf'"></i>
        <i class="fa-solid fa-file-audio" v-if="attachment.contentType == 'audio/mpeg'"></i>

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

<style>
.attachments-wrapper {
  margin-top: 1.5rem;
  padding: 1em;
  border: 1px solid #222;
  border-radius: 8px;
}

.attachments-wrapper .attachment {
  margin-top: var(--margin-small);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  gap: 10px;
  margin-bottom: 0.5rem;

  background-color: #222;
  padding: 2%;
}

.attachments-wrapper span {
  font-size: 16px;
}

.attachments-wrapper i {
  font-size: 32px;

  color: whitesmoke;
}
</style>