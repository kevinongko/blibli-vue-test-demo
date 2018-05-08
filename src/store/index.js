import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFoo: false
  },

  getters: {
    foo: state => state.isFoo
  },

  mutations: {
    toggleFoo (state, payload) {
      state.isFoo = payload
    }
  },

  actions: {
    enableFoo ({commit}) {
      commit('toggleFoo', true)
    },

    disableFoo ({commit}) {
      commit('toggleFoo', false)
    }
  }
})