import {  post } from "./request";




//验证登录接口
export function postLogin(params) {
  return post(`http://10.254.2.95:7002/mock/77/dp/v2/user/login `, params);
}



