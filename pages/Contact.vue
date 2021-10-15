<template>
  <div class="main-container">
    <!-- BURGER MENU -->
    <Burger />

    <Header :title="$t('pages.contact.title')" />

    <div class="gr-container">
      <div
        data-tf-widget="l9tK1vOz"
        data-tf-hide-footer
        data-tf-hide-headers
        class="gr-12 form-typeform"
      ></div>
      <script src="//embed.typeform.com/next/embed.js"></script>
    </div>
  </div>
</template>

<script>
import Burger from '@/components/misc/Burger'
import Header from '@/components/main/Header.vue'

export default {
  // eslint-disable-next-line
  name: 'contact',
  components: {
    Burger,
    Header,
  },
}
</script>

<style lang="scss">
.form-typeform {
  height: 500px;
}
</style>
