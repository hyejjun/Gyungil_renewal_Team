
const axios = require('axios');
const qs = require('qs');
const nodemailer = require('nodemailer');
const smtpTransporter = require('nodemailer-smtp-transport');

let SellerAdmin = async (req,res) => {
    console.log('왓다')
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'simbianartist@gmail.com', //generated ethereal user
            pass: 'Rlatjdud2019!', //generated ethereal password 
        }
    });

    let url = `http://localhost:3000/admin/approveBTN`;
    let options = {
        from: 'simbianartist@gmail.com',
        to:'simbianartist@gmail.com',//임시로, 나중에는 body에서 가져오게끔
        subject: '이메일 인증 완료를 위해 아래 url을 클릭해주세요.',
        html: `서영님, 안녕하세요. <br/>이메일 인증을 위해 아래 URL을 클릭해주세요. <br/> ${url}`
    }

    transporter.sendMail(options, function (err, res) {
        if (err) {
            console.log(err)
        } else {
            console.log('email has been successfully sent.');

        }
        transporter.close();
    })

}


module.exports = {
    SellerAdmin
}