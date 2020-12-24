<template>
  <div class="menu">
    <SlideMenu>
      <NuxtLink class="menu__link" :to="localePath('/')">
        {{ $t('components.misc.burgerMenu.home') }}
      </NuxtLink>
      <NuxtLink class="menu__link" :to="localePath('/contact')">
        {{ $t('components.misc.burgerMenu.contact') }}
      </NuxtLink>
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        class="menu__link"
        :to="switchLocalePath(locale.code)"
      >
        {{ $t('components.misc.burgerMenu.switchLanguage') }}
        <br />
        {{ locale.name }}
      </NuxtLink>
    </SlideMenu>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss">
.menu {
  @include media(s, l) {
    position: fixed;
    top: 5px;
    left: 5px;
  }
  &__link {
    color: $primary;
  }
}

.bm-burger-button {
  .bm-burger-bars {
    background-color: $primary;
  }
}
</style>
