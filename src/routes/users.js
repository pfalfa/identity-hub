const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('dashboard')
})

router.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    const user = { email: req.user.alias, pub: req.user.pub, epub: req.user.epub }
    res.render('dashboard', user)
  } else res.redirect('/login')
})

router.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

module.exports = router
