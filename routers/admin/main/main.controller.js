const { board, User, main_rv, main_visual } = require("../../../models");
const { Op } = require("sequelize");


const intro_type = [];
intro_type[0] = 'interior'



let main = async (req, res) => {
  let result = await main_visual.findAll({
    where: { show: '1', }
  })

  res.render('./admin/main/visual.html', {
    result,
  });
}

let add_mainv = (req, res) => {
  res.render('./admin/main/visual_add.html');
}

let create_mainv = async (req, res) => {
  let image = req.file.filename;
  let link = req.body.link;
  await main_visual.create({
    image, link,
  })

  res.redirect('/admin/main/');
}

let update_visual_show = async (req, res) => {
  let { id, show, } = req.body;

  let result = await main_visual.update({
    show,
  }, {
    where: { id },
  })
  res.json({ result })
}

let update_visual_link = async (req, res) => {
  let { id, link, } = req.body;

  let result = await main_visual.update({
    link,
  }, {
    where: { id },
  })
  res.json({ result })
}


let destroy_visual = async (req, res) => {
  let { id } = req.body;

  let result = await main_visual.destroy({
    where: { id },
  })
  res.json({ result });

}


let get_curr = (req, res) => {
  res.render('./admin/main/curriculum.html')
}

//////////////// 리뷰등록 페이지 
let get_review = async (req, res) => {
  let rv = await board.findAll({
    include: [{
      model: User,
      as: 'writer_user',
    }],
    order: [['hit', 'ASC']],
    where: { type: '5', }
  })

  let select = await main_rv.findAll({
    attributes: ['rv_id'],
  })

  rv.forEach(v => {
    v['check'] = false;
  })


  select.forEach(s => {
    rv.forEach(r => {
      if (s.rv_id == r.id) {
        r['check'] = true;
      }
    })
  })

  res.render('./admin/main/review.html', {
    rv,
  });
}



//////메인 리뷰 연결. 
let update_mainrv = async (req, res) => {
  let { reviewArr } = req.body;
  reviewArr = reviewArr.split(',');
  await main_rv.destroy({
    where: { id: { [Op.gt]: 0 } }
  });

  let result;
  reviewArr.forEach(async (v) => {
    result = await main_rv.create({
      rv_id: v,
    })
  })

  res.json(result);
}

let get_popup = (req, res) => {
  res.render('./admin/main/popup.html');
}

module.exports = {
  main,
  get_popup,
  get_curr,
  get_review,
  add_mainv,
  create_mainv,
  update_visual_show,
  update_visual_link,
  destroy_visual,
  update_mainrv,
}