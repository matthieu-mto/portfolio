<template>
  <div class="main">
    <!-- HEADER -->
    <Header />
    <!-- SECTIONS -->
    <About />
  </div>
</template>

<script>
import Header from '@/components/main/Header.vue'
import About from '@/components/main/sections/About.vue'
export default {
  components: {
    Header,
    About
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
