const express = require('express');
const router = express.Router();
const mainRouter = require('./main');
const userRouter = require('./user')
const communityRouter = require('./community');
const curriculumRouter = require('./curriculum');
const infoRouter = require('./info');
const jobRouter = require('./job');
const consultRouter = require('./consult');
const loginRouter = require('./login');
const check = require('./check.js'); 



router.use('/',loginRouter);
router.use('/community',check.check,communityRouter);
router.use('/consult',check.check,consultRouter);
router.use('/curriculum',check.check,curriculumRouter);
router.use('/info',check.check,infoRouter);
router.use('/job',check.check,jobRouter);
router.use('/main',check.check,mainRouter);
// router.use('/user', userRouter);


module.exports = router;