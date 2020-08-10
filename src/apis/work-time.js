import { get } from "../utils/request.js";
//任务列表aa-03920159
export function getTask(params) {
  return get(
    `http://10.254.2.95:7002/mock/77/dp/v2/record/projects/aa-1/users/aa-03920159`,
    params
  );
}