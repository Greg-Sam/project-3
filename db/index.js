module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


// process.env.LOCAL_URI

// 'mongodb://localhost/project3_db'