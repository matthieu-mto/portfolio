<template>
  <div class="section section__socials">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="socials" class="gr-12" />
      </div>
      <div class="gr-row gr-row--align-center">
        <Social
          text="Github"
          slug="github"
          link="https://github.com/mattmlz/"
        />
        <Social
          text="Gitlab"
          slug="gitlab"
          link="https://gitlab.com/matt_mlz"
        />
        <Social
          text="Twitter"
          slug="twitter"
          link="https://twitter.com/matthieu__tou"
        />
        <Social
          text="LinkedIn"
          slug="linkedin"
          link="https://www.linkedin.com/in/matthieu-toussaint/"
        />
        <Social
          text="Mail"
          slug="mail"
          link="mailto:matthieu@matthieutoussaint.fr"
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
    Social
  },
  data() {
    return {}
  }
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
