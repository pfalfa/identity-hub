const fs = require('fs')
const Gun = require('gun')
const cluster = require('cluster')
require('gun/sea')
require('gun/lib/webrtc')
// require('gun/lib/path')
// require('gun/lib/server')

/** gundb init */
const config = require('../config')
const init = { port: config.gundb.port }
if (config.app.httpsKey && config.app.httpsCert) {
  init.key = fs.readFileSync(config.app.httpsKey)
  init.cert = fs.readFileSync(config.app.httpsCert)
  init.db = require('https').createServer(init, Gun.serve(__dirname))
} else {
  init.db = require('http').createServer(Gun.serve(__dirname))
}

/** opening cluster */
if (cluster.isMaster) {
  return (
    cluster.fork() &&
    cluster.on('exit', function() {
      cluster.fork()
    })
  )
}

const gun = Gun({
  file: config.gundb.fileName,
  web: init.db.listen(init.port),
  peers: ['http://localhost:8778/gun', config.gundb.host],
  axe: false,
})
const sea = Gun.SEA
console.log(`Identity database peer started on port ${init.port} with /gun Handled by Process ${process.pid}`)

/** closing cluster */
process.on('SIGINT', () => {
  init.db.close(err => {
    if (err) {
      console.error(`Error Identity database : ${err}`)
      process.exit(1)
      return
    }
    console.log(`Close Identity database on Port ${init.port} Handled by Process ${process.pid}`)
    process.exit(0)
  })
})

module.exports = { gun, sea }
