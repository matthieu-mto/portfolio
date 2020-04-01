<template>
  <div class="section section__skills">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="skills" class="gr-12" />
        <Skill text="HTML 5" slug="html5" />
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
