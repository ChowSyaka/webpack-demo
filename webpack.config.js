var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: {
        index : "./js/index.js",
        register : "./js/register.js",
        purchasenew : "./js/purchasenew.js"
    },
    output: {
        path: path.resolve('./build'),
        filename: "[name].bundle.js",
        publicPath: "build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};