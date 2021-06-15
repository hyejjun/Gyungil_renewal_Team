const express = require('express')
const router = express.Router()
const controller = require('./curriculum.controller')


router.get('/curriculum', controller.curriculum_list);
router.get('/curriculum_view', controller.curriculum_view);


module.exports = router