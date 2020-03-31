<template>
  <h1 class="title__h1 gr-12">{{ text }}</h1>
</template>

<script>
export default {
  components: {},
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
