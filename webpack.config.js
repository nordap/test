'use strict'
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: './public',
                    from: '*.*'
                }
            ]
        }),
    ],
    devServer: {
        static: './public',
        host: 'localhost',
        port: 8080
    }
}
