import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
 import axios from "axios";

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

 Vue.prototype.$axios = axios;

import api from "./http/api";
import http from "./http/http";
import "./http/axios";

// 对后端接口 进行全局注册，将api挂载到vue的原型上
Vue.prototype.$api = api;
// 对请求方式 进行全局注册
Vue.prototype.$http = http;

// 以下是创建vue实例代码，此处略
