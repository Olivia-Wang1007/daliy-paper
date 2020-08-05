export default {
  // get请求，参数为 id
  getUsers: {
    url: "dp/v2/user/users",
  },
  // 获取组列表，
  getGroupList: {
    url: "dp/v2/group/groups/list",
  },
  // 验证用户名密码
  postLogin: {
    url: "dp/v2/user/login",
  },
  //获取任务列表
  getTaskList: {
    url: "dp/v2record/projects/:projectid/users/:userid",
  },
};
