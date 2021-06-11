const express = require('express');
const router = express.Router();
const jobController = require('./job.controller')


router.get('/:params1',jobController.show_list);
router.get('/:params1/write',jobController.show_write);
router.post('/:params1/write',jobController.create_article);
router.get('/:params1/view',jobController.show_article);
router.get('/:params1/modify',jobController.show_modify);
router.post('/:params1/modify',jobController.update_article);
router.get('/:params1/destroy',jobController.destroy_article);



module.exports = router;