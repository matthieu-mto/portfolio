<script setup lang="ts">
import { commitment } from '~/data/profile'
</script>

<template>
  <section class="section" aria-labelledby="commitment-title">
    <SectionHeading id="commitment-title" index="04" label="Commitment" />

    <div class="commit">
      <div class="commit__head">
        <AppIcon class="commit__icon" name="flame" :size="28" />
        <h3 class="commit__title">{{ commitment.label }}</h3>
        <p class="commit__meta text-muted">
          {{ commitment.org }} · {{ commitment.period }}
        </p>
      </div>
      <ul class="commit__points">
        <li v-for="point in commitment.points" :key="point">{{ point }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.commit {
  display: grid;
  grid-template-columns: minmax(0, 4fr) minmax(0, 7fr);
  gap: var(--space-6) clamp(24px, 5vw, 64px);
  padding-top: clamp(20px, 3vw, 28px);
  border-top: 1px solid var(--color-divider);
}

.commit__head {
  padding-top: var(--space-3);
}

.commit__icon {
  color: var(--color-accent);
  margin-bottom: var(--space-2);
}

.commit__title {
  font-size: 20px;
  margin: 0;
}

.commit__meta {
  margin: var(--space-1) 0 0;
  font-size: 14px;
}

.commit__points {
  margin: 0;
  padding: var(--space-3) 0 0;
  list-style: none;
  font-size: 15px;
  max-width: 62ch;
}
.commit__points li + li {
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid color-mix(in srgb, var(--color-text) 12%, transparent);
}

@media (max-width: 760px) {
  .commit {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-3);
  }
  .commit__points {
    padding-top: 0;
  }
}
</style>
