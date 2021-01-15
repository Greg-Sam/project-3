module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/project3_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})