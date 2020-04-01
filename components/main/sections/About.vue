<template>
  <div class="section section__about">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="about" class="gr-12" />
        <ul class="section__about--description gr-12">
          <ListElement
            text="Student at "
            link="https://www.hetic.net/"
            link-text="HETIC"
            class="element--margin element--small"
          />
          <ListElement
            text="Ex web engineer at "
            link="https://taikonauten.com/"
            link-text="Taikonauten"
            class="element--margin element--small"
          />
          <ListElement
            text="Technology enthusiastic"
            class="element--margin element--small"
          />
          <ListElement
            text="Freelance consultant"
            class="element--margin element--small"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from '@/components/titles/TitleSection.vue'
import ListElement from '@/components/misc/ListElement.vue'
export default {
  components: {
    TitleSection,
    ListElement
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.section {
  &__about {
    margin-bottom: $margin-50;
    &--description {
      text-align: center;
    }
  }
}
</style>
