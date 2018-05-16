const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const defaultPlugin = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, './template.html')
  })

]
const devServer = {
  port: '8080',
  host: '127.0.0.1',
  overlay: {
    errors: true
  },
  open: true,
  hot: true
}
let config
config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  module: {
    rules: [{
      test: /\.styl/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    }]
  },
  devtool: '#cheap-module-evel-source-map',
  devServer,
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugin.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])

})

module.exports = config
