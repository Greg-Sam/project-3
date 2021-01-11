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
    Type: Number,
    required: true
  },
  
  isSold: {
    type: Boolean,
    default: false
  }
  condition: {
    type: Array
  }
  category: {
    type: Array
  }
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, { timestamps: true })

module.exports = model('Item', User)