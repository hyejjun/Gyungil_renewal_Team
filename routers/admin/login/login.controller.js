const { sequelize, User, curriculum } = require('../../../models');
const auth = require('../../../middleware/auth');
const ctoken = require('../../../jwt');
const jwtPW = require('../../../jwtPw');
const jwtId = require('../../../jwtId');
const crypto = require('crypto');
const jwtName = require('../../../jwtName');


let login = (req, res) => {
    res.render('./admin/login/login.html')
}



let login_check = async (req, res) => {
    //console.log(req.body);
    let { userid, userpw } = req.body;

    let Cuserpw = jwtPW(userpw)


    let loginResult = await User.findOne({
        where: { userid, userpw: Cuserpw }
    })
    
    let type = loginResult.dataValues.type;

    ////////// 모든 라우터에서 세션 없으면 접근 못하게 하기. 
    
    if (loginResult != null && type<3) {
        let username = loginResult.dataValues.username;
        let userid = loginResult.dataValues.userid;
        req.session.username = username; 
        req.session.userid = userid; 

        req.session.save(() => {
          console.log(req.session)
          res.redirect(`/admin/main?msg=로그인에 성공했습니다`);
      })
    } else {
        res.redirect('/admin?msg=관리자 페이지에 접근할 수 없습니다.&flag=0');
    }

}

let logout = (req, res) => {
  delete req.session.username;
  delete req.session.userid;


  req.session.save(() => {
      res.redirect('/admin');
  })
}

let id_check = async (req, res) => {
    let userid = req.query.userid;
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


module.exports = {
   
    login,

    login_check,
    logout,
    id_check,
  
}