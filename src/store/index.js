import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    User: "",
    verimg: "http://localhost:8080/verifyCode",
    baseImg: "http://localhost:8080/img?ImgPath=",
    upImg: "http://localhost:8080/uploadWithoutAction"
  },
  mutations,
  actions,
  getters,
  modules: {}
});

export default store;
