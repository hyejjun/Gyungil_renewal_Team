const { User, curriculum } = require("../../../models");

const userlevel = [];
userlevel[1] = '최고관리자'
userlevel[2] = '관리자'
userlevel[3] = '교직원'
userlevel[4] = '학생'
userlevel[5] = '미인증 교직원'
userlevel[6] = '미인증 학생'

let show = async (req, res) => {
  let { show, msg } = req.query;
  let type = req.session.type;
  console.log(type);
  let result = await User.findAll({
    include: [{
      model: curriculum,
      as: 'code',
    }],
    order: [['type', 'ASC']],
  });

  result.shift();

  result = selected(result, show, type);

  result.forEach(v => {
    v.type = userlevel[v.type];
  })

  res.render('./admin/user/userlist.html', { result, msg });
}


let allow = async (req, res) => {
  let { allow, type } = req.body;
  allowArr = allow.split(',');
  allowArr.forEach(async (v) => {
    allow_user(v, type);
  })
  if (type == 'legal') {
    res.redirect('/admin/user/userlist?show=alien&msg=적용되었습니다.')
  } else if (type == 'teacher') {
    res.redirect('/admin/user/userlist?show=teacher&msg=적용되었습니다.')
  } else if (type == 'admin') {
    res.redirect('/admin/user/userlist?show=admin&msg=적용되었습니다.')

  }

}





module.exports = {
  show,
  allow,
}

function selected(arr, str, level) {
  switch (str) {
    case 'all':

      return arr;

    case 'alien':
      arr = arr.filter(v => v.type > 4)
      if (level < 3) arr['alien'] = true;
      return arr;

    case 'legal_alien':
      arr = arr.filter(v => v.type < 5)
      return arr;

    case 'admin':
      arr = arr.filter(v => v.type < 3)
      if (level < 2) arr['admin'] = true;
      return arr;

    case 'teacher':
      arr = arr.filter(v => v.type == 3)
      if (level < 2) arr['teacher'] = true;
      return arr;

    case 'student':
      arr = arr.filter(v => v.type == 4)
      return arr;
  }

}





async function allow_user(x, y) {
  switch (y) {

    case 'legal':
      let alien = await User.findOne({
        where: { id: x },
      })

      let allowtype = alien.dataValues.type - 2;

      await User.update({
        type: allowtype,
      }, {
        where: { id: x }
      })
      break;

    case 'teacher':
      let teacher = await User.findOne({
        where: { id: x },
      })

      let admintype = teacher.dataValues.type - 1;

      await User.update({
        type: admintype,
      }, {
        where: { id: x }
      })
      break;


    case 'admin':
      let admin = await User.findOne({
        where: { id: x },
      })

      let teachertype = admin.dataValues.type + 1;

      await User.update({
        type: teachertype,
      }, {
        where: { id: x }
      })
      break;
  }
}



