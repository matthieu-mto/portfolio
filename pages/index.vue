<template>
  <div class="main">
    <!-- HEADER -->
    <Header />
    <!-- SECTIONS -->
    <About />
    <Skills />
    <Socials />
    <Projects />
    <Music />
  </div>
</template>

<script>
import Header from '@/components/main/Header.vue'
import About from '@/components/main/sections/About.vue'
import Skills from '@/components/main/sections/Skills.vue'
import Socials from '@/components/main/sections/Socials.vue'
import Projects from '@/components/main/sections/Projects.vue'
import Music from '@/components/main/sections/Music.vue'
export default {
  components: {
    Header,
    About,
    Skills,
    Socials,
    Projects,
    Music
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.main {
  background-color: $background;
  padding-bottom: $margin-50;
  * {
    font-family: $font-office;
  }
}
</style>
