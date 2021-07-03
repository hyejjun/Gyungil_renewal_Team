const express = require('express');
const router = express.Router();
const consultController = require('./consult.controller');


router.get('/consultList', consultController.show_consultList);
router.get('/view', consultController.show_consult);
router.get('/faq/list', consultController.show_faqList);
router.get('/faq/write', consultController.write_faq);
router.post('/faq/write', consultController.create_faq);
router.get('/faq/modify', consultController.modify_faq);
router.post('/faq/modify', consultController.update_faq);
router.get('/faq/destroy', consultController.destroy_faq);

router.get('/chat', consultController.show_chat);
//실시간 채팅 접속했을 때 화면 뿌려주는 부분 

router.get('/chat/wait', consultController.show_wait);
// 대기중인 클라이언트 보여주는 부분 

router.post('/chat/consulting', consultController.show_cosulting);
//상담중인 클라이언트 보여주는 부분 

router.post('/chat/start', consultController.start_chat);
//채팅 시작 

router.post('/chat/end', consultController.end_chat);
//채팅 종료 










module.exports = router;