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
    enum: ['Electronics', 'Automotive', 'Household', 'Pet', 'Clothing']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, { timestamps: true })

module.exports = model('Item', Item)