/**
 * authorization of own App in spotify.
 */

import generateRandomString from "~/static/randomString"

export default function(context) {
  const clientId = "7c6023edb0fe4b699456094e93b17d8d" // Your client id
  const redirectUri = "http://192.168.178.124:5000/" // Your redirect uri

  // const stateKey = "spotify_auth_state"
  const state = generateRandomString(16)

  // localStorage.setItem(stateKey, state)
  const scope = "user-read-private user-read-email"

  var url = "https://accounts.spotify.com/authorize"
  url += "?response_type=token"
  url += "&client_id=" + encodeURIComponent(clientId)
  url += "&scope=" + encodeURIComponent(scope)
  url += "&redirect_uri=" + encodeURIComponent(redirectUri)
  url += "&state=" + encodeURIComponent(state)

  return context.redirect(url)
}
