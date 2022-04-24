<template>
  <li class="element">
    {{ text }}
    <a v-if="link" :href="link" class="element__link" target="_blank">
      {{ linkText }}
    </a>

    <template v-for="(linkItem, index) in links" v-else-if="links">
      <a
        :key="index"
        :href="linkItem.url"
        class="element__link"
        target="_blank"
      >
        {{ linkItem.text }}
      </a>
      <span
        v-if="index !== links.length - 1"
        :key="index"
        class="element__separator"
      >
        &
      </span>
    </template>
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
    links: {
      type: Array,
      default: null,
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

  &__separator {
    margin: 0 5px;
  }
}
</style>
