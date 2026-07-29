<script setup lang="ts">
/**
 * A section opener: an accent-tinted index, the uppercase label, and the 2px
 * rule the system uses to separate major sections.
 */
defineProps<{
  /** Zero-padded counter, e.g. "01". The one place the accent appears in ink copy. */
  index: string
  label: string
  id?: string
}>()
</script>

<template>
  <div class="section-heading">
    <h2 :id="id" class="section-heading__label">
      <span class="section-heading__index" aria-hidden="true">{{ index }}</span>
      {{ label }}
    </h2>
    <hr class="rule" />
  </div>
</template>

<style scoped>
.section-heading__label {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  font-size: 13px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  margin: 0 0 var(--space-3);
}

.section-heading__index {
  color: var(--color-accent-700);
  font-variant-numeric: tabular-nums;
}
</style>
