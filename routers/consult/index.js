const express = require('express')
const router = express.Router()
const controller = require('./consult.controller')


router.get('/consulting',controller.consulting);
router.get('/faq',controller.faq);
router.post('/consulting_submit',controller.consulting_submit);

module.exports = router;