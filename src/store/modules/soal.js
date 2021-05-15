import { db, storage } from "@/main";

const SAVE_SOAL = "SAVE_SOAL";
const CHANGE_SOAL = "CHANGE_SOAL";
const DELETE_SOAL = "DELETE_SOAL";
const SAVE_CATEGORY = "SAVE_CATEGORY";
const CHANGE_CATEGORY = "CHANGE_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORI";

export const ACTION_SAVE_SOAL = `soal/${SAVE_SOAL}`;
export const ACTION_CHANGE_SOAL = `soal/${CHANGE_SOAL}`;
export const ACTION_DELETE_SOAL = `soal/${DELETE_SOAL}`;
export const ACTION_SAVE_CATEGORY = `soal/${SAVE_CATEGORY}`;
export const ACTION_CHANGE_CATEGORY = `soal/${CHANGE_CATEGORY}`;
export const ACTION_DELETE_CATEGORY = `soal/${DELETE_CATEGORY}`;

const _CHANGE_SOAL = "_CHANGE_SOAL";
const _REMOVE_SOAL = "_REMOVE_SOAL";
const _ADD_SOAL = "_ADD_SOAL";
const _CHANGE_CATEGORY = "_CHANGE_CATEGORY";
const _REMOVE_CATEGORY = "_REMOVE_CATEGORY";
const _ADD_CATEGORY = "_ADD_CATEGORY";

export const MUTATION_CHANGE_SOAL = `soal/${_CHANGE_SOAL}`;
export const MUTATION_REMOVE_SOAL = `soal/${_REMOVE_SOAL}`;
export const MUTATION_ADD_SOAL = `soal/${_ADD_SOAL}`;
export const MUTATION_CHANGE_CATEGORY = `soal/${_CHANGE_CATEGORY}`;
export const MUTATION_REMOVE_CATEGORY = `soal/${_REMOVE_CATEGORY}`;
export const MUTATION_ADD_CATEGORY = `soal/${_ADD_CATEGORY}`;

const state = {
  soal: {
    data: []
  },
  category: {
    data: []
  }
};
const getters = {};
const actions = {
  [SAVE_SOAL]() {},
  [CHANGE_SOAL]() {},
  [DELETE_SOAL]() {},
  [SAVE_CATEGORY]() {},
  [CHANGE_CATEGORY]() {},
  [DELETE_CATEGORY]() {}
};
const mutations = {
  [_ADD_SOAL]() {},
  [_CHANGE_SOAL]() {},
  [_REMOVE_SOAL]() {},
  [_ADD_CATEGORY]() {},
  [_CHANGE_CATEGORY]() {},
  [_REMOVE_CATEGORY]() {}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
