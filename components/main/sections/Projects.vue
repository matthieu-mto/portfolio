<template>
  <div class="section section__skills">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection
          :text="$t('components.main.sections.projects.title')"
          class="gr-12"
        />
      </div>
      <div class="gr-row gr-row--align-center">
        <Project
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from '@/components/titles/TitleSection.vue'
import Project from '@/components/misc/Project.vue'
export default {
  components: {
    TitleSection,
    Project,
  },
  data() {
    return {
      projects: [
        {
          slug: 'vendredi',
          title: 'Vendredi',
          date: this.$t('components.main.sections.projects.vendredi.date'),
          link: 'https://app.vendredi.cc',
          description: this.$t(
            'components.main.sections.projects.vendredi.description'
          ),
        },
        {
          slug: 'supertrash',
          title: 'Supertrash',
          date: this.$t('components.main.sections.projects.supertrash.date'),
          link: 'https://gitlab.com/mattmlz-school/supertrash',
          description: this.$t(
            'components.main.sections.projects.supertrash.description'
          ),
        },
        {
          slug: 'weisser-ring',
          title: this.$t('components.main.sections.projects.weisserRing.title'),
          date: this.$t('components.main.sections.projects.weisserRing.date'),
          link: 'https://spenden.weisser-ring.de/',
          description: this.$t(
            'components.main.sections.projects.weisserRing.description'
          ),
        },
        {
          slug: 'hypatos',
          title: 'Hypatos phase 2',
          date: this.$t('components.main.sections.projects.hypatos.date'),
          link: 'https://hypatos.ai/',
          description: this.$t(
            'components.main.sections.projects.hypatos.description'
          ),
        },
        {
          slug: 'ecologia',
          title: 'Ecologia',
          date: this.$t('components.main.sections.projects.ecologia.date'),
          description: this.$t(
            'components.main.sections.projects.ecologia.description'
          ),
        },
        {
          slug: 'wizer',
          title: this.$t('components.main.sections.projects.wizer.title'),
          date: this.$t('components.main.sections.projects.wizer.date'),
          description: this.$t(
            'components.main.sections.projects.wizer.description'
          ),
        },
        {
          slug: 'graduation-video',
          title: this.$t(
            'components.main.sections.projects.graduationVideo.titre'
          ),
          date: this.$t(
            'components.main.sections.projects.graduationVideo.date'
          ),
          link: 'https://vimeo.com/278643634',
          description: this.$t(
            'components.main.sections.projects.graduationVideo.titre'
          ),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.section {
  &__projects {
    margin-bottom: $margin-50;
    @include media(xs, m) {
      margin-bottom: $margin-30;
    }
  }
}
</style>
