module.exports = {
  devServer: {
    //port: 8080,
    // open: true, //配置自动启动浏览器
    proxy: {
      "/api": {
        target: "http://10.254.2.95:7002/mock/77/dp/v2", //后端ip地址及端口
        ws: true, //是否跨域
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
