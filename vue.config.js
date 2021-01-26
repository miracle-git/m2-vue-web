const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const svgPath = resolve('./src/assets/svg')
const { title } = require('./package')

module.exports = {
  outputDir: 'build',
  publicPath: process.env.NODE_ENV === 'production' ? '/m2web/' : '/',
  configureWebpack: {
    name: title,
    entry: './src/main.js',
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'config': '@/config',
        'models': '@/models',
        'mixins': '@/mixins',
        'plugins': '@/plugins',
        'locales': '@/locales',
        'router': '@/router',
        'store': '@/store',
        'services': '@/services',
        'utils': '@/utils',
        'views': '@/views'
      }
    }
  },
  // 添加对svg的自定义解析
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(svgPath)
    config.module.rule('icon').test(/\.svg$/)
      .include.add(svgPath).end() // 回退上下文
      .use('svg-sprite-loader').loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' }).end()
  },
  // 指定Runtime + Compile来编译组件
  runtimeCompiler: true,
  assetsDir: '.',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('./src/assets/css/vars.less'),
        resolve('./src/assets/css/mixins.less')
      ]
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // 开启跨域代理
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // },
    // proxy: {
    //   '/api': {
    //     target: 'http://dev.app.m2.com/m2',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/api': ''
    //     }
    //   }
    // }
  }
}
