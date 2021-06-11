const{sequelize, User} = require('../../models');
const auth = require('../../middleware/auth');
const ctoken = require('../../jwt');
const jwtPW = require('../../jwtPw');
const crypto = require('crypto');  

let join = (req, res) => {
    res.render('./user/join')
}
let login = (req, res) => {
    let {msg,flag} =req.query;
    res.render('./user/login',{msg,flag})
}

let join_success = async (req, res) => {
    console.log(req.body);
    let { username, userid, userpw, user_birthday, class_code } = req.body;

    let pwtoken = jwtPW(userpw)

    await User.create({
        userid,
        userpw:pwtoken,
        username,
        user_birthday,
        class_code
    })
    res.redirect('/user/login');
}

let login_check = async(req,res)=>{
    //console.log(req.body);
    let {userid, userpw} = req.body;

    let Cuserpw = jwtPW(userpw)


    let loginResult = await User.findOne({
        where:{userid,userpw:Cuserpw}
    })

    console.log(loginResult);

    if(loginResult != null){
        let token = ctoken(userid);
        console.log(token)
        res.cookie('AccessToken',token,{httpOnly:true,secure:true});
        res.cookie('userid',userid);
        
        res.redirect(`/?msg=로그인에 성공했습니다`);
    }else{
        res.redirect('/user/login?msg=아이디/비밀번호를 확인하세요&flag=0');
    }
   
}

let logout = (req,res) =>{
    res.clearCookie('AccessToken')
    res.clearCookie('userid')
    res.redirect('/?msg=로그아웃 되었습니다')
}

module.exports = {
    join,
    login,
    join_success,
    login_check,
    logout
}