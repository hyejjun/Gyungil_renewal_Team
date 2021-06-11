const { sboard, curriculum } = require("../../../models")

let temp = {
  'interview': ['취업자인터뷰', '2'],
  'portfolio': ['포트폴리오', '3']
}

let show_list = async (req, res) => {
  let title1 = req.params.params1;
  let title2 = temp[title1][0];
  let type = temp[title1][1];
  let resultArr = await sboard.findAll({
    where: { type, }
  });

  let result = [];
  resultArr.forEach(ele => {
    result.push(ele.dataValues);
  })

  result = number_set(result);

  result.forEach(v => {
    console.log(v.type)
  })

  res.render('./admin/job/list', {
    title1,
    title2,
    result,
  })
}

let show_write = async (req, res) => {
  let title1 = req.params.params1;
  let title2 = temp[title1][0];

  let result = await curriculum.findAll({
    attributes: ['id', 'name'],
  })
  let curr = [];

  result.forEach(ele => {
    curr.push(ele.dataValues);
  })

  res.render('./admin/job/write', {
    title1, title2, curr
  })
}

let create_article = async (req, res) => {
  let title1 = req.params.params1;
  let type = temp[title1][1];
  let writer = "관리자"
  let { curriculum, subject, content } = req.body;

  let resutlt = await sboard.create({
    subject, content, writer, type,
    class_code: curriculum,
  })

  let id = resutlt.dataValues.id;
  res.redirect(`/admin/job/${title1}/view?id=${id}`);
}



let show_article = async (req, res) => {
  let title1 = req.params.params1;
  let { id } = req.query;

  let result = await sboard.findOne({
    where: { id, }
  })

  result = result.dataValues;

  let curr = await curriculum.findOne({
    where: { id: result.class_code }
  })

  console.log(curr.dataValues.name);

  result.class_code = curr.dataValues.name;

  res.render('./admin/job/view', {
    result, title1,
  })

}


let show_modify = async (req, res) => {
  let title1 = req.params.params1;
  let { id } = req.query;

  let result = await sboard.findOne({
    where: { id, }
  })

  result = result.dataValues;

  let currArr = await curriculum.findAll({
    attributes: ['id', 'name'],
  })
  let curr = [];

  currArr.forEach(ele => {
    curr.push(ele.dataValues);
  })
  console.log(result);
  res.render('./admin/job/modify', {
    curr, result, title1,
  })

}

let update_article = async (req, res) => {
  let title1 = req.params.params1;
  console.log(req.body);
  let { curriculum, subject, content, id } = req.body;
  let date = new Date();

  let result = await sboard.update({
    subject, content, class_code: curriculum, date,
  }, {
    where: { id, }
  })

  res.redirect(`/admin/job/${title1}/view?id=${id}`);
}



let destroy_article = async (req, res) => {
  let title1 = req.params.params1;
  let { id } = req.query;

  let result = await sboard.destroy({
    where: { id, }
  })
  res.redirect(`/admin/job/${title1}`);

}



module.exports = {
  show_list, show_write, create_article, show_article, show_modify, update_article, destroy_article,
}


function number_set(x) {
  let N = x.length;
  let arr = [];
  x.forEach(ele => {
    ele['num'] = N;
    arr.push(ele)
    N--;
  });
  return arr;
}