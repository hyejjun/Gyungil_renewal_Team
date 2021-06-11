const { sequelize, User } = require('../../models');
const auth = require('../../middleware/auth');
const ctoken = require('../../jwt');
const jwtPW = require('../../jwtPw');
const crypto = require('crypto');

let join = (req, res) => {
    res.render('./user/join')
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

    console.log(loginResult);

    if (loginResult != null) {
        let token = ctoken(userid);
        console.log(token)
        res.cookie('AccessToken', token, { httpOnly: true, secure: true });
        res.cookie('userid', userid);

        res.redirect(`/?msg=로그인에 성공했습니다`);
    } else {
        res.redirect('/user/login?msg=아이디/비밀번호를 확인하세요&flag=0');
    }

}

let logout = (req, res) => {
    res.clearCookie('AccessToken')
    res.clearCookie('userid')
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
    let {msg} = req.query;
    
    let { userid } = req.cookies;
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
    //console.log(classname);
    res.render('./user/user_info', { result,classname,msg });
}

let modify = async (req, res) => {
    let { msg } = req.query;
    let { userid } = req.cookies;
    let result = await User.findOne({
        where: { userid }
    })
    
    res.render('./user/user_modify', { result, msg });
}

let modify_submit = async (req, res) => {
    let { userid } = req.cookies;
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