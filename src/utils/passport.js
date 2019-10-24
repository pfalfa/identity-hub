const passport = require('passport')
const LocalStrategy = require('passport-local')
const { User } = require('../models')

passport.use(
  'local',
  new LocalStrategy({ usernameField: 'email', passwordField: 'passphrase' }, (username, passphrase, done) => {
    User.login(username, passphrase)
      .then(result => {
        // return done(result)
        // console.log('==result', result)
        if (!result.success) return done(null, result)
        else return done(null, result)
      })
      .catch(err => console.error(err))
  })
)

passport.serializeUser((user, done) => {
  // console.log('==serializeUser user', user)

  done(null, user)
})

passport.deserializeUser((user, done) => {
  // console.log('==deserializeUser user', user)
  User.getByPubKey(user.pubkey).then(result => {
    // console.log('==result', result)
    done(null, result)
  })
})

module.exports = passport
