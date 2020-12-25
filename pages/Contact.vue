<template>
  <div class="main-container">
    <!-- BURGER MENU -->
    <Burger />

    <Header :title="$t('pages.contact.title')" />

    <div class="gr-container">
      <form
        class="form gr-row gr-row--align-center"
        name="contact"
        method="POST"
        netlify
      >
        <input
          class="form__input gr-6 gr--prefix-1 gr-12@xs gr-12@xs gr--prefix-0@xs gr--prefix-0@s"
          name="name"
          :placeholder="$t('pages.contact.form.placeholder.name')"
          type="text"
          required
        />
        <input
          class="form__input gr-6 gr--prefix-1 gr-12@xs gr-12@xs gr--prefix-0@xs gr--prefix-0@s"
          name="email"
          :placeholder="$t('pages.contact.form.placeholder.email')"
          type="email"
          required
        />
        <textarea
          class="form__textarea gr-6 gr--prefix-1 gr-12@xs gr-12@xs gr--prefix-0@xs gr--prefix-0@s"
          name="message"
          rows="4"
          :placeholder="$t('pages.contact.form.placeholder.message')"
        />
        <button
          class="form__button gr-6 gr--prefix-1 gr-12@xs gr-12@xs gr--prefix-0@xs gr--prefix-0@s"
          type="submit"
        >
          {{ $t('pages.contact.form.button.send') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Burger from '@/components/misc/Burger'
import Header from '@/components/main/Header.vue'

export default {
  // eslint-disable-next-line
  name: 'contact',
  components: {
    Burger,
    Header
  }
}
</script>

<style lang="scss">
.form {
  & > * {
    font-family: $font-office;
    color: $secondary;
  }

  &__input {
    margin-bottom: $margin-20;
    padding: $margin-10;
  }

  &__textarea {
    margin-bottom: $margin-20;
    padding: $margin-10;
  }

  &__input,
  &__textarea,
  &__button {
    border: solid 1px $primary;
  }

  &__button {
    height: 50px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: none;
    transition: all 0.5s ease-in-out;

    &:hover {
      font-weight: $font-weight-bold;
      color: $background;
      background-color: $secondary;
    }
  }
}
</style>
