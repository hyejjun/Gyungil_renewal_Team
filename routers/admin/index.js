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



router.use('/', loginRouter);
router.use('/community', communityRouter);
router.use('/consult', consultRouter);
router.use('/curriculum', curriculumRouter);
router.use('/info', infoRouter);
router.use('/job', jobRouter);
router.use('/main', mainRouter);
// router.use('/user', userRouter);


module.exports = router;