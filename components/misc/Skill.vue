<template>
  <div :class="`skill skill--${slug} gr-2 gr-4@xs`">
    <img :src="`/medias/svg/${slug}.svg`" :alt="text" class="skill__img" />
    <p class="skill__name">{{ text }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    slug: {
      type: String,
      default: 'slug-default',
      required: true
    },
    text: {
      type: String,
      default: 'Default text',
      required: true
    }
  }
}
</script>

<style lang="scss">
.skill {
  margin: $margin-20 0;
  text-align: center;
  &__img {
    width: 50px;
    height: 50px;
    margin-bottom: $margin-10;
  }
  &__name {
    font-size: $font-size-15;
    font-weight: $font-weight-light;
    text-align: center;
    color: $primary;
  }
}
</style>
