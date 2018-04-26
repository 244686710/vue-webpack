const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const baseConfig = require('./webpack.config.base')

let config
if(isDev) {
    config = merge(baseConfig, {
        module: {
            rules: [
                {
                    test: /\.styl/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        'stylus-loader'
                    ]
                }
            ]
        },
        devtool: '#cheap-module-evel-source-map',
        devServer: {
            port: '3003',
            host:  '127.0.0.1',
            overlay: {
                errors: true,
            },
            open: true,
            hot: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]

    })
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../src/index.js'),
            vender: ['vue'] // 要打包的类库文件
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    use: ExtractPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            'stylus-loader'
                        ]
                    })
                }
            ]
        },
        plugins: [
            new ExtractPlugin('styles.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vender'
            }),
            new webpack.optimize.CommonsChunkPlugin({ //  将webpack生成的生成的js引入
                name: 'runtime'
            })
        ]
    })
}

module.exports = config