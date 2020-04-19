<template>
  <div class="playlist gr-4@l gr-6@m gr-12">
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

<style lang="scss">
.playlist {
  margin-bottom: $margin-30;
  text-align: center;
}
</style>
