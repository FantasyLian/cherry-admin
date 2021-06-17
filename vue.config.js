const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

const defaultSettings = require('./src/setting')
const siteName = defaultSettings.title

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = siteName
      return args
    })
  },

  // 开启Gzip压缩
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
    }
  },

  devServer: {
    hot: true,
    open: true, // 配置自动启动浏览器
    overlay: {
      warning: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
