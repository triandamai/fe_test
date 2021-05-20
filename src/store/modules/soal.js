import { db, storage } from "@/main";
import { resolve } from "core-js/fn/promise";

const GET_SOAL = "GETSOAL";
const SAVE_SOAL = "SAVE_SOAL";
const CHANGE_SOAL = "CHANGE_SOAL";
const DELETE_SOAL = "DELETE_SOAL";
const GET_CATEGORY = "GET_CATEGORY";
const SAVE_CATEGORY = "SAVE_CATEGORY";
const CHANGE_CATEGORY = "CHANGE_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORI";

export const ACTION_GET_SOAL = `soal/${GET_SOAL}`;
export const ACTION_SAVE_SOAL = `soal/${SAVE_SOAL}`;
export const ACTION_CHANGE_SOAL = `soal/${CHANGE_SOAL}`;
export const ACTION_DELETE_SOAL = `soal/${DELETE_SOAL}`;
export const ACTION_GET_CATEGORY = `soal/${GET_CATEGORY}`;
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
  [GET_SOAL]({ commit }) {
    return new Promise(resolve => {
      db.collection("SOAL")
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            commit(_ADD_SOAL, doc.data());
          });
        });
    });
  },
  [SAVE_SOAL]({ commit }, data) {
    return new Promise(resolve => {
      let ref = db.collection("SOAL").doc();
      data.id = ref.id;
      ref
        .set(data, { merge: true })
        .then(result => {
          resolve({ success: true, message: "success", value: data });
          commit(_ADD_SOAL, data);
        })
        .catch(err => {
          resolve({ success: false, message: "success", value: data });
        });
    });
  },
  [CHANGE_SOAL]({ commit }, data) {
    return new Promise(resolve => {
      db.collection("SOAL")
        .doc(data.id)
        .set(data, { merge: true })
        .then(() => {
          resolve({ success: true, message: "success", value: data });
          commit(_CHANGE_SOAL, data);
        })
        .catch(() => {
          resolve({ success: false, message: "success", value: data });
        });
    });
  },
  [DELETE_SOAL]({ commit }, data) {
    return new Promise(resolve => {
      db.collection("SOAL")
        .doc(data.id)
        .delete()
        .then(() => {
          resolve({ success: true, message: "success", value: data });
          commit(_REMOVE_SOAL, data);
        })
        .catch(() => {
          resolve({ success: false, message: "success", value: data });
        });
    });
  },
  [GET_CATEGORY]({ commit }) {
    return new Promise(resolve => {
      db.collection("CATEGORY")
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            commit(_ADD_CATEGORY, doc.data());
          });
        });
    });
  },
  [SAVE_CATEGORY]({ commit }, data) {
    return new Promise(resolve => {
      let ref = db.collection("CATEGORY").doc();
      data.id = ref.id;
      ref
        .set(data, { merge: true })
        .then(result => {
          commit(_ADD_CATEGORY, data);
          resolve({ success: true, message: "success", value: data });
        })
        .catch(err => {
          resolve({ success: false, message: "Failed", value: {} });
        });
    });
  },
  [CHANGE_CATEGORY]({ commit }, data) {
    return new Promise(resolve => {
      db.collection("CATEGORY")
        .doc(data.id)
        .set(data, { merge: true })
        .then(() => {
          resolve({ success: true, message: "success", value: data });
          commit(_CHANGE_CATEGORY, data);
        })
        .catch(() => {
          resolve({ success: false, message: "success", value: data });
        });
    });
  },
  [DELETE_CATEGORY]({ commit }, data) {
    return new Promise(resolve => {
      data
        .collection("CATEGORY")
        .doc(data.id)
        .delete()
        .then(() => {
          resolve({ success: true, message: "success", value: data });
          commit(_REMOVE_CATEGORY, data);
        })
        .catch(() => {
          resolve({ success: false, message: "success", value: data });
        });
    });
  }
};
const mutations = {
  [_ADD_SOAL]({ soal }, data) {
    var exist = soal.data.some(s => s.id == data.id);
    if (!exist) soal.data.push(data);
  },
  [_CHANGE_SOAL]({ soal }, data) {
    var index = soal.data.map(s => s.id).indexOf(data.id);
    Object.assign(soal.data[index], data);
  },
  [_REMOVE_SOAL]({ soal }, data) {
    var index = soal.data.map(s => s.id).indexOf(data.id);
    soal.data.splice(index);
  },
  [_ADD_CATEGORY]({ category }, data) {
    var exist = category.data.some(cat => cat.id == data.id);
    if (!exist) category.data.push(data);
  },
  [_CHANGE_CATEGORY]({ category }, data) {
    var index = category.data.map(cat => cat.id).indexOf(data.id);
    Object.assign(category.data[index], data);
  },
  [_REMOVE_CATEGORY]({ category }, data) {
    var index = category.data.map(cat => cat.id).indexOf(data.id);
    category.data.splice(index);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
