<template>
  <div class="main">
    <!-- HEADER -->
    <Header />
    <!-- SECTIONS -->
    <About />
    <Skills />
  </div>
</template>

<script>
import Header from '@/components/main/Header.vue'
import About from '@/components/main/sections/About.vue'
import Skills from '@/components/main/sections/Skills.vue'
export default {
  components: {
    Header,
    About,
    Skills
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.main {
  min-width: 100vw;
  min-height: 100vh;
  background-color: $background;
  * {
    font-family: $font-office;
  }
}
</style>
