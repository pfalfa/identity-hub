const Gun = require('gun')
const gun = Gun({ file: 'db' })
// require('gun/sea')

module.exports = gun
