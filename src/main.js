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

