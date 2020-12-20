<template>
  <div class="section section__skills">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="projects" class="gr-12" />
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
    Project
  },
  data() {
    return {
      projects: [
        {
          slug: 'vendredi',
          title: 'Vendredi',
          date: 'Since May 2020',
          link: 'https://app.vendredi.cc',
          description:
            'Since 2020, I\'m part of the great adventure "Vendredi". I work as a full stack web developer to improve the engagment plateform!'
        },
        {
          slug: 'supertrash',
          title: 'Supertrash',
          date: 'February 2020',
          link: 'https://gitlab.com/mattmlz-school/supertrash',
          description:
            "For this generative design project, we have created a site dedicated to Supertrash's event service. Do you want to be helped in the processing of your waste for your festival? Supertrash will offer you a unique design for your trash cans that will be placed in the festival."
        },
        {
          slug: 'weisser-ring',
          title: 'Weisser Ring - winter animation',
          date: 'October 2019',
          link: 'https://spenden.weisser-ring.de/',
          description:
            "During my internship at Taikonauten, I worked on a winter animation for Weisser Ring. This animation may not appear if it's not winter time ❄️"
        },
        {
          slug: 'hypatos',
          title: 'Hypatos phase 2',
          date: 'August 2019',
          link: 'https://hypatos.ai/',
          description:
            'During my internship at Taikonauten, I made the development of the new website of Hypatos.'
        },
        {
          slug: 'ecologia',
          title: 'Ecologia',
          date: 'October 2018',
          description:
            'For a school project, we had to create a wordpress theme about ecology. This project is not online anymore.'
        },
        {
          slug: 'wizer',
          title: 'Mini site for an app',
          date: 'October 2018',
          link: '',
          description:
            'We had to create a product for a school projet about reading. We decided to think about an app which facilitate the storing the data of an article. I developed a mini-site to present this application project.'
        },
        {
          slug: 'graduation-video',
          title: 'Video realisation for HETIC graduation"',
          date: 'June 2018',
          link: 'https://vimeo.com/278643634',
          description:
            "I had the opportunity to work with the ex-director of HETIC (Jean-Christophe BEAUX) to create and edit the graduation video for the 2017's promotion of HETIC."
        }
      ]
    }
  }
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
