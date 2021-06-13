const express = require('express');
const router = express.Router();
const jobController = require('./job.controller')


router.get('/:board_name', jobController.show_list);
router.get('/:board_name/write', jobController.show_write);
router.post('/:board_name/write', jobController.create_article);
router.get('/:board_name/view', jobController.show_article);
router.get('/:board_name/modify', jobController.show_modify);
router.post('/:board_name/modify', jobController.update_article);
router.get('/:board_name/destroy', jobController.destroy_article);



module.exports = router;