<template>
  <div
    :class="`project project--${project.slug} gr-6 gr-12@xs gr-10@s gr-10@m`"
  >
    <h3 class="project__title">{{ project.title }}</h3>
    <h4 class="project__date">{{ project.date }}</h4>
    <a
      v-if="project.link"
      :href="project.link"
      class="project__link"
      target="_blank"
    >
      {{ $t('components.misc.project.discover') }}
    </a>
    <div v-else class="project__link">
      <span class="striked">{{ $t('components.misc.project.discover') }}</span>
      <span class="small">{{ $t('components.misc.project.offline') }}</span>
    </div>
    <div class="project__img-container">
      <img
        ref="projectImg"
        v-lazy="`/medias/previews/${project.slug}.png`"
        :alt="project.title"
        class="project__img"
        :class="{ 'project__img-fullscreen': isFullscreen }"
        @click="toggleFullscreen"
      />
    </div>
    <p class="project__description">{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFullscreen: false
    }
  },
  methods: {
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen

      if (this.isFullscreen) {
        this.$refs.projectImg.requestFullscreen()
      }
    }
  }
}
</script>

<style lang="scss">
.project {
  margin: $margin-30 0;
  text-align: left;
  color: $primary;

  @include media(xs) {
    margin: $margin-15 0;
  }

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
      height: 170px;
    }

    @include media(s) {
      height: 220px;
    }

    @include media(m) {
      height: 340px;
    }

    @include media(l) {
      height: 270px;
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

    @include media(m, l) {
      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }

    &-fullscreen {
      cursor: default !important;
      opacity: 1 !important;
    }
  }
  &__description {
    font-size: $font-size-15;
    line-height: 1.1;
    font-weight: $font-weight-light;

    @include media(s, m) {
      font-size: $font-size-20;
      font-weight: $font-weight-regular;
    }
  }
}
</style>
