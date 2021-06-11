const express = require('express')
const router = express.Router();
const controller = require('./user.controller')
const auth = require('../../middleware/auth')

router.get('/join',controller.join)
router.get('/login',controller.login)

router.post('/join_success',controller.join_success)
router.post('/login_check',controller.login_check)

module.exports = router