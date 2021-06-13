const { board, curriculum } = require("../../../models")

let boardType = {
  'interview': ['취업자인터뷰', '6'],
  'portfolio': ['포트폴리오', '7']
}

let show_list = async (req, res) => {
  let board_name = req.params.board_name;
  console.log(board_name);
  let title = boardType[board_name][0];
  let type = boardType[board_name][1];
  let result = await board.findAll({
    where: { type, }
  });


  result = number_set(result);

  res.render('./admin/job/list', {
    board_name,
    title,
    result,
  })
}

let show_write = async (req, res) => {
  let board_name = req.params.board_name;
  let title = boardType[board_name][0];

  res.render('./admin/job/write', {
    board_name, title,
  })
}

let create_article = async (req, res) => {
  let board_name = req.params.board_name;
  let type = boardType[board_name][1];
  let writer = "admin"
  let { subject, content } = req.body;

  let resutlt = await board.create({
    subject, content, writer, type,

  })

  let id = resutlt.dataValues.id;
  res.redirect(`/admin/job/${board_name}/view?id=${id}`);
}



let show_article = async (req, res) => {
  let board_name = req.params.board_name;
  let { id } = req.query;

  let result = await board.findOne({
    where: { id, }
  })

  res.render('./admin/job/view', {
    result, board_name
  })

}


let show_modify = async (req, res) => {
  let board_name = req.params.board_name;
  let { id } = req.query;

  let result = await board.findOne({
    where: { id, }
  })

  res.render('./admin/job/modify', {
    result, board_name,
  })

}

let update_article = async (req, res) => {
  let board_name = req.params.board_name;

  let { subject, content, id } = req.body;
  let date = new Date();

  let result = await board.update({
    subject, content, date,
  }, {
    where: { id, }
  })

  res.redirect(`/admin/job/${board_name}/view?id=${id}`);
}



let destroy_article = async (req, res) => {
  let board_name = req.params.board_name;
  let { id } = req.query;

  let result = await board.destroy({
    where: { id, }
  })
  res.redirect(`/admin/job/${board_name}`);

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