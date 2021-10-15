<template>
  <div class="section section__skills">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="discovering" class="gr-12" />
      </div>
      <div class="gr-row gr-row--align-center">
        <Skill text="AWS" slug="aws" />
        <Skill text="Cloudflare" slug="cloudflare" />
        <Skill text="Webflow" slug="webflow" />
        <Skill text="ReactJs" slug="reactjs" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from '@/components/titles/TitleSection.vue'
import Skill from '@/components/misc/Skill.vue'
export default {
  components: {
    TitleSection,
    Skill,
  },
}
</script>

<style lang="scss">
.section {
  &__skills {
    margin-bottom: $margin-50;
    @include media(xs, m) {
      margin-bottom: $margin-30;
    }
  }
}
</style>
