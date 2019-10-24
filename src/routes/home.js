const router = require('express').Router()
// const { User } = require('../models')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/register', (req, res) => {
  if (req.isUnauthenticated()) res.render('signup')
  // else res.redirect('users/dashboard')
})

router.get('/login', (req, res) => {
  if (req.isUnauthenticated()) res.render('login')
})

router.post('/signup', (req, res) => {
  // const { username, email, password } = req.body
  // User.create(req, res)
})

// router.post(
//   '/login',
//   passport.authenticate('local', {
//     failureRedirect: '/login',
//   }),
//   (req, res, next) => {
//     res.redirect('users/dashboard')
//   }
// )

module.exports = router
