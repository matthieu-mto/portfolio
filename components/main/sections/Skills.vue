<template>
  <div class="section section__skills">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="skills" class="gr-12" />
      </div>
      <div class="gr-row gr-row--align-center">
        <Skill text="HTML 5" slug="html5" />
        <Skill text="CSS3" slug="css3" />
        <Skill text="JS ES6" slug="js" />
        <Skill text="VueJS" slug="vuejs" />
        <Skill text="PHP" slug="php" />
        <Skill text="MySQL" slug="mysql" />
        <Skill text="NodeJS" slug="nodejs" />
        <Skill text="Git" slug="git" />
        <Skill text="Swift" slug="swift" />
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
    Skill
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.section {
  &__skills {
    margin-bottom: $margin-50;
  }
}
</style>
