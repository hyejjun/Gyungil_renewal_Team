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

router.get('/interview',controller.jobinfo);
router.get('/recruit',controller.recruit);
router.get('/portfolio',controller.portfolio);
router.get('/portfolio_submit',controller.portfolio_submit);

router.post('/portfolio_submit_success',upload.single('img'),controller.portfolio_submit_success);

module.exports = router;