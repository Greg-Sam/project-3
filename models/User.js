const { model, Schema } = require('mongoose')

const User = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
}, { timestamps: true })


module.exports = model('User', User)