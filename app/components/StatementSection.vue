<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section class="statement">
    <p class="statement__lead">{{ profile.statement }}</p>
    <ul class="statement__tags">
      <li v-for="tag in profile.tags" :key="tag" class="tag tag-neutral">
        {{ tag }}
      </li>
    </ul>
    <p class="statement__intro text-muted">{{ profile.intro }}</p>
  </section>
</template>

<style scoped>
.statement {
  padding: clamp(32px, 5vw, 56px) 0 clamp(40px, 7vw, 80px);
}

.statement__lead {
  font-family: var(--font-heading);
  font-weight: var(--font-heading-weight);
  font-size: clamp(20px, 2.6vw, 32px);
  line-height: 1.3;
  letter-spacing: -0.015em;
  margin: 0;
  text-wrap: balance;
}

.statement__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: clamp(20px, 3vw, 28px) 0 0;
  padding: 0;
  list-style: none;
}

.statement__intro {
  margin: clamp(24px, 3vw, 32px) 0 0;
  max-width: 62ch;
  font-size: 15px;
}
</style>
