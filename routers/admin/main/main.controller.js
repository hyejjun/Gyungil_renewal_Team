const {intro,board,User,main_rv} = require("../../../models");
const { Op } = require("sequelize");


const intro_type = []; 
intro_type[0] ='interior'
intro_type[1] ='main_visual'
intro_type[2] ='popup'


let main = async(req, res) => {
  let result = await intro.findAll({
    where:{type:'1',} 
  })
  console.log(result); 
  let resultArr = []; 
  result.forEach(ele => {
    resultArr.push(ele.dataValues); 
  });


  res.render('./admin/main/visual.html',{
    resultArr, 
  });
}

let add_mainv = (req,res)=>{
  res.render('./admin/main/visual_add.html'); 
}

let create_mainv = async(req,res)=>{
  let content = req.file.filename;
  let type = '1'; 
  await intro.create({
    content,type
  })

  res.redirect('/admin/main/'); 
}

let update_visual = async(req,res)=>{
  let {id,show} = req.body; 

  let result = await intro.update({
    show, 
  },{
    where:{id},
  }) 
  res.json({result}) 
}

let destroy_visual = async(req,res)=>{
  let {id} = req.body; 

  let result = await intro.destroy({
    where:{id}, 
  })
  res.json({result}); 

}


let get_curr =(req,res)=>{
  res.render('./admin/main/curriculum.html')
}

//////////////// 리뷰등록 페이지 
let get_review = async(req,res)=>{
  let rv = await board.findAll({
    include: [{
      model: User,
      as: 'writer_user',
    }],
    order: [['hit', 'ASC']],
    where:{type:'5', }
  })

  let select = await main_rv.findAll({
    attributes:['rv_id'],
  })

  rv.forEach(v=>{
    v['check'] = false;
  })


  select.forEach(s=>{
    rv.forEach(r=>{
      if(s.rv_id == r.id){
        r['check'] = true; 
      }
    })
  })

  res.render('./admin/main/review.html',{
    rv,
  });
}



//////메인 리뷰 연결. 
let update_mainrv = async (req,res)=>{
  let {reviewArr} = req.body; 
  reviewArr = reviewArr.split(',');
  await main_rv.destroy({
    where:{ id: {[Op.gt]: 0}}
  }); 

  let result; 
  reviewArr.forEach(async(v)=>{
    result = await main_rv.create({
      rv_id:v,
    }) 
  })

  res.json(result); 
}

let get_popup = (req,res)=>{
  res.render('./admin/main/popup.html'); 
}

module.exports = {
  main,
  get_popup,
  get_curr,
  get_review,
  add_mainv,
  create_mainv,
  update_visual,
  destroy_visual,
  update_mainrv,
}