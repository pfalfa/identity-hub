const passport = require('passport')
const LocalStrategy = require('passport-local')

passport.use(
  'local',
  new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (username, password, done) => {
    return done(null)
  })
)

passport.serializeUser((user, done) => {
  done(null)
})

passport.deserializeUser((id, done) => {
  done(null)
})

module.exports = passport
