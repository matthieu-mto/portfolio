<template>
  <div class="section section__socials">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="socials" class="gr-12" />
      </div>
      <div class="gr-row gr-row--align-center">
        <Social
          v-for="(social, index) in socials"
          :key="index"
          :link="social.link"
          :slug="social.slug"
          :text="social.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from '@/components/titles/TitleSection.vue'
import Social from '@/components/misc/Social.vue'
export default {
  components: {
    TitleSection,
    Social,
  },
  computed: {
    socials() {
      return [
        {
          link: 'https://github.com/matthieu-mto',
          slug: 'git',
          text: 'Github',
        },
        {
          link: 'https://twitter.com/matthieu__tou',
          slug: 'twitter',
          text: 'Twitter',
        },
        {
          link: 'https://www.linkedin.com/in/matthieu-toussaint/',
          slug: 'linkedin',
          text: 'LinkedIn',
        },
        {
          link: '/contact',
          slug: 'mail',
          text: 'Contact',
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.section {
  &__socials {
    margin-bottom: $margin-50;
    @include media(xs, m) {
      margin-bottom: $margin-30;
    }
  }
}
</style>
