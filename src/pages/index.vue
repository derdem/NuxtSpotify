<template>
  <div>
    <main class="">
      <!-- <v-logo class="logo" :width="logoSize" :height="logoSize" />
      <h1 class="title">
        <span class="green-2">Nuxt</span>
        <span class="green-3">Stack</span>
      </h1>
      <nuxt-link to="/spotifyAuthorize"
        ><v-button text="Authorize Spotify" @click="hello"></v-button
      ></nuxt-link>
      <v-button text="Get my data" @click="spotifyApi"></v-button>
      <v-button text="hello" @click="hello"></v-button> -->
      <spotify-login></spotify-login>
    </main>
  </div>
  <!-- <div v-if="$installer.canInstall" class="callout">
        <v-button text="Install PWA" @click="$installer.prompt" />
      </div> -->
  <!-- <footer v-if="$installer.hasInstalled" class="footer">
      Installed PWA
    </footer> -->
</template>

<script>
// import VButton from "~/components/button/button.vue"
// import VLogo from "~/assets/logo.svg"
import SpotifyLogin from "~/components/SpotifyLogin.vue"

// const baseAddress = "https://api.spotify.com"

export default {
  staticData: () => ({
    logoSize: 240
  }),
  components: {
    // VButton,
    // VLogo,
    SpotifyLogin
  },
  data: function() {
    return {
      spotifyData: null
    }
  },
  methods: {
    spotifyApi() {
      this.$axios("/hello")
    },
    hello() {
      console.log("hello")
    }
  }
}
</script>

<style lang="scss">
.grid {
  display: grid;
  min-height: 100vh;
  grid-template-columns:
    [bleed-start footer-start]
    minmax(2rem, 1fr)
    [content-start]
    auto
    [content-end]
    minmax(2rem, 1fr)
    [bleed-end footer-end];
  grid-template-rows:
    [bleed-start]
    minmax(2rem, 1fr)
    [content-start]
    auto
    [content-end]
    minmax(2rem, 1.2fr)
    [footer-start]
    auto
    [footer-end bleed-end];
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: content;
}

.title {
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}

.callout {
  margin-top: 4rem;
}

.footer {
  grid-area: footer;
  padding: 1em 2em;
  background: $green-2;
  text-align: center;
  color: $white;
}
</style>
