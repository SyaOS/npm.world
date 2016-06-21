'use strict'

const path = require('path')

const webpack = require('webpack')
const devMiddleware = require("koa-webpack-dev-middleware")
const hotMiddleware = require('koa-webpack-hot-middleware')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// const config = require('../../webpack.config.js')
const config = {
  context: path.join(__dirname, '../../'),
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'app.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './node_modules')]
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'npm.world',
      filename: '../public/index.html',
      template: './src/index.html'
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
const compiler = webpack(config)

module.exports = {
  devMiddleware: devMiddleware(compiler, {
    noInfo: false,
    quiet: false,
    lazy: true,
    stats: {
        colors: true
    }
  }),
  hotMiddleware: hotMiddleware(compiler)
}
