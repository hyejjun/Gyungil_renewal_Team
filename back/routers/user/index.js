const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.post('/SellerAdmin', controller.SellerAdmin)


module.exports = router