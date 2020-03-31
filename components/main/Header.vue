<template>
  <div class="header">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleBig text="Matthieu TOUSSAINT - Web Developer" class="gr-12" />
        <ul class="header__description gr-12@xs gr-12@s">
          <ListElement text="4th year student @ HETIC" />
          <ListElement text="Full stack web developer" />
          <ListElement text="Freelance consultant" />
        </ul>
        <ProfilePicture class="gr-12" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleBig from '@/components/titles/TitleBig.vue'
import ListElement from '@/components/misc/ListElement.vue'
import ProfilePicture from '@/components/images/Profilepicture.vue'
export default {
  components: {
    TitleBig,
    ListElement,
    ProfilePicture
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.header {
  &__description {
    margin: $margin-20 0;
    @include media(xs, s) {
      text-align: center;
    }
  }
}
</style>
