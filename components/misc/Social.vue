<template>
  <div :class="`social social--${slug} gr-2`">
    <a :href="link" class="social__link" target="_blank">
      <img :src="`/medias/svg/${slug}.svg`" :alt="text" class="social__img" />
      <p class="social__name">{{ text }}</p>
    </a>
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
    },
    link: {
      type: String,
      default: 'https://matthieutoussaint.fr',
      required: true
    }
  }
}
</script>

<style lang="scss">
.social {
  margin: $margin-20 0;
  text-align: center;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  &__link {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
    &:visited {
      text-decoration: none;
    }
  }
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
