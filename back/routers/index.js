const express = require('express')
const router = express.Router()
const mainRouter = require('./main/index')
const userRouter = require('./user/index')

router.use('/', mainRouter)
router.use('/user', userRouter)

module.exports = router