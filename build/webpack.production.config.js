const webpack = require('webpack')

const config = require('./webpack.base.config.js')

config.devtool = '#source-map'
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"'
  }
}))
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
}))
config.plugins.push(new webpack.optimize.OccurenceOrderPlugin())

module.exports = config
