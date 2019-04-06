const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:7001',"changeOrigin": true }));
  //只要 访问 项目地址/api 就会代理到 http://localhost:7001/api  
};
