const fs = require('fs')
const Gun = require('gun')
const cluster = require('cluster')
const config = require('./config')
require('gun/sea')

if (cluster.isMaster) {
  return (
    cluster.fork() &&
    cluster.on('exit', function() {
      cluster.fork()
    })
  )
}

var options = { port: config.gundb.port }
if (config.app.httpsKey && config.app.httpsCert) {
  options.key = fs.readFileSync(config.app.httpsKey)
  options.cert = fs.readFileSync(config.app.httpsCert)
  options.server = require('https').createServer(options, Gun.serve(__dirname))
} else {
  options.server = require('http').createServer(Gun.serve(__dirname))
}

const gun = Gun({ file: config.gundb.fileName, web: options.server.listen(options.port) })
global.Gun = Gun
global.gun = gun
console.log('Identity database peer started on port ' + options.port + ' with /gun')
