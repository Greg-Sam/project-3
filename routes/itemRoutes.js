const router = require('express').Router()
const { Item, User } = require('../models')

router.get('/items/category/:category', (req, res) => {
  Item.find({ 'category': req.params.category }).sort({ 'createdAt': -1 }).limit(6)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.get('/items/id/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})


router.get('/items/latest', (req, res) => {
  Item.find().sort({'createdAt':-1}).limit(6)
    .then(items => {
     res.json(items)
    })
    .catch(err => console.log(err))
})


router.get('/items/search/:term', (req, res) => {
  Item.find({ $text: { $search: req.params.term } })
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.get('/items', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => console.log(err))
})

router.post('/items', (req, res) => {
  let itemObject = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    condition: req.body.condition,
    category: req.body.category,
    user: req.body.userId
  }
  
  
  Item.create(itemObject)
    .then(item => {
      User.findByIdAndUpdate(req.body.userId, {$push: {item:item._id}})
      .then(data => {
        res.json(data)
      })
      .catch(err => console.log(err))
      })
      
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