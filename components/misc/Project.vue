<template>
  <div :class="`project project--${slug} gr-6 gr-12@xs gr-10@s gr-10@m`">
    <h3 class="project__title">{{ projectTitle }}</h3>
    <h4 class="project__date">{{ projectDate }}</h4>
    <a :href="projectLink" class="project__link" target="_blank">discover</a>
    <div class="project__img-container">
      <img
        v-lazy="`/medias/previews/${slug}.png`"
        :alt="projectTitle"
        class="project__img"
      />
    </div>
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
    @include media(s, m) {
      font-size: $font-size-25;
    }
  }
  &__date {
    font-size: $font-size-18;
    font-weight: $font-weight-regular;
    margin-bottom: $margin-10;
    @include media(s, m) {
      font-size: $font-size-20;
    }
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
    @include media(s, m) {
      font-size: $font-size-20;
    }
  }
  &__img-container {
    width: 100%;
    height: 260px;
    margin-top: $margin-10;
    margin-bottom: $margin-20;
    overflow: hidden;
    text-align: center;

    @include media(xs) {
      height: 220px;
    }

    @include media(m, l) {
      height: 340px;
    }
  }
  &__img {
    width: 100%;
    height: auto;
    &[lazy='loading'],
    &[lazy='error'] {
      width: 50px;
      height: 50px;
    }
  }
  &__description {
    font-size: $font-size-15;
    line-height: $font-size-18;
    font-weight: $font-weight-light;

    @include media(s, m) {
      font-size: $font-size-20;
      font-weight: $font-weight-regular;
    }
  }
}
</style>
