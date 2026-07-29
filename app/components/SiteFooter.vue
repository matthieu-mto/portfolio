<script setup lang="ts">
import { profile } from '~/data/profile'

// useState so the prerendered year is carried into the payload — computing it
// again on the client would mismatch during a build that straddles New Year.
const year = useState('build-year', () => new Date().getFullYear())
</script>

<template>
  <footer class="site-footer">
    <div class="shell site-footer__inner">
      <span>© {{ year }} {{ profile.name }}</span>
      <a class="link-underline" href="#top">Back to top</a>
    </div>
  </footer>
</template>

<style scoped>
/* No rule here on purpose: the accent banner already closes the page, and a
   second edge immediately under it reads as a seam. */
.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding-block: var(--space-4);
  font-size: 13px;
  color: color-mix(in srgb, var(--color-text) 60%, transparent);
}
</style>
