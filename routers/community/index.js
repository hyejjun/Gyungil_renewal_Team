const express = require('express')
const router = express.Router()
const controller = require('./community.controller')

router.get('/:board_name/list', controller.list)
router.get('/:board_name/view', controller.view)
router.get('/review', controller.review);
router.get('/review_write', controller.review_write);
router.get('/review_view', controller.review_view);
router.post('/review_insert', controller.review_insert);
router.get('/review_modify', controller.review_modify);
router.post('/review_modify_submit', controller.review_modify_submit);

module.exports = router;