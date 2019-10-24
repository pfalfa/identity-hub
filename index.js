// const path = require('path')
// const Gun = require('gun')
const helmet = require('helmet')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const { passport } = require('./src/utils')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.SESSION_SECRET || 'some-secret',
    cookie: {
      expires: new Date(Date.now() + 60 * 60 * 1000),
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
  res.locals.user = req.user || null
  next()
})

require('./src/routes')(app)
app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
