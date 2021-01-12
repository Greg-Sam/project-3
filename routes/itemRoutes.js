const router = require('express').Router()
const { Item } = require('../models')

router.get('/items', (req, res) => {
  Item.find()
    .then(hotdog => res.json(hotdog))
    .catch(err => console.log(err))
})

router.get('/items/latest', (req, res) => {
  Item.find().sort({'createdAt':-1}).limit(2)
    .then(items => {
     res.json(items)
    })
    .catch(err => console.log(err))
})

router.get('/items/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.post('/items', (req, res) => {
  Item.create(req.body)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.put('/items/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/items/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router