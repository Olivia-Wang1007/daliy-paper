import axios from "axios";
// import QS from "qs";
// 请求超时时间
axios.defaults.timeout = 15000;
axios.defaults.baseURL = "/api";

// post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
// axios.interceptors.request.use(
//   (config) => {
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     const token = "45f8f587-7b46-462f-a8c4-1ca4dc64a336";
//     if (token) {
//       // 判断是否存在token，如果存在的话，则每个http header都加上token
//       config.headers.Token = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.error(error);
//   }
// );
// 响应拦截器
// axios.interceptors.response.use(
//   (response) => {
//     if (response.status === 200) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(response);
//     }
//   },
// 服务器状态码不是200的情况
//   (error) => {
//     if (error.response.status) {
//       console.log(error);
//     }
//     return Promise.reject(error.response);
//   }
// );

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (!err.response) {
          alert("get请求错误");
        } else {
          reject(err);
          console.log(err.response, "异常2");
        }
      });
  });
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (!err.response) {
          alert({
            showClose: true,
            message: "post请求错误",
            type: "error",
          });
        } else {
          reject(err);
          console.log(err.response, "异常2");
        }
      });
  });
}

export default axios;
