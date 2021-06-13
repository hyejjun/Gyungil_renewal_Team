const { consult, board,
} = require('../../../models');

let show_consultList = async (req, res) => {
  // let result = 

  res.render('./admin/consult/list', {

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
  let writer = "관리자";
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