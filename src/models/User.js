// const Gun = require('./Gun')
const gun = require('./Gun')
const user = gun.user()

const auth = (alias, pass, callback, opt) => {
  return user.auth(alias, pass, callback, opt)
}

const logout = (opt, callback) => {
  return user.leave(opt, callback)
}

const create = async (alias, pass) => {
  const result = await user.create(alias, pass)
  console.log('==result', result)
  return result
}

const remove = (alias, pass, callback) => {
  return user.delete(alias, pass, callback)
}

module.exports = { create, auth }
