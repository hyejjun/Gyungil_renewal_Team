const express = require('express')
const router = express.Router()
const controller = require('./auth.controller')

router.get('/kakao', controller.kakao_login);
router.get('/kakao/callback', controller.kakao_callback);
router.get('/kakao/kakao_userinfo', controller.kakao_userinfo);
router.get('/kakao/unlink', controller.kakao_logout);

module.exports = router;