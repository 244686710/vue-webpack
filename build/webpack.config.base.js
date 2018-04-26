const path = require('path');
const webpack = require('webpack')
 
const config = {
    // mode: process.env.NODE_ENV,
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-[hash].[ext]'
                        }
                    }

                ]
            }
        ]
    }
}



module.exports = config