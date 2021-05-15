/* eslint-disable */
/***
 * Author Bakaran Project
 * Made by Trian Damai
 * 28 Jan 2021 - 10:14
 *
 */

import JwtService from "@/services/jwt.service";

import { auth } from "@/main";
// action types
const LOGIN = "login";
const LOGOUT = "logout";

export const ACTION_LOGIN = `auth/${LOGIN}`;
export const ACTION_LOGOUT = `auth/${LOGOUT}`;
// mutation types
const PURGE_AUTH = "logOut";
const SET_AUTH = "setUser";

const state = {
  user: JwtService.getUser()
};

const getters = {};

const actions = {
  /***
   * Login
   * @param credentials{username,password}
   * @return action login
   *
   */
  [LOGIN]({ commit }, credentials) {
    return new Promise(resolve => {
      auth
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(userCredential => {
          let user = userCredential.user;
          if (user) {
            resolve({ user: user, success: true, message: "success" });
            commit(SET_AUTH, { data: user });
          } else {
            resolve({ user: {}, success: false, message: "failed" });
          }
        })
        .catch(error => {
          resolve({ user: {}, success: false, message: error.message });
        });
    });
  },
  /***
   * Logout
   * @param
   * @return action logout
   *
   */
  [LOGOUT]({ commit }) {
    return new Promise(resolve => {
      auth
        .signOut(() => {
          commit(PURGE_AUTH, {});
          resolve({ success: true, message: "" });
        })
        .catch(() => {
          resolve({ success: false, message: "" });
        });
    });
  }
};

const mutations = {
  [SET_AUTH](state, data) {
    JwtService.setUser(data.data);
  },
  [PURGE_AUTH](state) {
    JwtService.dropUser();
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
