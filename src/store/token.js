export const state = () => ({
  token: null,
  expiration: null
})

export const mutations = {
  setToken(state, payload) {
    state.token = payload
  }
}

export const getters = {
  getToken(state) {
    return state.token
  }
}

export const actions = {
  cookie: (context, cookie) => {
    context.commit("setToken", cookie)
  }
}
