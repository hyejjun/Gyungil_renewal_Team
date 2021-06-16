const { board, curriculum, User, Thumbnail } = require("../../../models")
const article_count = 10;

let boardType = {
  'interview': ['취업자인터뷰', '6'],
  'portfolio': ['포트폴리오', '7']
}

let show_list = async (req, res) => {
  let board_name = req.params.board_name;
  let page = req.query.page;

  let title = boardType[board_name][0];
  let type = boardType[board_name][1];
  let result = await board.findAll({
    // offset: article_count * (page - 1),
    // limit: article_count,
    attributes: ['id', 'writer', 'subject', 'date', 'hit'],
    order: [['id', 'DESC']],
    where: { type, },
  })

  // let count = await board.count({
  //   where: { type, },
  // });

  // let start = 1;
  // let end = Math.ceil(count / article_count);
  // let N = count - article_count * (page - 1);
  result = number_set(result);

  // let pageblock = [];
  // pageblock[0] = [];
  // let block = 0;
  // let p = 1;
  // let nowblock;
  // while (count > 0) {
  //   count -= article_count;
  //   pageblock[block].push(p)
  //   if (p == page) {
  //     nowpageblock = pageblock[block];
  //     nowblock = block;
  //   }
  //   p++;

  //   if (p > 10 * (block + 1)) {
  //     pageblock.push([]);
  //     block++;
  //   }
  // }

  // let prev;
  // let next;
  // if (nowblock == 0) {
  //   prev = false;
  // } else {
  //   prev = pageblock[nowblock - 1][9];
  // }

  // if (nowblock == pageblock.length - 1) {
  //   next = false;
  // } else {
  //   next = pageblock[nowblock + 1][0];
  // }

  res.render('./admin/job/list', {
    board_name,
    title,
    result,

  })
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
  let { id } = req.query;

  let result = await board.findOne({
    include: [{
      model: Thumbnail,
      as: "thumbnails"
    }],
    where: { id, }
  })
  let thumbnail = result.thumbnails;


  res.render('./admin/job/view', {
    result, board_name, thumbnail: thumbnail[0].image,
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
    result, board_name,user, 
  })

}

let update_article = async (req, res) => {
  let board_name = req.params.board_name;
  console.log(req.body);
  console.log(req.file);
  let { subject, content, id } = req.body;
  let date = new Date();

  let result = await board.update({
    subject, content, date,
  }, {
    where: { id, }
  });

  let thumbnail; 
  if(req.file!=undefined){ 
    thumbnail = 'http://localhost:3000/' + req.file.filename;
  }else if(req.body.thumbnail!=''){
    thumbnail = req.body.thumbnail;
  }

  if(thumbnail!=undefined){
    await Thumbnail.update({
     image: thumbnail,
    },{
      where:{board_id:id}
    }) 
  }


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