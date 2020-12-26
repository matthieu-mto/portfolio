<template>
  <div class="sidebar">
    <div
      v-if="isPanelOpen"
      class="sidebar__backdrop"
      @click="closeSidebarPanel"
    />

    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar__panel">
        <NuxtLink class="sidebar__panel-link" :to="localePath('/')">
          {{ $t('components.misc.burgerMenu.home') }}
        </NuxtLink>
        <NuxtLink class="sidebar__panel-link" :to="localePath('/contact')">
          {{ $t('components.misc.burgerMenu.contact') }}
        </NuxtLink>
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          class="sidebar__panel-link"
          :to="switchLocalePath(locale.code)"
        >
          {{ $t('components.misc.burgerMenu.switchLanguage') }}
          <br />
          {{ locale.name }}
        </NuxtLink>
      </div>
    </transition>

    <img
      v-if="isPanelOpen"
      src="/medias/svg/exit.svg"
      alt="Exit"
      class="sidebar__exit"
      @click="closeSidebarPanel"
    />
  </div>
</template>
<script>
export default {
  props: {
    isPanelOpen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    closeSidebarPanel() {
      this.isPanelOpen = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  position: relative;

  &__exit {
    position: absolute;
    top: -35px;
    right: 15px;
    width: 30px;
    height: 30px;
    z-index: 1000;

    @include media(m, l) {
      display: none;
    }
  }

  &__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    backdrop-filter: blur(2px);
  }

  &__panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    padding: 3rem 20px 2rem 20px;
    background-color: $black-light;
    overflow-y: auto;
    z-index: 999;

    display: flex;
    flex-direction: column;

    @include media(xs, s) {
      width: 100vw;
    }

    &-link {
      margin-bottom: $margin-15;
      color: inherit;
      outline: none;
      text-decoration: none;
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>
