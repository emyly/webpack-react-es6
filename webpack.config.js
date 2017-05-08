var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var path = require('path');
var ENTRY= path.resolve(__dirname + '/app');
var OUTPUT= path.resolve(__dirname + '/public');

var config={
    entry: ENTRY + '/main.js',
    output: {
        path: OUTPUT,
        filename: 'bundle.js'
    },
    module:{
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader','css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader','scss-loader']
                },
                {
                    test: /\.html$/,
                    use: ['html-loader']
                },
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: ['babel-loader']
                },
                {
                    test: /\.jsx$/,
                    use: [
                    'babel-loader',
                    ],
                    include: [
                    // path.resolve(__dirname, "app")
                    ENTRY
                    ],
                }
        ]

    },
    devServer: {
            contentBase: './public',
            inline:true
        },
    resolve:{
            extensions:['.js','.jsx','.json']
        }
}
module.exports = config;