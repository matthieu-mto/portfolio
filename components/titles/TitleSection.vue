<template>
  <h2 class="title__h2">{{ text }}</h2>
</template>

<script>
export default {
  components: {},
  props: {
    text: {
      type: String,
      default: 'Default title h2',
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.title {
  &__h2 {
    margin-bottom: $margin-15;
    font-weight: $font-weight-bold;
    font-size: $font-size-20;
    text-align: center;
    color: $primary;
    @include media(xs, m) {
      font-size: $font-size-25;
    }
  }
}
</style>
