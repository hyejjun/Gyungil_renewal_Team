const express = require('express')
const router = express.Router()
const controller = require('./community.controller')


router.get('/notice',controller.notice);
router.get('/review',controller.review);
router.get('/review_write',controller.review_write);
router.get('/review_view',controller.review_view);
router.get('/ki_story',controller.ki_story);
router.get('/ki_reporter',controller.ki_reporter);
router.get('/ki_professor',controller.ki_professor);


router.post('/review_insert',controller.review_insert);

module.exports = router;