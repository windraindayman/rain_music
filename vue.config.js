
module.exports = {
  assetsDir: 'assets/',
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        prependData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {

  },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin())
    }
    
  },
  chainWebpack: config => {
    config
      .module
      .rule("file")
      .test(/\.(woff?|eot|ttf|otf)(\?.*)?$/,)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10000,
        name: '/assets/font/[name].[ext]'
      })
      .end();
  },
  productionSourceMap: false,
  // publicPath: process.env.NODE_ENV === 'production' ? '/music-next/' : '/'
}
