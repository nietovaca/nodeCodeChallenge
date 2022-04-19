const handler = require('./handler')
const express = require('express')
const router = express.Router()

router.get('/:userid/:repo', handler)
//establishes route to view API Data sent from handler function

module.exports = router; 