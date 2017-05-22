const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'app', 'application.js'),
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'client.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.min.css'),
    new OptimizeCssAssetsPlugin({ cssProcessorOptions: { discardComments: {removeAll: true} } }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
}
