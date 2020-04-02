<template>
  <div :class="`project project--${slug} gr-6 gr-12@xs gr-12@s`">
    <h3 class="project__title">{{ projectTitle }}</h3>
    <h4 class="project__date">{{ projectDate }}</h4>
    <a :href="projectLink" class="project__link" target="_blank">discover</a>
    <img
      :src="`/medias/previews/${slug}.png`"
      :alt="projectTitle"
      class="project__img"
    />
    <p class="project__description">{{ projectDescription }}</p>
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
    projectTitle: {
      type: String,
      default: 'Default title',
      required: true
    },
    projectDate: {
      type: String,
      default: 'Default date',
      required: true
    },
    projectLink: {
      type: String,
      default: '/',
      required: true
    },
    projectDescription: {
      type: String,
      default: 'Default description',
      required: true
    }
  }
}
</script>

<style lang="scss">
.project {
  margin: $margin-30 0;
  text-align: left;
  color: $primary;
  &__title {
    font-size: $font-size-20;
    font-weight: $font-weight-medium;
    line-height: $font-size-25;
  }
  &__date {
    font-size: $font-size-18;
    font-weight: $font-weight-regular;
    margin-bottom: $margin-10;
  }
  &__link {
    display: block;
    font-size: $font-size-18;
    font-weight: $font-weight-regular;
    margin-bottom: $margin-20;
    color: inherit;
    &:hover {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }
  }
  &__img {
    width: 100%;
    height: 283px;
    margin-top: $margin-10;
    margin-bottom: $margin-20;
  }
  &__description {
    font-size: $font-size-15;
    line-height: $font-size-18;
    font-weight: $font-weight-light;
  }
}
</style>
