const express = require('express')
const router = express.Router()
const controller = require('./college.controller')


router.get('/introduction',controller.introduction);
router.get('/history',controller.history);
router.get('/teachers',controller.teachers);
router.get('/interior',controller.interior);
router.get('/location',controller.location);

module.exports = router