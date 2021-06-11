require('dotenv').config();
const crypto = require('crypto');
const ctoken = require('../jwt');

module.exports = (req, res, next) => {
    console.log(req.cookies);
    let { AccessToken } = req.cookies

    if (AccessToken == undefined) {
        res.redirect('/user/login?msg=로그인을 진행해주세요')
    }

    let [header, payload, sign] = AccessToken.split('.');           
    let signature = getSignature(header, payload); 
    console.log(signature);         


    if (sign == signature) {   
        console.log('검증된 토큰입니다');   
       
        let { userid, exp } = JSON.parse(Buffer.from(payload, 'base64').toString())
        console.log(exp);      
        let nexp = new Date().getTime();    
        if (nexp > exp) {
            res.clearCookie('AccessToken')
            res.redirect('/?msg=토큰만료')
        }
       
        req.userid = userid
        next();
    } else {
        res.redirect('/user/login?msg=부적절한토큰')
    }
}

function getSignature(header, payload) {
    const signature = crypto.createHmac('sha256', Buffer.from(process.env.salt))
        .update(header + "." + payload)
        .digest('base64')
        .replace('=', '')
        .replace('==', '');
    return signature;
}