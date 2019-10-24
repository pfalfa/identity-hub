const gun = require('./Gun')
const user = gun.user()

const login = (alias, pass) => {
  return new Promise((resolve, reject) => {
    if (!alias || !pass) return resolve({ success: false, message: 'Email or Passphrase cannot empty', data: null })

    try {
      user.auth(alias, pass, ack => {
        if (ack && ack.err) return resolve({ success: false, message: ack.err, data: null })
        ack.sea.email = alias
        return resolve({ success: true, message: 'Login user successfully', data: ack.sea })
      })
    } catch (error) {
      return reject(error)
    }
  })
}

const logout = (opt, callback) => {
  return user.leave(opt, callback)
}

const create = (alias, pass) => {
  return new Promise((resolve, reject) => {
    if (!alias || !pass) return resolve({ success: false, message: 'Email or Passphrase cannot empty', data: null })

    try {
      user.create(alias, pass, ack => {
        if (ack && ack.err) return resolve({ success: false, message: ack.err, data: null })
        return resolve({ success: true, message: 'Create user successfully', data: ack.pub })
      })
    } catch (error) {
      return reject(error)
    }
  })
}

const getByPubKey = pubkey => {
  return new Promise((resolve, reject) => {
    if (!pubkey) return resolve({ success: false, message: 'Public key cannot empty', data: null })

    try {
      gun.user(pubkey).once(data => {
        return resolve(data)
      })
    } catch (error) {
      return reject(error)
    }
  })
}

const remove = (alias, pass, callback) => {
  return user.delete(alias, pass, callback)
}

module.exports = { create, login, getByPubKey }
