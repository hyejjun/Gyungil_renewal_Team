const { consult, board,
} = require('../../../models');

const article_count = 10;




let clients = [];




let show_consultList = async (req, res) => {
  let page = req.query.page;
  let result = await consult.findAll({
    offset: article_count * (page - 1),
    limit: article_count,
    order: [['id', 'DESC']],
  })

  result.forEach(ele => {
    let temp = ele.dataValues.date;

    let t = temp.getHours();
    let m = temp.getMinutes();
    if (t < 10) t = '0' + t;
    if (m < 10) m = '0' + m;
    ele.dataValues.date = `${t}:${m}`
  });

  let pageinfo = await makePage(page, result)

  res.render('./admin/consult/list', {
    page, pageinfo
  })
}



let show_consult = async (req, res) => {
  let { id, page } = req.query;
  // console.log(req.query);

  let result = await consult.findOne({
    where: { id, }
  })

  let temp = result.dataValues.date;
  let y = temp.getFullYear();
  let mm = temp.getMonth() + 1;
  let d = temp.getDate();
  let t = temp.getHours();
  let m = temp.getMinutes();
  if (mm < 10) mm = '0' + mm;
  if (d < 10) d = '0' + d;
  result.dataValues.date = `${y}-${mm}-${d} ${t}:${m}`



  res.render('./admin/consult/view', {
    page, result,
  })

}


let show_faqList = async (req, res) => {
  let type = '8';

  let result = await board.findAll({
    where: { type, }
  })

  res.render('./admin/consult/faq', {
    result,
  })
}


let write_faq = (req, res) => {
  res.render('./admin/consult/faq_write');
}


let create_faq = async (req, res) => {
  let { subject, content } = req.body;
  let writer = "admin";
  let type = '8';

  let result = await board.create({
    writer, subject, content, type
  })
  res.redirect(`/admin/consult/faq/list`);
}


let modify_faq = async (req, res) => {
  let { id } = req.query;

  let result = await board.findOne({
    where: { id, }
  })
  res.render('./admin/consult/faq_modify', {
    result
  });
}


let update_faq = async (req, res) => {
  let { subject, content, id } = req.body;
  let result = await board.update({
    subject, content,
  }, {
    where: { id, },
  });

  res.redirect(`/admin/consult/faq/list`);
}

let destroy_faq = async (req, res) => {
  let { id } = req.query;

  let result = await board.destroy({
    where: { id, }
  })
  res.redirect(`/admin/consult/faq/list`);
}

////////////////////////채팅 시작 
let show_chat = (req, res) => {
  res.render('./admin/consult/chat')
}

let show_wait = (req, res) => {
  let temp = [];
  clients.forEach(v => {
    if (v.consultant == null) {
      temp.push(v);
    }
  })
  waiting = temp;
  wait = true;
  res.render('./admin/consult/chatlist', { clients: waiting, wait, });
}
/*
9번째 줄에보면 clients라는 배열을 갖고 있습니다. 
그 배열에는 객채가 들어있는데 
그 객체의 속성 중  consultant부분이 null 이면 아직 상담사가 배치되지
않은 대기중인 클라이언트라는 의미로, 해당 클라이언트만 담아서 
보내줍니다. 
*/


let show_cosulting = (req, res) => {
  let temp = [];
  let { id } = req.body;
  clients.forEach(v => {
    if (v.consultant == id) {
      temp.push(v);
    }
  })
  consulting = temp;
  wait = false;
  res.render('./admin/consult/chatlist', { clients: consulting, wait });
}
/*
현재 consultant 값이 내 소켓 아이디와 일치하는 것만 담아서 보내줍니다. 
*/



let start_chat = (req, res) => {
  let { consultant_id, client_id } = req.body;
  clients.forEach(v => {
    if (v.id == client_id) {
      v.consultant = consultant_id;
    }
  })
  res.json();
}
/*
대기중인 클라이언트 목록에서 시작버튼을 누르면 
해당 클라이언트의 consultant 속성값이  상담사의 소켓아이디로 바뀝니다.  
*/



let end_chat = (req, res) => {
  let { client_id } = req.body;
  for (let i = 0; i < clients.length; i++) {
    if (clients[i].id == client_id) {
      clients.splice(i, 1);
      break;
    }
  }
  res.json();
}
/*
채팅이 종료되면 배열에서 해당 클라이언트를 삭제. 
*/



module.exports = {
  write_faq, create_faq, modify_faq, update_faq,
  show_consultList, show_faqList, destroy_faq, show_consult, show_wait, clients, show_chat,
  start_chat, show_cosulting, end_chat,
}


async function makePage(page, result) { //type: 글 타입.   page: 요청한 페이지.  result는 type으로 뽑은 글의 수. 
  const pageCount = 10; // 페이지 블록의 수 
  let count = await consult.count({
  });

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
    "prev": prev,
    "next": next,
    "nowpageblock": nowpageblock,
    "end": end,
    "result": result,
  }
  return pageinfo;
}