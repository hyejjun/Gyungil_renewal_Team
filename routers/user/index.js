const express = require('express')
const router = express.Router();
const controller = require('./user.controller')
const auth = require('../../middleware/auth')

router.get('/join',controller.join)
router.get('/login',controller.login)
router.get('/logout',controller.logout)
router.get('/id_check',controller.id_check);
router.get('/info',controller.info);
router.get('/modify',controller.modify);

router.post('/join_success',controller.join_success)
router.post('/login_check',controller.login_check)
router.post('/modify_submit',controller.modify_submit)

module.exports = router