'use strict'

const path = require('path')

const serve = require('koa-static')

const root = path.join(__dirname, '../../public')

module.exports = serve(root)
