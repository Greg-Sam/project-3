const { model, Schema } = require('mongoose')

module.exports = model('Users', new Schema({
  itemName: String,
  Description: String,
  Price: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  isSold: Boolean,
  condition: Array,
  category: Array
}, { timestamps: true }))
