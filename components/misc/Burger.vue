<template>
  <div class="main-nav">
    <div
      class="burger"
      :class="{ active: isBurgerActive }"
      @click.prevent="toggle"
    >
      <slot>
        <button type="button" class="burger__button" title="Menu">
          <span class="burger__bar burger__bar-1"></span>
          <span class="burger__bar burger__bar-2"></span>
          <span class="burger__bar burger__bar-3"></span>
        </button>
      </slot>
    </div>

    <Sidebar :is-panel-open="isBurgerActive" @close="toggle" />
  </div>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      isBurgerActive: false
    }
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
    }
  }
}
</script>

<style lang="scss">
.burger {
  position: relative;
  top: 5px;
  left: 5px;

  @include media(s, l) {
    position: fixed;
    top: 5px;
    left: 15px;
  }

  .active &__button {
    transform: rotate(-180deg);
  }

  .active &__bar {
    background-color: $secondary;
  }

  .active &__bar-1 {
    transform: rotate(45deg);
  }

  .active &__bar-2 {
    opacity: 0;
  }

  .active &__bar-3 {
    transform: rotate(-45deg);
  }

  &__button {
    position: relative;
    width: 52px;
    height: 50px;
    display: block;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;

    /* remove blue outline */
    &:focus {
      outline: 0;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  &__bar {
    background-color: $primary;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 5px;
    width: auto;
    margin-top: -1px;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    &-1 {
      -webkit-transform: translateY(-6px);
      transform: translateY(-5px);
    }

    &-2 {
      transform-origin: 100% 50%;
      transform: scaleX(0.8) translateY(5px);
    }

    &-3 {
      transform: translateY(15px);
    }
  }
}

.hidden {
  visibility: hidden;
}

.no-touchevents .burger__bar-2:hover {
  transform: scaleX(1);
}
</style>
