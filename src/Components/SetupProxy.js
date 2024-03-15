const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Specify the base API path (change it based on your API)
    createProxyMiddleware({
      target: 'https://www.swiggy.com',  // Specify the target URL of your API
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',  // Remove the '/api' prefix when forwarding the request
      },
    })
  );
};