const { gun, sea } = require('./gundb')
const app = require('./express')
const service = { gun, sea, app }

module.exports = service
