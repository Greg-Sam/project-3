const { model, Schema } = require('mongoose')

const Item = new Schema({
  itemName: 
  {type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Price: {
    Type: Number
  },
  image: {
    type: String,
    required: true
  },
  isSold: {
    type: Boolean,
    default: false
  },
  condition: {
    type: [{
      type: String,
      enum: ['still in box', 'like new', 'slightly used', 'damaged but works', 'needs some work']
    }],
  },
  category: {
    type: Array
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, { timestamps: true })

module.exports = model('Item', Item)