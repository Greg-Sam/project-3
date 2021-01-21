require('dotenv').config()

const express = require('express')
// const bodyParser = require('body-parser')
// const postCharge = require('stripe')
const { join } = require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('./models')

const app = express()
// const router = express.Router()

// router.post('/stripe/charge', postCharge)
// router.all('*', (_, res) =>
//   res.json({ message: 'please make a POST request to /stripe/charge' })
// )

// app.use((_, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   next()
// })
// app.use(bodyParser.json())
// app.use('/api', router)

app.use(express.static(join(__dirname, 'client', 'build')))
// app.get('*', (_, res) => {
//   res.sendFile(path.resolve(__dirname, '../build/index.html'))
// })
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findById(id)))
  // .populate('')
  // .then(user => cb(null, user)
  // .catch(err => cb(err))))

app.use(require('./routes'))

require('./db')
  .then(() => app.listen(process.env.PORT || 3002))
  .catch(err => console.log(err))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})