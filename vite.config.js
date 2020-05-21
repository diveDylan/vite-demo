/**
 * vite config file
 * full configuration: https://github.com/vuejs/vite/blob/master/src/node/config.ts
 */

module.exports = {
  proxy: {
    // with options
    '/api': {
      target: 'http://218.92.223.104:50090',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}