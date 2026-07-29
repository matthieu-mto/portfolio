<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="shell">
      <h2 id="contact-title" class="contact__title">
        Scoping an integration, or hiring for one? Let's talk.
      </h2>

      <ul class="contact__links">
        <li>
          <a class="contact__link" :href="`mailto:${profile.email}`">
            <AppIcon name="mail" :size="18" />
            <span>{{ profile.email }}</span>
          </a>
        </li>
        <li>
          <a
            class="contact__link"
            :href="profile.linkedin"
            target="_blank"
            rel="noopener"
          >
            <AppIcon name="linkedin" :size="18" />
            <span>{{ profile.linkedinLabel }}</span>
          </a>
        </li>
        <li>
          <a
            class="contact__link"
            :href="profile.github"
            target="_blank"
            rel="noopener"
          >
            <AppIcon name="github" :size="18" />
            <span>{{ profile.githubLabel }}</span>
          </a>
        </li>
      </ul>

      <p class="contact__location">
        <AppIcon name="map-pin" :size="18" />
        <span>{{ profile.location }}</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Full-bleed accent field. Per the system: display-grade type, the accent
   carrying the page, and nothing else competing with it. */
.contact {
  background: var(--color-accent);
  color: var(--color-bg);
  padding-block: clamp(48px, 8vw, 96px);
  margin-top: clamp(40px, 6vw, 72px);
}

.contact__title {
  font-size: clamp(26px, 4.2vw, 52px);
  line-height: 1.06;
  letter-spacing: -0.025em;
  margin: 0 0 clamp(28px, 4vw, 44px);
  max-width: 18ch;
  text-wrap: balance;
}

.contact__links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
}

.contact__links > li {
  border-top: 2px solid color-mix(in srgb, var(--color-bg) 45%, transparent);
}

.contact__link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding-block: var(--space-3);
  /* Give the wrapped e-mail / URL room without pushing the row wider. */
  min-width: 0;
  color: var(--color-bg);
  text-decoration: none;
  word-break: break-word;
}

.contact__location {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: clamp(20px, 3vw, 28px) 0 0;
  font-size: 14px;
}

.contact__link svg,
.contact__location svg {
  flex: none;
}

.contact__link:hover {
  color: color-mix(in srgb, var(--color-bg) 75%, var(--color-accent));
}

.contact__link:focus-visible {
  outline: 2px solid var(--color-bg);
  outline-offset: 2px;
}

.contact__location {
  color: color-mix(in srgb, var(--color-bg) 82%, var(--color-accent));
}

/* Columns sit side by side on wide screens; the rule above each one is the
   only separator, so add breathing room between the columns themselves. */
@media (min-width: 640px) {
  .contact__links {
    column-gap: clamp(24px, 4vw, 56px);
  }
}
</style>
