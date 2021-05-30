export default {
  dev: {
    '/api/': {
      target: 'http://localhost:8088',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
