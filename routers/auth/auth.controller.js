const axios = require('axios');
const session = require('express-session');
const qs = require('qs');
const router = require('.');
const { User } = require('../../models');
/*
restAPI : 951a56f043d3a8f6dc927444486f364c
secret = CXwWERMGYPr2kGmHfyBFmEows1RPuH36

*/
const kakao = {
    clientID: "951a56f043d3a8f6dc927444486f364c",
    clientSecret: "CXwWERMGYPr2kGmHfyBFmEows1RPuH36",
    redirectUri: "http://localhost:3000/auth/kakao/callback"
}

let kakao_login = (req, res) => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile,account_email`;

    res.redirect(kakaoAuthURL);
}

let kakao_callback = async (req, res) => {
    // axios => Promise Object
    let token;
    try {
        token = await axios({
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }, // npm install qs
            data: qs.stringify({
                grant_type: 'authorization_code',
                client_id: kakao.clientID,
                client_secret: kakao.clientSecret,
                redirectUri: kakao.redirectUri,
                code: req.query.code,
            })
        })
    } catch (err) {
        res.json(err.data)
    }


    req.session.access_token = token.data.access_token

    let user;
    try {
        user = await axios({
            method: 'GET',
            url: 'https://kapi.kakao.com/v2/user/me',
            headers: {
                Authorization: `Bearer ${token.data.access_token}`
            }
        })
    } catch (err) {
        res.json(err.data)
    }

    req.session.kakao = user.data
    
    let kakao_email = req.session.kakao.kakao_account.email

    let result = await User.findOne({
        where: { useremail: kakao_email}
    })

    if (result == null) {
        res.redirect(`/user/join`); 
    } else {
        res.redirect('/')
    }
}

let kakao_userinfo = (req, res) => {
    let { nickname, profile_image } = req.session.kakao.properties
    res.render('./user/kakao_user_info', {
        nickname,
        profile_image
    })
}

let kakao_logout = async (req, res) => {
    const { session } = req;
    const access_token = req.session.access_token;

    let unlink;
    try {
        unlink = await axios({
            method: "POST",
            url: "https://kapi.kakao.com/v1/user/unlink",
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
    } catch (error) {
        res.json("에러 error.data = ", error.data);
    }
    console.log("언링크 unlink.data = ", unlink.data);

    const { id } = unlink.data;
    //console.log(session.kakao.id)

    if (session.kakao.id == id) {
        delete session.kakao;
    }

    res.redirect('/?msg=로그아웃 되셨습니다.')

}
module.exports = { kakao_login, kakao_callback, kakao_userinfo, kakao_logout }