<script setup lang="ts">
import { profile } from '~/data/profile'
import portrait from '~/assets/img/portrait.webp'
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__text">
      <span class="hero__kicker">{{ profile.kicker }}</span>
      <h1 class="hero__name">{{ profile.name }}</h1>
      <div class="hero__actions">
        <a
          class="btn btn-primary"
          :href="profile.linkedin"
          target="_blank"
          rel="noopener"
        >
          Connect on LinkedIn
          <AppIcon name="arrow-up-right" :size="15" />
        </a>
      </div>
    </div>

    <figure class="hero__figure grayscale">
      <img
        :src="portrait"
        width="828"
        height="828"
        alt="Portrait of Matthieu Gregoris Toussaint"
        fetchpriority="high"
        decoding="async"
      />
    </figure>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 4fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
  padding: clamp(40px, 6vw, 72px) 0 clamp(36px, 5vw, 64px);
}

.hero__kicker {
  display: block;
  font-family: var(--font-heading);
  font-weight: var(--font-heading-weight);
  font-size: 13px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  margin: 0 0 clamp(16px, 2vw, 24px);
}

.hero__name {
  font-size: clamp(32px, 4.6vw, 58px);
  line-height: 1.04;
  letter-spacing: -0.025em;
  margin: 0;
  /* Optical alignment: pulls the cap-height stem flush with the rule above. */
  margin-left: -0.05em;
}

.hero__actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
  margin-top: clamp(24px, 3vw, 32px);
}

.hero__figure {
  margin: 0;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-height: 300px;
  justify-self: end;
}

.hero__figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Matches the framing saved on the brief's <image-slot> (y offset +13). */
  object-position: 50% 42%;
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(24px, 5vw, 40px);
  }
  .hero__figure {
    justify-self: start;
    width: min(240px, 60vw);
    max-height: none;
  }
}
</style>
