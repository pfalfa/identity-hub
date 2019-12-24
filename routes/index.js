const rateLimit = require('express-rate-limit')

const config = require('../config')
const limiter = rateLimit({
  windowMs: config.app.rateLimitSuspendTime * 60 * 1000,
  max: config.app.rateLimitMaxHitPerIP,
})

module.exports = app => {
  app.use(`${config.app.route}/auth`, limiter, require('./auth'))
  app.use(`${config.app.route}/users`, limiter, require('./users'))
}
