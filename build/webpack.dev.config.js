const webpack = require('webpack')

const config = require('./webpack.base.config.js')

config.entry.push('webpack/hot/dev-server')
config.entry.push('webpack-hot-middleware/client')
config.devtool = '#eval-source-map'
config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new webpack.NoErrorsPlugin())

module.exports = config
