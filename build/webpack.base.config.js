const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  context: path.join(__dirname, '../'),
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: './app.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './node_modules')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'npm.world',
      filename: '../public/index.html',
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
