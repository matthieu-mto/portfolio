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
  background-color: $background;
  padding-bottom: $margin-50;
  * {
    font-family: $font-office;
  }
}
</style>
