const express = require('express');
const router = express.Router();
const currController = require('./curriculum.controller')
const multer = require('multer'); //npm install multer
const path = require('path'); //npm install path

/* 가져다쓰기 외우기 */
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

router.get('/curr', currController.show_curr);
router.get('/subject', currController.show_sub);
router.get('/curr/add', currController.add_curr);
router.post('/curr/destroy', currController.destroy_curr);
router.get('/subject/add', currController.add_sub);
router.post('/curr/add', upload.single('img'), currController.create_curr);
router.post('/subject/add', upload.single('img'), currController.create_sub);
router.get('/subject/modify', currController.modify_sub);
router.post('/subject/modify', upload.single('img'), currController.update_sub);
router.get('/subject/destroy', currController.destroy_sub);
router.get('/curr/control', upload.single('img'), currController.control_curr)
router.post('/curr/control', upload.single('img'), currController.update_curr)


module.exports = router;