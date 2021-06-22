const express = require('express')
const router = express.Router()
const controller = require('./chat.controller')
const multer = require('multer'); //npm install multer


const upload = multer({
  storage:multer.diskStorage({
      destination:function(req,file,callback){
          callback(null,'uploads')//폴더명
      },
      filename:function(req,file,callback){
          callback(null,new Date().valueOf()+ path.extname(file.originalname))
      } //path.extname(file.originalname)): 확장자 가져오는 코드
  }),
})

router.get('/', controller.getchat); 
router.post('/request', controller.request); 
router.post('/end', upload.single('data'),controller.end);
router.post('/send', controller.send)

// router.get('/get', controller.get_message)



module.exports = router;