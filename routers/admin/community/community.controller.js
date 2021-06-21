const { board, User, } = require('../../../models');
const { search, makePage } = require('../../list');

let boardType = {
  'notice': ['공지사항', '1'],
  'story': ['KI 이야기', '2'],
  'reporter': ['KI 기자단', '3'],
  'column': ['교수칼럼', '4'],
  'review': ['수강후기', '5'],
}



let show_list = async (req, res) => {
  let { page, search_type, search_value } = req.query;
  let board_name = req.params.board_name;
  let title = boardType[board_name][0];
  let type = boardType[board_name][1];

  let result = await board.findAll({
    order: [['id', 'DESC']],
    include: [{
      model: User,
      as: 'writer_user'
    }],
    where: { type, },
  })

  let N = result.length;
  result.forEach((ele) => {
    ele['num'] = N;
    N--;
  })

  if (search_type != undefined && search_value != undefined) {
    result = search(result, search_type, search_value)
  }

  let pageinfo = await makePage(page, result)

  res.render(`./admin/community/list`, {
    title, board_name, page,
    pageinfo, type, search_type, search_value
  })
}


let search_list = async (req, res) => {
  let { board_name, search_type, search_value } = req.body;
  res.redirect(`/admin/community/${board_name}?page=1&search_type=${search_type}&search_value=${search_value}`);
}




let show_editor = (req, res) => {
  let board_name = req.params.board_name;
  let title = boardType[board_name][0];

  res.render(`./admin/community/write`, {
    title, board_name
  })
}

let create_article = async (req, res) => {
  let board_name = req.params.board_name;
  let title = boardType[board_name][0];
  let type = boardType[board_name][1];
  let writer = req.session.userid; 
  console.log(req.session); 

  let { subject, content } = req.body;

  let result = await board.create({
    type, writer, subject, content,
  })
  let id = result.dataValues.id

  res.redirect(`/admin/community/${board_name}/view?id=${id}&page=1`)
}


let show_article = async (req, res) => {

  let board_name = req.params.board_name;
  let type = boardType[board_name][1];
  let { id, page } = req.query;

  let authority = true;
  if (type > 4) {
    authority = false;
  }

  let result = await board.findOne({
    include: [{
      model: User,
      as: 'writer_user'
    }],
    where: { id, }
  })

  res.render('./admin/community/view', {
    result, board_name, authority, page,
  })
}

let show_modify = async (req, res) => {
  let board_name = req.params.board_name;

  let { id, page } = req.query;

  let result = await board.findOne({
    include: [{
      model: User,
      as: 'writer_user'
    }],
    where: { id, }
  })

  res.render('./admin/community/modify', {
    result, board_name, page,
  })
}

let modify_article = async (req, res) => {
  let board_name = req.params.board_name;
  let { id, content, subject, page } = req.body;
  let date = new Date();
  let result = await board.update({
    content, subject, date
  }, {
    where: { id, }
  })
  res.redirect(`/admin/community/${board_name}/view?id=${id}&page=${page}`)
}

let destroy_article = async (req, res) => {
  let board_name = req.params.board_name;
  let { id, page } = req.query;

  let result = await board.destroy({
    where: { id, }
  })

  res.redirect(`/admin/community/${board_name}?page=${page}`);
}


module.exports = {
  show_list, show_editor, create_article, show_article, show_modify,
  modify_article, destroy_article, search_list,
}


