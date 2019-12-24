const router = require('express').Router()
const { users } = require('../controllers')

router.get('/', (req, res) => {
  users.getByHeaders(req, res)
})

router.get('/:pubkey', (req, res) => {
  users.getByParams(req, res)
})

module.exports = router
