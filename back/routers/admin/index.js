const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.post('/AdminApprove', controller.adminapprove)


module.exports = router