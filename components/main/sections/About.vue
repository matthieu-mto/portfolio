<template>
  <div class="section section__about">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection
          :text="$t('components.main.sections.about.title')"
          class="gr-12"
        />
        <ul class="section__about--description gr-12">
          <ListElement
            :text="$t('components.main.sections.about.studentAt')"
            link="https://www.hetic.net/"
            link-text="HETIC"
            class="element--margin element--small"
          />
          <ListElement
            :text="$t('components.main.sections.about.job')"
            link="https://vendredi.cc/"
            link-text="Vendredi"
            class="element--margin element--small"
          />
          <ListElement
            :text="$t('components.main.sections.about.oldJob')"
            link="https://taikonauten.com/"
            link-text="Taikonauten"
            class="element--margin element--small"
          />
          <ListElement
            :text="$t('components.main.sections.about.hobby')"
            class="element--margin element--small"
          />
          <ListElement
            :text="$t('components.main.sections.about.freelance')"
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
    ListElement,
  },
}
</script>

<style lang="scss">
.section {
  &__about {
    margin-bottom: $margin-50;
    @include media(xs, m) {
      margin-bottom: $margin-30;
    }
    &--description {
      text-align: center;
    }
  }
}
</style>
