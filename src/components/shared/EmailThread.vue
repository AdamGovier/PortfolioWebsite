<template>
  <section v-if="emails.length" class="email-thread" aria-label="Email thread">
    <ol class="email-thread-list">
      <li
        v-for="(email, index) in emails"
        :key="index"
        class="email-thread-item"
        :class="{ 'email-thread-item-reply': index > 0 }"
      >
        <article class="email-thread-message">
          <header class="email-thread-header">
            <div class="email-thread-sender">
              <strong class="email-thread-name">{{ email.SenderName }}</strong>
              <span
                v-if="email.SenderAddress.includes('*')"
                class="email-thread-address"
                aria-label="Email address redacted"
              >
                {{ email.SenderAddress }}
              </span>
              <a v-else-if="email.SenderAddress" class="email-thread-address" :href="`mailto:${email.SenderAddress}`">
                {{ email.SenderAddress }}
              </a>
            </div>
            <div class="email-thread-date">
              {{ displayDate(email.Date) }}
            </div>
          </header>
          <div class="email-thread-body">{{ email.Body }}</div>
        </article>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import type { EmailMessage } from '../../types/email';

defineProps<{
  emails: EmailMessage[];
}>();

function displayDate(value: EmailMessage['Date']): string {
  const date = new Date(value);
  if (!date) return String(value);

  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
  }).format(date);
}
</script>

<style scoped>
.email-thread {
  width: min(100%, 90ch);
  margin: var(--margin-large) 0;
  font-family: Arial, sans-serif;
}

.email-thread-list {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

.email-thread-item {
  list-style: none;
  margin: 0;
  padding: 1.5rem 0 1.5rem 1rem;
  border-top: var(--divider);
  border-left: 2px solid var(--accent);
}

.email-thread-item-reply {
  margin-left: clamp(0.75rem, 3vw, 2rem);
}

.email-thread-item:first-child {
  border-top: 0;
  padding-top: 0;
}

.email-thread-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.25rem 1.5rem;
}

.email-thread-sender {
  display: flex;
  flex-wrap: wrap;
  gap: 0 0.5rem;
  min-width: 0;
}

.email-thread-name {
  font-weight: 700;
}

.email-thread-address {
  color: var(--accent);
  overflow-wrap: anywhere;
}

.email-thread-date {
  color: #aaa;
}

.email-thread-body {
  margin-top: 1rem;
  overflow-wrap: anywhere;
  line-height: 1.7;
  white-space: pre-wrap;
}
</style>
