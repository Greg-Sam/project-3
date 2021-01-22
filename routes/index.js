const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./itemRoutes.js'))
// router.use('/api', require('./firebaseRoutes.js'))
module.exports = router
