<template>
  <div class="login-container">
    <v-button text="Login" @click="loginPrompt"></v-button>
    <div>
      <ul v-for="item in payload" :key="item.id">
        <li>
          Track: {{ item.name }} -- Artist:
          <span v-for="artist in item.artists" :key="artist.id"
            >{{ artist.name }},
          </span>
          -- Popularity: {{ item.popularity }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VButton from "~/components/button/button.vue"

export default {
  components: {
    VButton
  },
  data: function() {
    return {
      payload: [],
      loginCallback: function(accessToken) {
        const _this = this
        this.getUserData(accessToken).then(function(response) {
          _this.payload = response.data.items
          console.log(response)
        })
      }
    }
  },
  methods: {
    loginPrompt() {
      const _this = this

      const clientId = "7c6023edb0fe4b699456094e93b17d8d"
      const redirectUri = "http://192.168.178.124:5000/accessTokenRedirect"

      function getLoginURL(scopes) {
        return (
          "https://accounts.spotify.com/authorize?client_id=" +
          clientId +
          "&redirect_uri=" +
          encodeURIComponent(redirectUri) +
          "&scope=" +
          encodeURIComponent(scopes.join(" ")) +
          "&response_type=token"
        )
      }

      const url = getLoginURL([
        "user-read-email",
        "playlist-read-private",
        "user-library-read",
        "user-top-read"
      ])

      const width = 450
      const height = 730
      const left = screen.width / 2 - width / 2
      const top = screen.height / 2 - height / 2

      window.addEventListener(
        "message",
        function(event) {
          var hash = JSON.parse(event.data)
          console.log(hash.type)
          if (hash.type === "access_token") {
            _this.loginCallback(hash.access_token)
          }
        },
        false
      )

      window.open(
        url,
        "Spotify",
        "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
          width +
          ", height=" +
          height +
          ", top=" +
          top +
          ", left=" +
          left
      )
    },
    getUserData(accessToken) {
      return this.$axios({
        url: "https://api.spotify.com/v1/me/top/tracks/?limit=50",
        headers: {
          Authorization: "Bearer " + accessToken
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  padding: 1em;
}
</style>
