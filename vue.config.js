// vue.config.js
module.exports = {
  // publicPath: 'online-declaration', // 部署应用包时的基本 URL 内部测试 天正
  publicPath: './', // 部署应用包时的基本 URL
  outputDir: '../online-declaration', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  lintOnSave: process.env.NODE_ENV !== 'production', // 在保存时校验格式,并在生产环境禁用
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  // 以下是pwa配置
  pwa: {
    iconPaths: {
      favicon32     : 'favicon.ico',
      favicon16     : 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon      : 'favicon.ico',
      msTileImage   : 'favicon.ico'
    }
  },
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 9090, // 服务端口
    https: false,
    hotOnly: false,
    proxy: {
      '/': {
        target: 'https://223.4.72.246:9025/api', 
        ws: false, //
        changeOrigin: true
      }
    }, // 设置代理
  },
}