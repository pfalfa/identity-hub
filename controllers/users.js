const { gun } = require('../services/gundb')

const getUserByPubKey = (pubkey, callback) => {
  gun.user(pubkey).once(data => {
    if (!data)
      return callback(null, {
        status: 403,
        success: false,
        message: 'You do not have enough permission to perform this action',
        data: null,
      })

    delete data._
    delete data.auth
    delete data.profile
    return callback(null, { status: 200, success: true, message: null, data })
  })
}

const getByHeaders = (req, res) => {
  const { authorization } = req.headers
  if (!authorization) return res.status(400).json({ success: false, message: 'Invalid payload', data: null })
  getUserByPubKey(authorization, (err, result) => {
    if (err) return res.status(500).json({ status: 500, success: false, message: err, data: null })
    return res.status(result.status).json(result)
  })
}

const getByParams = (req, res) => {
  const { pubkey } = req.params
  if (!pubkey) return res.status(400).json({ success: false, message: 'Invalid payload', data: null })
  getUserByPubKey(pubkey, (err, result) => {
    if (err) return res.status(500).json({ status: 500, success: false, message: err, data: null })
    return res.status(result.status).json(result)
  })
}

module.exports = users = { getByHeaders, getByParams }
