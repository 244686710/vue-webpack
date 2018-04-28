const docsLoader = require.resolve('./doc-loader')
module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // 去空格
    extractCSS: !isDev, // 将页面中的样式全部打包到一个文件
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', //定义样式不重复，使用方法见header.vue
      camelCase: true
    },
    // hotReload: false 根据环境变量生产
    // loaders: { // 自定义模块
    //     'docs': docsLoader
    // },
    // preLoader: {},
    // postLoader: {}
  }
}
