<template>
  <div class="main">
    <!-- HEADER -->
    <Header />
  </div>
</template>

<script>
import Header from '@/components/main/Header.vue'
export default {
  components: {
    Header
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
