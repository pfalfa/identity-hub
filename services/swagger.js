const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const config = require('../config')
const swaggerConfig = swaggerJSDoc(config.swagger)
const swaggerOptions = {
  customSiteTitle: 'Identity Hub API',
  customCss: '.topbar { display: none }',
}
const swaggerUiSetup = swaggerUi.setup(swaggerConfig, swaggerOptions)

module.exports = { swaggerUi, swaggerConfig, swaggerUiSetup }
