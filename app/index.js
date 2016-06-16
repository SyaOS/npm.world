'use strict'

require('dotenv').config()
const debug = require('debug')('npm.world')
const koa = require('koa')

const staticMiddleware = require('./middlewares/static')

const app = module.exports = koa()
app.use(staticMiddleware)

if (require.main === module) {
  const server = app.listen(process.env.PORT,
    () => debug('listen', server.address()))
}
