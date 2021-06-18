const express = require('express')
const router = express.Router()
const controller = require('./jobinfo.controller')
const multer = require('multer');	// npm install multer
const path = require('path');       //npm install path

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,callback){
            callback(null,'uploads/')   //폴더명
        },
        filename:function(req,file,callback){
            callback(null, new Date().valueOf() + path.extname(file.originalname));
        }
    }),
})


router.get('/:board_name/list',controller.list);
router.post('/:board_name/list',controller.search);
router.get('/:board_name/view',controller.view);

module.exports = router;