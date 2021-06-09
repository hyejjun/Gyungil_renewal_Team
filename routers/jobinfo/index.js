const express = require('express')
const router = express.Router()
const controller = require('./jobinfo.controller')


router.get('/interview',controller.jobinfo);
router.get('/recruit',controller.recruit);
router.get('/portfolio',controller.portfolio);

module.exports = router;