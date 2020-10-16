
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./mytslib.cjs.production.min.js')
} else {
  module.exports = require('./mytslib.cjs.development.js')
}
