<script setup lang="ts">
import { skillGroups } from '~/data/profile'
</script>

<template>
  <section class="section" aria-labelledby="skills-title">
    <SectionHeading id="skills-title" index="02" label="Skills" />

    <div class="skills">
      <div v-for="group in skillGroups" :key="group.label" class="skills__cell">
        <h3 class="skills__label">{{ group.label }}</h3>
        <ul class="skills__list">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Equal-width cells split by vertical rules — the modular grid, made visible. */
.skills {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-top: clamp(20px, 3vw, 28px);
}

.skills__cell {
  padding-inline: clamp(var(--space-4), 3vw, var(--space-8));
  border-left: 1px solid var(--color-divider);
}
.skills__cell:first-child {
  padding-left: 0;
  border-left: 0;
}

.skills__label {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 var(--space-3);
}

.skills__list {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
}
.skills__list li + li {
  margin-top: var(--space-2);
  padding-top: var(--space-2);
  border-top: 1px solid color-mix(in srgb, var(--color-text) 12%, transparent);
}

@media (max-width: 760px) {
  .skills {
    grid-template-columns: minmax(0, 1fr);
  }
  .skills__cell {
    padding: clamp(16px, 4vw, 24px) 0;
    border-left: 0;
    border-top: 1px solid var(--color-divider);
  }
  .skills__cell:first-child {
    border-top: 0;
    padding-top: 0;
  }
}
</style>
