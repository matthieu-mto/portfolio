<template>
  <div class="gr-container">
    <div class="gr-row">
      <TitleBig text="Matthieu TOUSSAINT - Full stack web developer" />
    </div>
  </div>
</template>

<script>
import TitleBig from '@/components/titles/TitleBig.vue'
export default {
  components: {
    TitleBig
  },
  props: {
    text: {
      type: String,
      default: 'Default title',
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss"></style>
