const express = require('express');
const router = express.Router();
const mainController = require('./main.controller')
const multer = require('multer'); //npm install multer
const path = require('path'); //npm install path

/* 가져다쓰기 외우기 */
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


router.get('/', mainController.main);
router.post('/visual/update', mainController.update_visual);
router.post('/visual/destroy', mainController.destroy_visual);
router.get('/visual',mainController.main); 
router.get('/curr',mainController.get_curr);
router.get('/review',mainController.get_review);
router.get('/popup',mainController.get_popup); 
router.get('/mainvisual/add',mainController.add_mainv); 
router.post('/mainvisual/create',upload.single('img'),mainController.create_mainv); 





module.exports = router;