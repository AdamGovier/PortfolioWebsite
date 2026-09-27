<template>
  <section v-if="emails.length" aria-label="Email thread">
    <ol>
      <li
        v-for="(email, index) in emails"
        :key="index"
      >
        <article>
          <header>
            <div>
              <strong>{{ email.SenderName }}</strong>
              <span
                v-if="email.SenderAddress.includes('*')"
                aria-label="Email address redacted"
              >
                {{ email.SenderAddress }}
              </span>
              <a v-else-if="email.SenderAddress" :href="`mailto:${email.SenderAddress}`">
                {{ email.SenderAddress }}
              </a>
            </div>
            <div>
              {{ displayDate(email.Date) }}
            </div>
          </header>
          <div>{{ email.Body }}</div>
        </article>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import type { EmailMessage } from '../../../types/email';

defineProps<{
  emails: EmailMessage[];
}>();

function displayDate(value: EmailMessage['Date']): string {
  const date = new Date(value);
  if (!date) return String(value);

  return new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}
</script>
