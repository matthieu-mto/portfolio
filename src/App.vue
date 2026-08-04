<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import { profile } from './content/profile.js'
</script>

<template>
  <div class="page">
    <SiteNav :brand="profile.name" />

    <main class="container container-padded">
      <HeroSection :name="profile.name" :role="profile.role" :links="profile.links" />
      <hr class="hr" />
      <SkillsSection :summary="profile.summary" :skills="profile.skills" />
    </main>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
}
</style>
