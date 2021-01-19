const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
  const { name, username, email, password } = req.body
  User.register(new User({ name, username, email }), password, err => {
    if(err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.post('/users/login', (req, res) => {
  const { username, password } = req.body
  User.authenticate()(username, password, (err, user) => {
    if(err) { console.log(err) }
    res.json({
      token: jwt.sign({ id: user._id }, process.env.SECRET), 
      user: user._id,
      isLoggedIn: true
  })
  })
})

router.get('/user/getall/:id', (req, res) => {
  User.findOne({_id: req.params.id})
  .populate({
    path: 'item',
    model: 'Item'
  })
  .then(data => {
    res.json(data)
  })
})

router.get('/users', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

module.exports = router