import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { postLogin } from "@/utils/api.js";

export default new Vuex.Store({
  state: {
    count: 0,
    params: {
      userName: null,
      password: null,
    },
    userInfo:[]
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    onLogin(state) {
      if (
        state.formInline.username === "" ||
        state.formInline.password === ""
      ) {
        alert("账号或密码不能为空");
      } else {
        postLogin(state.params).then((res) => {
          alert("登录成功！");
          state.userInfo = res.data.user;
          console.log(res);
        });
      }
    },
  },
  actions: {},
  modules: {},
});
