<template>
  <div>
    {{ header }}
    {{ abouts }}
    {{ skills }}
    {{ socials }}
    {{ projects }}
  </div>
</template>

<script>
import headerQuery from '~/apollo/queries/header/header'
import aboutsQuery from '~/apollo/queries/about/abouts'
import skillsQuery from '~/apollo/queries/skill/skills'
import socialsQuery from '~/apollo/queries/social/socials'
import projectsQuery from '~/apollo/queries/project/projects'

export default {
  components: {},
  data() {
    return {
      header: {},
      abouts: [],
      skills: [],
      socials: [],
      projects: []
    }
  },
  apollo: {
    header: {
      prefetch: true,
      query: headerQuery
    },
    abouts: {
      prefetch: true,
      query: aboutsQuery
    },
    skills: {
      prefetch: true,
      query: skillsQuery
    },
    socials: {
      prefetch: true,
      query: socialsQuery
    },
    projects: {
      prefetch: true,
      query: projectsQuery
    }
  }
}
</script>

<style></style>
