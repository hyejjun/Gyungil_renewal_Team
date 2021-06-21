const express = require('express')
const router = express.Router();
const controller = require('./login.controller')


router.get('/',controller.login)
router.get('/logout',controller.logout)

router.post('/login_check',controller.login_check)




module.exports = router