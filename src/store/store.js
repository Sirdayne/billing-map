import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    entity: [],
  },
  getters: {
    getEntity: (state) => {
      return state.entity;
    },
  },
  mutations: {
    setEntity: (state, payload) => {
      state.entity = payload;
    },
  },
  actions: {
    actionSetEntity: ({commit}, payload) => {
      commit('setEntity', payload);
    },
  },
  modules: {

  }
});
