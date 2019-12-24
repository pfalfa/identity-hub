require('dotenv').config()
const { description, version, license } = require('./package.json')
const apiDoc = 'https://pfalfa-ihub-api.pfalfa.io'

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
  },
  swagger: {
    swaggerDefinition: {
      openapi: '3.0.1',
      host: apiDoc,
      basePath: '/',
      info: {
        title: 'Identity Hub API Docs',
        version,
        description,
        // contact: { email: 'eksant@gmail.com' },
        license: {
          name: license,
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        },
      },
      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header',
        },
      },
      produces: ['application/json'],
      schemes: ['https'],
      servers: [{ url: apiDoc }, { url: 'http://localhost:3003' }],
    },
    apis: ['./docs/api/*.js'],
  },
}
