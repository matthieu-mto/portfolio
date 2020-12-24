<template>
  <div class="main-container">
    <!-- BURGER MENU -->
    <BurgerMenu />
    <!-- HEADER -->
    <Header
      :title="$t('pages.index.header.title')"
      :elements="headerElements"
      show-profile-picture
    />
    <!-- SECTIONS -->
    <About />
    <Skills />
    <Socials />
    <Projects />
    <Playlists />
  </div>
</template>

<script>
import About from '@/components/main/sections/About.vue'
import BurgerMenu from '@/components/misc/BurgerMenu'
import Header from '@/components/main/Header.vue'
import Playlists from '@/components/main/sections/Playlists.vue'
import Projects from '@/components/main/sections/Projects.vue'
import Skills from '@/components/main/sections/Skills.vue'
import Socials from '@/components/main/sections/Socials.vue'

export default {
  // eslint-disable-next-line
  name: 'index',
  components: {
    About,
    BurgerMenu,
    Header,
    Playlists,
    Projects,
    Skills,
    Socials
  },
  computed: {
    headerElements() {
      return [
        this.$t('pages.index.header.student'),
        this.$t('pages.index.header.job'),
        this.$t('pages.index.header.freelance')
      ]
    }
  }
}
</script>

<style lang="scss">
.menu {
  &__link {
    color: $primary;
  }
}

.bm-burger-button {
  .bm-burger-bars {
    background-color: $primary;
  }
}
</style>
