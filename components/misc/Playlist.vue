<template>
  <div class="playlist gr-4">
    <iframe
      :src="url"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
