'use strict'

const webpack = require('webpack')

const devMiddleware = require('koa-webpack-dev-middleware')
const hotMiddleware = require('koa-webpack-hot-middleware')

const config = require('../../webpack.config.js')

const compiler = webpack(config)

module.exports = {
  devMiddleware: devMiddleware(compiler, {
    historyApiFallback: true,
    noInfo: true,
    hot: true,
    inline: true
  }),
  hotMiddleware: hotMiddleware(compiler)
}
