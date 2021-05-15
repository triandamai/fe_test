import Vue from "vue";
import Vuex from "vuex";
// import 'es6-promise/auto';
import layout from "@/store/modules/layout";
import menu from "@/store/modules/menu";
import auth from "@/store/modules/auth";
import soal from "@/store/modules/soal";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    layout,
    menu,
    auth,
    soal
  }
});

export * from "@/store/modules/auth";
export * from "@/store/modules/layout";
export * from "@/store/modules/menu";
export * from "@/store/modules/soal";
