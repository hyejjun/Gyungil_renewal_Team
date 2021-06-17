const { sequelize, User, curriculum } = require('../../models');
const auth = require('../../middleware/auth');
const ctoken = require('../../jwt');
const jwtPW = require('../../jwtPw');
const jwtId = require('../../jwtId');
const crypto = require('crypto');
const jwtName = require('../../jwtName');

let join = async (req, res) => {
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let kakao_email = (req.session.kakao != undefined) ? req.session.kakao.kakao_account.email : undefined;

    console.log(req.session.kakao);
    let curr = await curriculum.findAll({
        attribute: ['id', 'name']
    });
    curr.shift(); 

    res.render('./user/join', { curr, nickname, kakao_email })
}
let login = (req, res) => {
    let { msg, flag } = req.query;
    res.render('./user/login', { msg, flag })
}

let join_success = async (req, res) => {
    console.log(req.body);
    let { username, userid, userpw, user_birthday, user_tel, class_code, useremail } = req.body;

    let pwtoken = jwtPW(userpw)

    await User.create({
        userid,
        userpw: pwtoken,
        username,
        user_birthday,
        user_tel,
        class_code,
        useremail
    })
    res.redirect('/user/login');
}

let login_check = async (req, res) => {
    //console.log(req.body);
    let { userid, userpw } = req.body;

    let Cuserpw = jwtPW(userpw)


    let loginResult = await User.findOne({
        where: { userid, userpw: Cuserpw }
    })

    //console.log("login result = ",loginResult);
    
    if (loginResult != null) {
        let username = loginResult.dataValues.username;
        let token = ctoken(userid,username);
        console.log(token)
        res.cookie('AccessToken', token, { httpOnly: true, secure: true });

        res.redirect(`/?msg=로그인에 성공했습니다`);
    } else {
        res.redirect('/user/login?msg=아이디/비밀번호를 확인하세요&flag=0');
    }

}

let logout = (req, res) => {
    res.clearCookie('AccessToken')
    res.redirect('/?msg=로그아웃 되었습니다')
}

let id_check = async (req, res) => {
    let userid = req.query.userid;
    console.log(userid);
    let flag = false;
    let result = await User.findOne({
        where: { userid }
    })

    if (result == undefined) {
        flag = true;
    }
    res.json({
        login: flag,
        userid
    })
}

let info = async (req, res) => {
    let { msg } = req.query;

    let { AccessToken } = req.cookies;

    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;  

    let result = await User.findOne({
        where: { userid }
    })
    let classcode = result.dataValues.class_code;
    let classname;
    switch (classcode) {
        case 1:
            classname = 'VR/AR'
            break;
        case 2:
            classname = '블록체인'
            break;
        case 3:
            classname = '게임기획'
            break;
        case 4:
            classname = '게임프로그래밍'
            break;
        default:
            break;
    }
    res.render('./user/user_info', { result, classname, msg });
}

let modify = async (req, res) => {
    let { msg } = req.query;
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;

    let result = await User.findOne({
        where: { userid }
    })

    res.render('./user/user_modify', { result, msg });
}

let modify_submit = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let { user_tel, useremail } = req.body;
    await User.update({
        user_tel: user_tel,
        useremail: useremail
    }, {
        where: { userid }
    })
    res.redirect('/user/info?msg=수정완료')
}

module.exports = {
    join,
    login,
    join_success,
    login_check,
    logout,
    id_check,
    info,
    modify,
    modify_submit
}