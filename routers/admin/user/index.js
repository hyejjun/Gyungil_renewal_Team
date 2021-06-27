const express = require('express')
const router = express.Router();
const controller = require('./user.controller')


router.get('/userlist', controller.show);
router.post('/allow', controller.allow);






module.exports = router