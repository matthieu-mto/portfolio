<template>
  <li class="element">
    {{ text }}
    <a v-if="link" :href="link" class="element__link">
      {{ linkText }}
    </a>
  </li>
</template>

<script>
export default {
  components: {},
  props: {
    text: {
      type: String,
      default: 'Default description',
      required: true,
    },
    link: {
      type: String,
      default: null,
      required: false,
    },
    linkText: {
      type: String,
      default: 'Default text link',
      required: false,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.element {
  font-weight: $font-weight-medium;
  font-size: $font-size-20;
  line-height: 25px;
  color: $primary;
  @include media(s, m) {
    font-size: $font-size-25;
  }
  &__link {
    color: inherit;
    outline: none;
  }
  &--margin {
    margin-bottom: $margin-10;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &--small {
    font-size: $font-size-16;
    @include media(s, m) {
      font-size: $font-size-20;
    }
  }
}
</style>
