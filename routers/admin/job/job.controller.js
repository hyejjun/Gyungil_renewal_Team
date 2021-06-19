const { board, curriculum, User, Thumbnail } = require("../../../models")
const { search, makePage } = require('../../list.js');

// const article_count = 10;

let boardType = {
  'interview': ['취업자인터뷰', '6'],
  'portfolio': ['포트폴리오', '7']
}

let show_list = async (req, res) => {
  let board_name = req.params.board_name;
  let { page, search_type, search_value } = req.query;
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

  let pageinfo = await makePage(page, result);

  res.render('./admin/job/list', {
    board_name,
    title,
    result,
    page, pageinfo, type

  })
}


let search_list = async (req, res) => {
  let { board_name, search_type, search_value } = req.body;
  res.redirect(`/admin/job/${board_name}?page=1&search_type=${search_type}&search_value=${search_value}`);
}


let show_write = async (req, res) => {
  let board_name = req.params.board_name;
  let title = boardType[board_name][0];

  let user = await User.findAll({
    include: [{
      model: curriculum,
      as: 'code',
    }],
    where: { type: '3' }
  })


  res.render('./admin/job/write', {
    board_name, title, user,
  })
}

let create_article = async (req, res) => {
  let board_name = req.params.board_name;
  let type = boardType[board_name][1];
  let { thumbnailroute } = req.body;
  if (thumbnailroute == 'image') {
    thumbnail = 'http://localhost:3000/' + req.file.filename;
  } else {
    thumbnail = req.body.thumbnail;
  }

  let { subject, content, writer } = req.body;

  let resutlt = await board.create({
    subject, content, writer, type,

  })

  let id = resutlt.dataValues.id;

  await Thumbnail.create({
    board_id: id, image: thumbnail,
  })

  res.redirect(`/admin/job/${board_name}/view?id=${id}`);
}



let show_article = async (req, res) => {
  let board_name = req.params.board_name;
  let { id, page } = req.query;

  let result = await board.findOne({
    include: [{
      model: Thumbnail,
      as: "thumbnails"
    }],
    where: { id, }
  })
  let thumbnail = result.thumbnails;



  res.render('./admin/job/view', {
    result, board_name, thumbnail: thumbnail[0].image, page,
  })

}


let show_modify = async (req, res) => {
  let board_name = req.params.board_name;
  let { id } = req.query;

  let result = await board.findOne({
    include: [{
      model: Thumbnail,
      as: 'thumbnails',
    }],
    where: { id, }
  })

  let user = await User.findAll({
    include: [{
      model: curriculum,
      as: 'code',
    }],
    where: { type: '3' }
  })

  res.render('./admin/job/modify', {
    result, board_name, user,
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
  });

  let thumbnail;
  if (req.file != undefined) {
    thumbnail = 'http://localhost:3000/' + req.file.filename;
  } else if (req.body.thumbnail != '') {
    thumbnail = req.body.thumbnail;
  }

  if (thumbnail != undefined) {
    await Thumbnail.update({
      image: thumbnail,
    }, {
      where: { board_id: id }
    })
  }


  res.redirect(`/admin/job/${board_name}/view?id=${id}`);
}



let destroy_article = async (req, res) => {
  let board_name = req.params.board_name;
  let { id, page } = req.query;

  let result = await board.destroy({
    where: { id, }
  })
  res.redirect(`/admin/job/${board_name}?page=${page}`);

}



module.exports = {
  show_list,
  show_write,
  create_article,
  show_article,
  show_modify,
  update_article,
  destroy_article,
  search_list
}
