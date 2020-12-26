<template>
  <div class="profile-picture">
    <img
      src="~/static/medias/profile-picture-round.png"
      alt="Profile picture"
      class="profile-picture__img"
    />
  </div>
</template>

<style lang="scss">
.profile-picture {
  margin: $margin-20 0;
  text-align: center;
  &__img {
    filter: $black-white;
  }
}
</style>
