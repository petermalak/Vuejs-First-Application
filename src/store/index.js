import Vue from "vue";
import Vuex from "vuex";
import methods from './module/methods';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    methods
  }
});
