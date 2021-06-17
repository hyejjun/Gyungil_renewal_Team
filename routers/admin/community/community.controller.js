const { board, User, } = require('../../../models');
const article_count = 10;// 한 페이지에 표시되는 글의 수.  

let boardType = {
  'notice': ['공지사항', '1'],
  'story': ['KI 이야기', '2'],
  'reporter': ['KI 기자단', '3'],
  'column': ['교수칼럼', '4'],
  'review': ['수강후기', '5'],
}



let show_list = async (req, res) => {
  let page = req.query.page; 
  let board_name = req.params.board_name;
  let title = boardType[board_name][0];
  let type = boardType[board_name][1];
  let result = await board.findAll({
    offset: article_count * (page - 1),
    limit: article_count,
    attributes: ['id', 'writer', 'subject', 'date', 'hit'],
    order: [['id', 'DESC']],
    include:[{
        model:User, 
        as:'writer_user'
    }],
    where: { type, },
  })

 

  let pageinfo = await makePage(page,result,type)

  res.render(`./admin/community/list`, {
     title, board_name,page,
    pageinfo,type, 
  })
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
  let writer = "aaa"// 추후 수정

  let { subject, content } = req.body;

  let result = await board.create({
    type, writer, subject, content,
  })
  let id = result.dataValues.id

  res.redirect(`/admin/community/${board_name}/view?id=${id}`)
}


let show_article = async (req, res) => {

  let board_name = req.params.board_name;
  let type = boardType[board_name][1];
  let { id,page } = req.query;

  let authority = true;
  if (type > 4) {
    authority = false;
  }

  let result = await board.findOne({
    include:[{
      model:User, 
      as:'writer_user'
  }],
    where: { id, }
  })

  res.render('./admin/community/view', {
    result, board_name, authority, page, 
  })
}

let show_modify = async (req, res) => {
  let board_name = req.params.board_name;

  let { id } = req.query;

  let result = await board.findOne({
    include:[{
      model:User, 
      as:'writer_user'
  }],
    where: { id, }
  })

  res.render('./admin/community/modify', {
    result, board_name,
  })
}

let modify_article = async (req, res) => {
  let board_name = req.params.board_name;
  let { id, content, subject } = req.body;
  let date = new Date();
  let result = await board.update({
    content, subject, date
  }, {
    where: { id, }
  })
  res.redirect(`/admin/community/${board_name}/view?id=${id}`)
}

let destroy_article = async (req, res) => {
  let board_name = req.params.board_name;
  let { id } = req.query;

  let result = await board.destroy({
    where: { id, }
  })

  res.redirect(`/admin/community/${board_name}`);
}


module.exports = {
  show_list, show_editor, create_article, show_article, show_modify,
  modify_article, destroy_article,
}


async function makePage(page,result,type){ //type: 글 타입.   page: 요청한 페이지.  result는 type으로 뽑은 글의 수. 
  const pageCount = 10; // 페이지 블록의 수 
  let count; 
  if(type==undefined){
    count = await consult.count({
    });
  }else{
    count = await board.count({
      where: { type, },
    });
    let N = count - article_count * (page - 1);
    result.forEach(v=>{
      v['num'] = N;
      N--; 
    })
  }
  let end = Math.ceil(count / article_count);

  let pageblock = [];
  pageblock[0] = [];
  let block = 0;
  let p = 1;
  let nowblock = 0;
  let nowpageblock;
  while (count > 0) {
      count -= article_count;
      pageblock[block].push(p)
      if (p == page) {
          nowpageblock = pageblock[block];
          nowblock = block;
      }
      p++;

      if (p > pageCount * (block + 1)) {
          pageblock.push([]);
          block++;
      }
  }
  let prev;
  let next;
  if (nowblock == 0) {
      prev = false;
  } else {
      prev = pageblock[nowblock - 1][article_count - 1];
  }

  if (nowblock == pageblock.length - 1) {
      next = false;
  } else {
      next = pageblock[nowblock + 1][0];
  }
  let pageinfo = {
      "prev":prev,
      "next":next,
      "nowpageblock":nowpageblock,
      "end":end,
      "result":result,
  }
  return pageinfo; 
}