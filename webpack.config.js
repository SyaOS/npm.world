module.exports = (function (env){
  switch (env) {
    case 'development':
      return require('./build/webpack.dev.config.js')
    case 'production':
    default:
      return require('./build/webpack.production.config.js')
  }
})(process.env.NODE_ENV)
