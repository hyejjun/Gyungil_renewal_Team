const { curriculum, subject, curr_sbj, User, board } = require("../../../models");





let show_curr = async (req, res) => {
  let result = await curriculum.findAll({
    attributes: ['id', 'name'],
  })

  res.render('./admin/curriculum/curr_list', {
    result
  })
}

let show_sub = async (req, res) => {
  let result = await subject.findAll({});

  res.render('./admin/curriculum/subject_list', {
    result,
  })
}

let add_curr = (req, res) => {
  res.render('./admin/curriculum/curr_add')
}

let add_sub = (req, res) => {
  res.render('./admin/curriculum/subject_add')
}

let create_curr = async (req, res) => {
  let { name, info, term, start_time, end_time, location, tuition, qual } = req.body;

  let image = req.file.filename;

  let result = await curriculum.create({
    name, info, term, start_time, end_time, location, tuition, qual, image,
  });

  res.redirect('/admin/curriculum/curr');
}

let destroy_curr = async (req, res) => {
  let { id } = req.body;

  let result = await curriculum.destroy({
    where: { id }
  })
  res.json({ result });
}



let create_sub = async (req, res) => {
  let { name, content } = req.body;
  let image = req.file.filename;

  let result = await subject.create({
    name, content, image,
  });
  res.redirect('/admin/curriculum/subject');
}

let modify_sub = async (req, res) => {
  let { id } = req.query;
  let result = await subject.findOne({
    where: { id, }
  });

  result = result.dataValues;
  res.render('./admin/curriculum/subject_control', {
    result,
  });
}

let update_sub = async (req, res) => {
  let { name, content, id } = req.body;
  let image;
  if (req.file == undefined) {
    image = req.body.origin_image;
  } else {
    image = req.file.filename;
  }

  let result = await subject.update({
    name, content, image,
  }, {
    where: { id, }
  })

  res.redirect('/admin/curriculum/subject');
}

let destroy_sub = async (req, res) => {
  let { id } = req.query;

  let result = await subject.destroy({
    where: { id, }
  });

  res.redirect('/admin/curriculum/subject');
}



let control_curr = async (req, res) => {
  let { id } = req.query;

  let spec = await curriculum.findOne({
    where: { id, }
  })
  spec = spec.dataValues;

  let tempSub = await subject.findAll({});

  let sbj = [];
  tempSub.forEach(ele => {
    sbj.push(ele.dataValues);
  });

  let originsbj = JSON.parse(JSON.stringify(sbj));


  let sortSub = await curr_sbj.findAll({
    where: { curr_id: id },
  });

  let sortLi = [];
  sortSub.forEach(ele => {
    sortLi.push(ele.dataValues.sbj_id)
  });

  let sorted = [];
  sortLi.forEach(v => {
    for (let i = 0; i < sbj.length; i++) {
      if (v == sbj[i].id) {
        sbj[i]["show"] = 1;
        sorted.push(sbj[i]);
        sbj.splice(i, 1);
        break;
      }
    }
  });

  sbj.forEach(v => {
    v["show"] = 0;
  })

  sorted = sorted.concat(sbj);

  //해당 수강후기 갖고오는 부분 내일 만들기. 
  let review = await board.findAll({
    include: [{
      model: User,
      as: 'writer_user',
      where: { class_code: '1' }
    }]
  })



  res.render('./admin/curriculum/curr_control', {
    spec, sorted, originsbj
  });
}




let update_curr = async (req, res) => {
  let image;
  if (req.file == undefined) {
    image = req.body.origin_image;
  } else {
    image = req.file.filename;
  }
  let { id, name, info, term, start_time, end_time, location, tuition, qual, subsort } = req.body;

  let reset = await curr_sbj.destroy({
    where: { curr_id: id },
  })

  subsort.split(',').forEach(async (v) => {
    await curr_sbj.create({
      curr_id: id, sbj_id: v,
    })
  })

  await curriculum.update({
    name, info, term, start_time, end_time, location, tuition, qual, image,
  }, {
    where: { id, }
  })

  res.redirect('/admin/curriculum/curr');
}


module.exports = {
  show_curr, show_sub, create_curr, add_curr, add_sub, create_sub,
  modify_sub, update_sub, destroy_sub, control_curr, update_curr, destroy_curr,
}