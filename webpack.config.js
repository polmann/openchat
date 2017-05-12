const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: path.join(__dirname, 'app', 'application.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
};