const express = require('express')
const router = express.Router()
const controller = require('./curriculum.controller')


router.get('/curriculum',controller.curriculum);

module.exports = router