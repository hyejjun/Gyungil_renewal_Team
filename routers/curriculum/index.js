const express = require('express')
const router = express.Router()
const controller = require('./curriculum.controller')


router.get('/curriculum',controller.curriculum);
router.get('/curriculum_view',controller.curriculum_view);


module.exports = router