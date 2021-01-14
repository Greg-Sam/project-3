const { model, Schema } = require('mongoose')

const Item = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
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
      type: String,
    enum: ['New', 'New—open box', 'Used-good condition', 'Used-some wear and tear']
  },
  category: {
    type: String,
    enum: ['Electronics', 'Automotive', 'Household', 'Pets', 'Clothing']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, { timestamps: true })

Item.index({
  name: 'text',
  description: 'text',
  category: 'text',
  condition: 'text'
}, {
  weights: {
    name: 5,
    description: 1,
    category: 1,
    condition: 1
  },
});

module.exports = model('Item', Item)