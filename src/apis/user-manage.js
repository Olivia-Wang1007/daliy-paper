import { get, post } from "../utils/request.js";
//获取所有人员
export function getUsers(params) {
  return get(`http://10.254.2.95:7002/mock/77/dp/v2/user/users`, params);
}

//创建人员
export function postNewUser(params) {
  return post(`http://10.254.2.95:7002/mock/77/dp/v2/user/users `, params);
}
