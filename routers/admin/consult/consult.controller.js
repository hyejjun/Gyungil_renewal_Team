const { consult, board,
} = require('../../../models');

const article_count = 10;

let show_consultList = async (req, res) => {
  let page = req.query.page;
  let result = await consult.findAll({
    offset: article_count * (page - 1),
    limit: article_count,
    order: [['id', 'DESC']],
  })

  result.forEach(ele => {
    let temp = ele.dataValues.date;
    let y = temp.getFullYear();
    let mm = temp.getMonth() + 1;
    let d = temp.getDate();
    let t = temp.getHours();
    let m = temp.getMinutes();
    if (mm < 10) mm = '0' + mm;
    if (d < 10) d = '0' + d;
    ele.dataValues.date = `${y}-${mm}-${d} ${t}:${m}`
  });

  let pageinfo = await makePage(page,result)

  console.log(pageinfo);
  res.render('./admin/consult/list', {
    page, pageinfo
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


module.exports = {
  write_faq, create_faq, modify_faq, update_faq,
  show_consultList, show_faqList, destroy_faq,

}


async function makePage(page,result){ //type: 글 타입.   page: 요청한 페이지.  result는 type으로 뽑은 글의 수. 
  const pageCount = 10; // 페이지 블록의 수 
  let  count = await consult.count({
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
      "prev":prev,
      "next":next,
      "nowpageblock":nowpageblock,
      "end":end,
      "result":result,
  }
  return pageinfo; 
}