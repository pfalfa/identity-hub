const os = require('os')
const cors = require('cors')
const http = require('http')
const https = require('https')
const logger = require('morgan')
const helmet = require('helmet')
const cluster = require('cluster')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const session = require('express-session')

/** express config */
const config = require('../config')
const routes = require('../routes')
const app = express().set('port', config.app.port)
const server =
  !config.app.httpsKey && !config.app.httpsCert
    ? http.createServer(app)
    : https.createServer(
        {
          key: fs.readFileSync(config.app.httpsKey),
          cert: fs.readFileSync(config.app.httpsCert),
        },
        app
      )

/** express init */
app.use(cors())
app.use(bodyParser.urlencoded({ limit: '30mb', extended: false }))
app.use(bodyParser.json({ limit: '30mb', extended: false }))
app.use(helmet())
app.use(compression())
app.use(logger('dev'))
app.use(session({ secret: config.app.sessionSecret, resave: false, saveUninitialized: true, cookie: { maxAge: 60000 } }))

/** router */
routes(app)

/** opening cluster */
if (cluster.isMaster) {
  const cpus = os.cpus().length
  console.log(`Mode Cluster. Forking for ${cpus} CPUs`)

  for (let i = 0; i < cpus; i++) {
    cluster.fork()
  }
} else {
  server.listen(config.app.port, () => {
    console.log(`Start Express Server on Port ${config.app.port} Handled by Process ${process.pid}`)
  })

  /** closing cluster */
  process.on('SIGINT', () => {
    server.close(err => {
      if (err) {
        console.error(`Error Express Server : ${err}`)
        process.exit(1)
        return
      }
      console.log(`Close Express Server on Port ${config.app.port} Handled by Process ${process.pid}`)
      process.exit(0)
    })
  })
}

module.exports = app
