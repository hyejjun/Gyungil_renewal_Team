const express = require('express')
const router = express.Router()
const controller = require('./chat.controller')
const multer = require('multer'); //npm install multer


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, 'uploads')//폴더명
        },
        filename: function (req, file, callback) {
            callback(null, new Date().valueOf() + path.extname(file.originalname))
        } //path.extname(file.originalname)): 확장자 가져오는 코드
    }),
})

router.get('/', controller.getchat);
//실시간 채팅 들어왔을 때 그려주는 부분 

router.post('/request', controller.request);
// 실시간 상담 요청했을 때 

router.post('/end', upload.single('data'), controller.end);
//실시간 상담 나갔을 때 

router.post('/send', controller.send)
//메시지 보낼 때. 





module.exports = router;