<script setup lang="ts">
import { profile } from '~/data/profile'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#background', label: 'Background' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header class="site-nav">
    <div class="shell site-nav__inner">
      <a class="nav-brand site-nav__brand" href="#top">{{ profile.name }}</a>
      <nav aria-label="Sections">
        <ul class="site-nav__list">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* The rule stops at the content measure rather than bleeding to the viewport
   edges — that is how the brief draws it, and it keeps every horizontal rule
   on the page on the same two vertical lines. */
.site-nav__inner {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding-block: var(--space-3);
  border-bottom: 2px solid var(--color-divider);
}

.site-nav__brand {
  margin-right: auto;
  text-decoration: none;
  white-space: nowrap;
}

.site-nav__list {
  display: flex;
  gap: clamp(var(--space-3), 2.5vw, var(--space-6));
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-nav__list a {
  font-size: 14px;
  text-decoration: none;
}
.site-nav__list a:hover {
  color: var(--color-accent);
}

/* Below the fold of a phone the brand alone fills the bar, so the links drop
   to their own row and scroll sideways rather than wrapping into a stack. */
@media (max-width: 720px) {
  .site-nav__inner {
    display: block;
    padding-block: var(--space-3) 0;
  }
  .site-nav__brand {
    display: block;
    font-size: 16px;
    white-space: normal;
  }
  .site-nav__list {
    margin-top: var(--space-2);
    /* Bleed to the viewport edges so the scroll affordance reads as intended. */
    margin-inline: calc(var(--gutter) * -1);
    padding-inline: var(--gutter);
    padding-bottom: var(--space-3);
    overflow-x: auto;
    scrollbar-width: none;
  }
  .site-nav__list::-webkit-scrollbar {
    display: none;
  }
  .site-nav__list li {
    white-space: nowrap;
  }
}
</style>
