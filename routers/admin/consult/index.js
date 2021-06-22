const express = require('express');
const router = express.Router();
const consultController = require('./consult.controller');


router.get('/consultList',consultController.show_consultList);
router.get('/view',consultController.show_consult);
router.get('/faq/list',consultController.show_faqList); 
router.get('/faq/write',consultController.write_faq); 
router.post('/faq/write',consultController.create_faq); 
router.get('/faq/modify',consultController.modify_faq); 
router.post('/faq/modify',consultController.update_faq); 
router.get('/faq/destroy',consultController.destroy_faq); 

router.get('/chat',consultController.show_chat); 
router.get('/chat/wait',consultController.show_wait);
router.post('/chat/consulting',consultController.show_cosulting);
router.post('/chat/start',consultController.start_chat);
router.post('/chat/end',consultController.end_chat);










module.exports = router;