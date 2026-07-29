<script setup lang="ts">
import { roles } from '~/data/profile'
</script>

<template>
  <section class="section" aria-labelledby="experience-title">
    <SectionHeading id="experience-title" index="01" label="Experience" />

    <ol class="exp">
      <li v-for="role in roles" :key="`${role.company}-${role.from}`" class="exp__row">
        <div class="exp__dates">
          <span>{{ role.from }}</span>
          <AppIcon class="exp__arrow" name="arrow-right" :size="14" />
          <span>{{ role.to }}</span>
        </div>

        <div class="exp__role">
          <h3 class="exp__title">{{ role.title }}</h3>
          <p class="exp__company">
            {{ role.company }}
            <span v-if="role.context" class="text-muted"> — {{ role.context }}</span>
          </p>
        </div>

        <ul class="exp__points">
          <li v-for="point in role.points" :key="point">{{ point }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.exp {
  margin: 0;
  padding: 0;
  list-style: none;
}

.exp__row {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 4fr) minmax(0, 6fr);
  gap: var(--space-6);
  /* Every cell hangs from the top rule; a centred date column would drift on
     the roles that carry four bullets. */
  align-items: start;
  padding-block: clamp(20px, 3vw, 28px);
  border-bottom: 1px solid var(--color-divider);
}

.exp__dates {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  font-family: var(--font-heading);
  font-weight: var(--font-heading-weight);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-text) 60%, transparent);
  /* Line the dates up with the cap-height of the role title beside them. */
  padding-top: 5px;
}

.exp__arrow {
  flex: none;
}

.exp__title {
  font-size: 20px;
  margin: 0;
}

.exp__company {
  margin: var(--space-1) 0 0;
  font-size: 14px;
}

.exp__points {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
}

.exp__points li {
  position: relative;
  padding-left: var(--space-4);
}
.exp__points li + li {
  margin-top: var(--space-2);
}
/* A flush-left square marker — no bullets, nothing rounded. */
.exp__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  background: var(--color-accent);
}

@media (max-width: 900px) {
  .exp__row {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: var(--space-4) var(--space-6);
  }
  .exp__points {
    grid-column: 2;
  }
}

@media (max-width: 620px) {
  .exp__row {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-3);
  }
  .exp__points {
    grid-column: auto;
    margin-top: var(--space-1);
  }
}
</style>
