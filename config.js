require('dotenv').config()

module.exports = {
  app: {
    route: '/api',
    pageLimit: 10,
    host: 'localhost',
    rateLimitSuspendTime: 5,
    rateLimitMaxHitPerIP: 500,
    port: process.env.PORT || 3003,
    loggerFilePath: './logs/access.log',
    httpsKey: process.env.HTTPS_KEY || null,
    httpsCert: process.env.HTTPS_CERT || null,
    sessionSecret: process.env.SESSION_SECRET || 'secret-key',
  },
  gundb: {
    fileName: 'db',
    port: process.env.GUNDB_PORT || 8778,
    host: process.env.GUNDB_HOST || 'http://localhost:8778/gun',
  },
}
