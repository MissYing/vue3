const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // 公共路径
  indexPath: 'index.html' , // 相对于打包路径index.html的路径
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static',
  lintOnSave: false,
  // runtimeCompiler: false,
  // integrity: false,
  devServer: {
    open: true,//设置自动打开
    host: '0.0.0.0',
    port: 8090,//设置端口
    proxy: {
      //设置代理
      '/api': {
        target: 'http://192.168.0.120:85',
        changeOrigin: true, // 支持跨域
        // secure: false, //如果是http接口，需要配置该参数
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
})
