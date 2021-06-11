const express = require('express');
const router = express.Router();
const consultController = require('./consult.controller');


router.get('/consultList',consultController.show_consultList);
router.get('/faq/list',consultController.show_faqList); 
router.get('/faq/write',consultController.write_faq); 
router.post('/faq/write',consultController.create_faq); 
router.get('/faq/modify',consultController.modify_faq); 
router.post('/faq/modify',consultController.update_faq); 
router.get('/faq/destroy',consultController.destroy_faq); 







module.exports = router;