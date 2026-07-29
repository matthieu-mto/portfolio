<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: `${props.error.statusCode} — Matthieu Gregoris Toussaint`,
  robots: 'noindex',
})
</script>

<template>
  <div class="page error">
    <div class="shell error__inner">
      <span class="error__code">{{ error.statusCode }}</span>
      <h1 class="error__title">
        {{ error.statusCode === 404 ? 'This page does not exist.' : 'Something broke.' }}
      </h1>
      <hr class="rule" />
      <a class="btn btn-primary error__cta" href="/">
        Back to the portfolio
        <AppIcon name="arrow-right" :size="15" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.error {
  display: grid;
  place-items: center;
}

.error__inner {
  width: 100%;
  padding-block: clamp(64px, 14vh, 140px);
}

.error__code {
  display: block;
  font-family: var(--font-heading);
  font-weight: var(--font-heading-weight);
  font-size: 13px;
  letter-spacing: 0.09em;
  color: var(--color-accent-700);
  margin-bottom: var(--space-3);
}

.error__title {
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.04;
  letter-spacing: -0.025em;
  margin: 0 0 clamp(24px, 3vw, 32px);
  margin-left: -0.05em;
}

.error__cta {
  margin-top: clamp(24px, 3vw, 32px);
}
</style>
