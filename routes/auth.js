const router = require('express').Router()
const { auth } = require('../controllers')

router.post('/register', (req, res) => {
  auth.register(req, res)
})

router.post('/login', (req, res) => {
  auth.login(req, res)
})

router.post('/forgot', (req, res) => {
  auth.forgot(req, res)
})

router.post('/reset', (req, res) => {
  auth.reset(req, res)
})

router.post('/change-password', (req, res) => {
  auth.changePassword(req, res)
})

router.delete('/unregister', (req, res) => {
  auth.unregister(req, res)
})

module.exports = router
