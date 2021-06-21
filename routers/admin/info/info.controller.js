const { board, teacher, History, intro } = require("../../../models");

const intro_type = [];

intro_type[0] = 'interior'
intro_type[1] = 'main_visual'
intro_type[2] = 'popup'

////인사말 

let show_intro = async (req, res) => {
  let result = await board.findOne({
    attributes: ['content',]
  }, {
    where: { id: '1' }
  })
  result = result.dataValues;

  res.render('./admin/info/intro.html', {
    result,
  })

}

let modify_intro = async (req, res) => {
  let result = await board.findOne({
    attributes: ['content',]
  }, {
    where: { id: '1' }
  })

  res.render('./admin/info/intro_modify.html', {
    result,
  })
}

let update_intro = async (req, res) => {
  let { content, } = req.body;

  let result = await board.update({
    content
  }, {
    where: { id: '1' }
  })
  res.redirect('/admin/info/intro');
}




////////////////////////////////////////////연혁
let get_history = async (req, res) => {
  let result = await History.findAll({
    order: [['year', 'ASC']]
  });

  res.render('./admin/info/history', {
    result,
  })
}


let add_history = async (req, res) => {
  let { year, content } = req.body;
  await History.create({
    year,
    content,
  });


  res.redirect('/admin/info/history')
}



let dlt_history = async (req, res) => {
  let { id } = req.body;

  await History.destroy({
    where: { id, }
  })

  let result = await History.findAll({
    order: [['year', 'ASC']]
  })

  res.render('./admin/info/history', {
    result,
  });
}

let update_history = async (req, res) => {
  let { id, year, content } = req.body;

  let result = await History.update({
    year,
    content,
  }, {
    where: { id, }
  });

  res.json({ flag: result[0] });
}

//////////////////////교직원소개
let get_teacher = async (req, res) => {
  let result = await teacher.findAll({
  });
  let resultArr = [];
  result.forEach(ele => {
    resultArr.push(ele.dataValues);
  });
  res.render('./admin/info/teacher', {
    result: resultArr
  })
}

let add_teacher = (req, res) => {
  res.render('./admin/info/teacher_add');
}

let create_teacher = async (req, res) => {
  let { name, position, title, career, content } = req.body
  let image = req.file.filename;
  let result = await teacher.create({
    name, position, title, career, content, image,
  })
  res.redirect('/admin/info/teacher')
}

let modify_teacher = async (req, res) => {

  let { id } = req.query;
  let result = await teacher.findOne({
    where: { id, }
  })

  result = result.dataValues;

  res.render('./admin/info/teacher_modify.html', {
    result,
  })
}

let update_teacher = async (req, res) => {

  let { name, position, title, career, content, id } = req.body
  let image;
  if (req.file == undefined) {
    image = req.body.origin_image;
  } else {
    image = req.file.filename;
  }

  let result = await teacher.update({
    name, position, title, career, content, image,
  }, {
    where: { id, }
  })

  res.redirect('/admin/info/teacher');
}

let destroy_teacher = async (req, res) => {
  let { id } = req.query;

  let result = await teacher.destroy({
    where: { id, }
  })
  res.redirect('/admin/info/teacher');
}



/////////////////////시설소개
let interior = async (req, res) => {
  let result = await intro.findAll({
    where: { type: '0', }
  })
  let resultArr = [];
  result.forEach(ele => {
    resultArr.push(ele.dataValues);
  });


  res.render('./admin/info/interior.html', {
    resultArr,
  });
}

let add_interior = (req, res) => {
  res.render('./admin/info/interior_add.html');
}

let create_interior = async (req, res) => {
  let content = req.file.filename;
  let type = '0';
  await intro.create({
    content, type
  })

  res.redirect('/admin/info/interior/');
}

let update_interior = async (req, res) => {
  let { id, show } = req.body;

  let result = await intro.update({
    show,
  }, {
    where: { id },
  })
  res.json({ result })
}

let destroy_interior = async (req, res) => {
  let { id } = req.body;

  let result = await intro.destroy({
    where: { id },
  })
  res.json({ result });

}

let show_location = async (req, res) => {
  let result = await board.findOne({
    where: { id: '2' }
  })
  res.render('./admin/info/location.html', {
    result,
  })
}

let show_modify = async (req, res) => {
  let result = await board.findOne({
    where: { id: '2' }
  })
  res.render('./admin/info/location_modify.html', {
    result,
  })
}

let update_location = async (req, res) => {
  let { subject, content } = req.body;

  let result = await board.update({
    subject, content,
  }, {
    where: { id: '2' }
  })

  res.redirect('/admin/info/location');
}





module.exports = {
  show_intro, modify_intro, update_intro,
  interior, create_interior, destroy_interior, update_interior, add_interior,
  get_teacher, add_teacher, create_teacher, modify_teacher, destroy_teacher, update_teacher,
  get_history, add_history, dlt_history, update_history,
  show_location, show_modify, update_location,
}

