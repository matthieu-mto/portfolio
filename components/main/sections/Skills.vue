<template>
  <div class="section section__skills">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="skills" class="gr-12" />
      </div>
      <div class="gr-row gr-row--align-center">
        <Skill text="JS ES6" slug="js" />
        <Skill text="VueJS" slug="vuejs" />
        <Skill text="PHP" slug="php" />
        <Skill text="Laravel" slug="laravel" />
        <Skill text="PostgreSQL" slug="postgresql" />
        <Skill text="Git" slug="git" />
        <Skill text="Heroku" slug="heroku" />
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
