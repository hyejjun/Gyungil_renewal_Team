const express = require('express')
const router = express.Router()
const controller = require('./chat.controller')


router.get('/clientinfo', controller.get_clientInfo)
router.post('/consult', controller.start_consult)
router.get('/get', controller.get_message)



module.exports = router;