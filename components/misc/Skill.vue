<template>
  <div class="gr-container">
    <div class="gr-row">
      <div :class="`skill skill--${slug} gr-2`">
        <img :src="`/medias/svg/${slug}.svg`" :alt="text" class="skill__img" />
      </div>
    </div>
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
  &__img {
    width: 50px;
    height: 50px;
  }
}
</style>
