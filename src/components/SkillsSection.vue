<script setup>
defineProps({
  summary: { type: String, required: true },
  skills: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="skills">
    <p class="skills-summary">{{ summary }}</p>
    <div class="skills-tags">
      <span v-for="skill in skills" :key="skill" class="tag tag-neutral">{{ skill }}</span>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: clamp(32px, 5vw, 56px) 0 clamp(40px, 7vw, 80px);
}

.skills-summary {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(20px, 2.6vw, 32px);
  line-height: 1.3;
  letter-spacing: -0.015em;
  margin: 0;
  text-wrap: balance;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: clamp(20px, 3vw, 28px);
}
</style>
