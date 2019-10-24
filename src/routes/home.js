const router = require('express').Router()
const { User } = require('../models')
const { passport } = require('../utils')

const state = { success: false, message: null }

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/register', (req, res) => {
  if (req.isUnauthenticated()) res.render('signup', state)
  else res.redirect('users/dashboard')
})

router.post('/signup', (req, res) => {
  const { email, passphrase } = req.body
  User.create(email, passphrase)
    .then(result => {
      if (!result.success) res.render('signup', result)
      else {
        const user = { email, passphrase, pubkey: result.data }
        req.login(user, err => {
          if (err) res.render('signup', { success: false, message: err })
          else res.redirect('users/dashboard')
        })
      }
    })
    .catch(err => console.error(err))
})

router.get('/login', (req, res) => {
  if (req.isUnauthenticated()) res.render('login', state)
  else res.redirect('users/dashboard')
})

router.post('/login', (req, res) => {
  passport.authenticate('local', (success, result) => {
    console.log('==result router', success, result)
    if (!success) res.render('login', result)
    req.logIn(user, err => {
      console.log('==user', user)
      console.log('==err', err)
    })
    // else res.redirect('users/dashboard')
    // console.log('==data', data)

    // if (err) { return next(err); }
    // if (err) return res.render('login', info)
    // if (!user) {
    //   return res.redirect('/login')
    // }
    // req.logIn(user, err => {
    //   if (err) {
    //     return res.render('login', info)
    //   }
    //   return res.redirect('/users/' + user.username)
    // })
  })(req, res)
})

// router.post(
// '/login',

// passport.authenticate('local', {
//   failureRedirect: '/login',

// }),
// (req, res, next) => {
//   res.redirect('users/dashboard')
// }
// )

module.exports = router
