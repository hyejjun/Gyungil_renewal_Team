const express = require('express');
const router = express.Router();

const mainRouter = require('./main/index');
const authRouter = require('./auth/index');
const userRouter = require('./user/index');
const collegeRouter = require('./college/index');
const curriculumRouter = require('./curriculum/index');
const jobinfoRouter = require('./jobinfo/index');
const communityRouter = require('./community/index');
const consultRouter = require('./consult/index');
const adminRouter = require('./admin/index');
const chatRouter = require('./chat/index.js');

router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/college', collegeRouter);
router.use('/curriculum', curriculumRouter);
router.use('/jobinfo', jobinfoRouter);
router.use('/community', communityRouter);
router.use('/consult', consultRouter);
router.use('/admin', adminRouter);
router.use('/chat', chatRouter);



module.exports = router;