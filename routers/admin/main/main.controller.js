const {intro} = require("../../../models")


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

let get_review = (req,res)=>{
  res.render('./admin/main/review.html');
}

let get_popup = (req,res)=>{
  res.render('./admin/main/popup.html'); 
}

module.exports = {
  main,get_popup,get_curr,get_review,add_mainv,create_mainv,update_visual,
  destroy_visual,
}