const express = require('express');
const router = express.Router();
const infoController = require('./info.controller')
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



router.get('/intro', infoController.show_intro);
router.get('/intro/modify', infoController.modify_intro);
router.post('/intro/modify', infoController.update_intro);


router.post('/interior/create', upload.single('img'), infoController.create_interior);
router.post('/interior/destroy', infoController.destroy_interior);
router.get('/interior', infoController.interior);
router.get('/interior/add', infoController.add_interior);
router.post('/interior/update', infoController.update_interior);
router.post('/interior/destroy', infoController.destroy_interior);



router.get('/history', infoController.get_history);
router.post('/dlthistory', infoController.dlt_history);
router.post('/updatehistory', infoController.update_history);
router.post('/addhistory', infoController.add_history);


router.get('/teacher', infoController.get_teacher);
router.get('/teacher/add', infoController.add_teacher);
router.post('/create_teacher', upload.single('img'), infoController.create_teacher);
router.get('/teacher/modify', infoController.modify_teacher)
router.post('/teacher/modify', upload.single('img'), infoController.update_teacher)
router.get('/teacher/destroy', infoController.destroy_teacher)
router.post('/teacher/show', infoController.modify_teacherShow)

router.get('/location', infoController.show_location);
router.post('/location/modify', infoController.update_location);
router.get('/location/modify', infoController.show_location_modify);

module.exports = router;