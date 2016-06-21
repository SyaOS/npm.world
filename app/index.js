'use strict'

require('dotenv').config()
const debug = require('debug')('npm.world')
const koa = require('koa')

const staticMiddleware = require('./middlewares/static')
const webpackDevMiddleware = require('./middlewares/webpack-dev')

const app = module.exports = koa()

// app.use(staticMiddleware)
switch (process.env.NODE_ENV) {
  case 'development':
    app.use(webpackDevMiddleware.devMiddleware)
    app.use(webpackDevMiddleware.hotMiddleware)
    break
  default:
    app.use(staticMiddleware)
}

if (require.main === module) {
  const server = app.listen(process.env.PORT,
    () => debug('listen', server.address()))
}
