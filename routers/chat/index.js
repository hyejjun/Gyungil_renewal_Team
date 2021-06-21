const express = require('express')
const router = express.Router()
const controller = require('./chat.controller')


// router.get('/clientinfo', controller.get_clientInfo)
// router.post('/realtimeconsult', controller.get_chat)
// router.post('/start', controller.start_consult)
router.get('/', controller.getchat); 
router.post('/request', controller.request)
router.post('/send', controller.send)

// router.get('/get', controller.get_message)



module.exports = router;