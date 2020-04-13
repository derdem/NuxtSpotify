/*
    Set Token middleware
    Tries to access the token and dispatches an action in the Vuex store

*/
export default function(context) {
  const cookie = "1234567890" // context.app.$cookies.get('access_token')
  context.store.dispatch("token/cookie", cookie)
}
