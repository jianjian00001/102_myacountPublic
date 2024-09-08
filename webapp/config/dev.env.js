'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_BACKEND_ROOT_URL_JAVA: '"http://127.0.0.1:8088/"'
})
