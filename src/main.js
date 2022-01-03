// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// axios引入和全局注册
import axios from "axios";
Vue.prototype.$axios = axios;
// 设置基础路径
axios.defaults.baseURL = "http://localhost:8080";

// 引入 element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import Vuex from "vuex";
import store from "./store";
Vue.use(Vuex);

axios.defaults.withCredentials = true;

// 引入swiper
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  store,
  template: "<App/>"
});
