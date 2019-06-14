const path = require('path')
const svgFilePath = path.join(__dirname, 'src/assets/icons/')
const nodeModulePath = path.join(__dirname, 'node_modules/')
const remoteServer = 'http://192.168.251.211:8080'

module.exports = {
  baseUrl: './',
  assetsDir: 'assets',
  devServer: {
    proxy: {
      '/api': {
        target: remoteServer,
        ws: true,
        changeOrigin: true
      },
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue-svgicon')
      .test(/\.svg$/)
      .exclude.add(/-bg\.svg$/).end()
      .use('svgicon')
      .loader('@yzfe/vue-svgicon-loader')
      .options({
        idSeparator: '_',
        svgFilePath
      })

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = options.transformAssetUrls || {}
        options.transformAssetUrls['svg-icon'] = ['data']
        return options
      })

    config.module.rule('svg').exclude.add(svgFilePath)

    config.resolve.alias.set('@icon', svgFilePath)
    config.resolve.alias.set('node_modules', nodeModulePath)

    config.resolve.symlinks(false)
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  css: {
    modules: false
  }
}
