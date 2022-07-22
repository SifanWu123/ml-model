
 const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://10.100.5.82:30100',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }))
}

  
