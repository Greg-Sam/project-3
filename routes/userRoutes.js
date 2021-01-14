const router = require('express').Router()
const { User } = require('../models')

router.get('/users', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

router.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router