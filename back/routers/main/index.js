const express = require('express')
const router = express.Router()
const controller = require('./main.controller')

router.get('/', controller.insert)
router.post('/insertdata', controller.insertData)
router.get('/main', controller.main)
router.post('/maindata', controller.mainData)
router.post('/auction', controller.auction)


module.exports = router