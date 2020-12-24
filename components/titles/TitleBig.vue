<template>
  <h1 class="title__h1">{{ text }}</h1>
</template>

<script>
export default {
  components: {},
  props: {
    text: {
      type: String,
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
  &__h1 {
    margin: $margin-50 0;
    font-weight: $font-weight-bold;
    font-size: $font-size-25;
    text-align: center;
    color: $primary;

    @include media(xs, s) {
      margin-top: $margin-90;
      margin-bottom: $margin-20;
    }
  }
}
</style>
