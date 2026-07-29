<script setup lang="ts">
import { earlyRoles, education, languages } from '~/data/profile'
</script>

<template>
  <section class="section" aria-labelledby="background-title">
    <SectionHeading id="background-title" index="03" label="Background" />

    <div class="bg">
      <div class="bg__col bg__col--wide">
        <h3 class="bg__label">Before 2020</h3>
        <ul class="bg__list">
          <li v-for="item in earlyRoles" :key="item.org" class="bg__item">
            <p class="bg__item-head">
              <span class="bg__org">{{ item.org }}</span>
              <span class="text-muted">{{ item.role }} · {{ item.period }}</span>
            </p>
            <p class="bg__detail text-muted">{{ item.detail }}</p>
          </li>
        </ul>
      </div>

      <div class="bg__col">
        <h3 class="bg__label">Education</h3>
        <ul class="bg__list">
          <li v-for="item in education" :key="item.school" class="bg__item">
            <p class="bg__item-head">
              <span class="bg__org">{{ item.school }}</span>
              <span class="text-muted">{{ item.period }}</span>
            </p>
            <p class="bg__detail text-muted">{{ item.detail }}</p>
          </li>
        </ul>

        <h3 class="bg__label bg__label--spaced">Languages</h3>
        <dl class="bg__langs">
          <template v-for="lang in languages" :key="lang.name">
            <dt>{{ lang.name }}</dt>
            <dd class="text-muted">{{ lang.level }}</dd>
          </template>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg {
  display: grid;
  grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
  gap: clamp(24px, 5vw, 64px);
  padding-top: clamp(20px, 3vw, 28px);
}

.bg__label {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 var(--space-3);
}
.bg__label--spaced {
  margin-top: clamp(28px, 4vw, 40px);
}

.bg__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.bg__item {
  padding-block: var(--space-3);
  border-top: 1px solid var(--color-divider);
}

.bg__item-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2) var(--space-3);
  margin: 0;
  font-size: 14px;
}

.bg__org {
  font-family: var(--font-heading);
  font-weight: var(--font-heading-weight);
  font-size: 15px;
}

.bg__detail {
  margin: var(--space-1) 0 0;
  font-size: 14px;
}

.bg__langs {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0;
  margin: 0;
  font-size: 14px;
}
.bg__langs dt {
  font-family: var(--font-heading);
  font-weight: var(--font-heading-weight);
  padding: var(--space-3) var(--space-4) var(--space-3) 0;
  border-top: 1px solid var(--color-divider);
}
.bg__langs dd {
  margin: 0;
  padding: var(--space-3) 0;
  text-align: right;
  border-top: 1px solid var(--color-divider);
}

@media (max-width: 820px) {
  .bg {
    grid-template-columns: minmax(0, 1fr);
  }
  .bg__col--wide {
    margin-bottom: clamp(16px, 4vw, 32px);
  }
}
</style>
