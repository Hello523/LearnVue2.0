
var path = require('path')

module.exports = {
  build: { // production 环境
    env: require('./prod.env'), // 使用 config/prod.env.js 中定义的编译环境
    index: path.resolve(__dirname, '../dist/index.html'), // 编译输入的 index.html 文件
    assetsRoot: path.resolve(__dirname, '../dist'), // 编译输出的静态资源路径
    assetsSubDirectory: 'static', // 编译输出的二级目录
    assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    productionSourceMap: true, // 是否开启 cssSourceMap
    productionGzip: false, // 是否开启 gzip
    productionGzipExtensions: ['js', 'css'], // 需要使用 gzip 压缩的文件扩展名
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {  // dev 环境
    env: require('./dev.env'), // 使用 config/dev.env.js 中定义的编译环境
    port: 8088, // 运行测试页面的端口
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',// 编译输出的二级目录
    assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    proxyTable: {}, //需要 proxyTable 代理的接口（可跨域）
    cssSourceMap: false // 是否开启 cssSourceMap
  }
}
