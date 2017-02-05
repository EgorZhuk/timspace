const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
    entry: "./entry.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.html$/,
            loader: "raw-loader"
        }, {
            test: /\.png$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),        
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
};

module.exports = config;