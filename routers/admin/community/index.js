const express = require('express');
const router = express.Router();
const commController = require('./community.controller');



router.get('/:board_name', commController.show_list);
router.post('/:board_name', commController.search_list);
router.get('/:board_name/write', commController.show_editor);
router.post('/:board_name/write', commController.create_article);
router.get('/:board_name/view', commController.show_article);
router.get('/:board_name/modify', commController.show_modify);
router.get('/:board_name/destroy', commController.destroy_article);
router.post('/:board_name/modify', commController.modify_article);

// router.get('/review_write', controller.review_write);
// router.get('/review_view', controller.review_view);
// router.post('/review_insert', controller.review_insert);






module.exports = router;