<template>
  <div class="header">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleBig :text="title" class="gr-12" />
        <ul class="header__description gr-12@xs gr-12@s">
          <ListElement
            v-for="(element, index) in elements"
            :key="index"
            :text="element"
          />
        </ul>
        <ProfilePicture v-if="showProfilePicture" class="gr-12" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleBig from '@/components/titles/TitleBig.vue'
import ListElement from '@/components/misc/ListElement.vue'
import ProfilePicture from '@/components/images/ProfilePicture.vue'
export default {
  components: {
    TitleBig,
    ListElement,
    ProfilePicture,
  },
  props: {
    elements: {
      type: Array,
      required: false,
      default: () => {
        return []
      },
    },
    title: {
      type: String,
      required: true,
    },
    showProfilePicture: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.header {
  margin-bottom: $margin-80;
  @include media(xs, m) {
    margin-bottom: $margin-50;
  }
  &__description {
    margin: $margin-20 0;
    @include media(xs, s) {
      text-align: center;
    }
  }
}
</style>
