import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    SWITCH_COLLAPSE (state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
  },
  modules: {
  },

  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
