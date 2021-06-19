const express = require('express');
const router = express.Router();
const jobController = require('./job.controller')
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


router.get('/:board_name', jobController.show_list);
router.post('/:board_name', jobController.search_list);
router.get('/:board_name/write', jobController.show_write);
router.post('/:board_name/write', upload.single('img'), jobController.create_article);
router.get('/:board_name/view', jobController.show_article);
router.get('/:board_name/modify', jobController.show_modify);
router.post('/:board_name/modify', jobController.update_article);
router.get('/:board_name/destroy', jobController.destroy_article);



module.exports = router;