<script setup>
import portraitUrl from '../assets/portrait.webp'

defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  links: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="hero">
    <div>
      <span class="hero-eyebrow">{{ role }}</span>
      <h1 class="hero-title">{{ name }}</h1>
      <div v-if="links.length" class="hero-actions">
        <a
          v-for="link in links"
          :key="link.href"
          class="btn btn-primary"
          :href="link.href"
          target="_blank"
          rel="noopener"
        >
          {{ link.label }}
        </a>
      </div>
    </div>

    <figure class="hero-portrait grayscale">
      <img :src="portraitUrl" :alt="name" width="828" height="828" />
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

.hero-eyebrow {
  display: block;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-text);
  margin: 0 0 clamp(16px, 2vw, 24px);
}

.hero-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(32px, 4.6vw, 58px);
  line-height: 1.04;
  letter-spacing: -0.025em;
  margin: 0 0 0 -0.05em;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: clamp(24px, 3vw, 32px);
}

.hero-portrait {
  position: relative;
  overflow: hidden;
  margin: 0;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 300px;
  justify-self: end;
  /* Lets the crop maths below read the frame box in cq units. */
  container-type: size;
}

/* The framing saved with the design: the photo cover-fills the frame, then its
   centre sits 13% of the frame height below the frame's centre — clamped so no
   edge is ever pulled inside the frame. Same maths <image-slot> applies, so the
   crop holds at every frame size. The frame is square-or-wider and the photo is
   square, so cover-filling means one frame-width square. */
.hero-portrait img {
  position: absolute;
  left: 50%;
  top: clamp(calc(100cqh - 50cqw), 63cqh, 50cqw);
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  max-width: none;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

@media (max-width: 760px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(28px, 6vw, 40px);
  }
  .hero-portrait {
    justify-self: start;
    max-width: 360px;
  }
}
</style>
