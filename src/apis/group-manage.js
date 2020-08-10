import { get ,post} from "../utils/request.js";

//列出组
export function getGroup(params) {
  return get(`http://10.254.2.95:7002/mock/77/dp/v2/group/groups/list`, params);
}

//创建组
export function postNewGroup(params) {
    return post(`http://10.254.2.95:7002/mock/77/dp/v2/group/groups `, params);
  }
  
