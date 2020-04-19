<template>
  <div class="section section__music">
    <div class="gr-container">
      <div class="gr-row gr-row--align-center">
        <TitleSection text="current playlists" class="gr-12" />
        <!-- <iframe
          v-for="(url, index) in playlistsUrls"
          :key="index"
          :src="url"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe> -->
        <Playlist
          v-for="(url, index) in playlistsUrls"
          :key="index"
          :url="url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from '@/components/titles/TitleSection.vue'
import Playlist from '@/components/misc/Playlist.vue'
export default {
  components: {
    TitleSection,
    Playlist
  },
  data() {
    return {
      playlistsUrls: [
        'https://open.spotify.com/embed/playlist/2z3KX0uApohGtGlDPQS5XI',
        'https://open.spotify.com/embed/playlist/4SnWbzt0GwOeBI3lYiUrhr'
      ]
    }
  }
}
</script>

<style lang="scss">
.section {
  &__music {
    margin-bottom: $margin-50;
    @include media(xs, m) {
      margin-bottom: $margin-30;
    }
    &--description {
      text-align: center;
    }
  }
}
</style>
