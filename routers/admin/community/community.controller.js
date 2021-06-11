const { board,} = require('../../../models');

let boardType = {
  'notice':['공지사항','1'],
  'story':['KI 이야기','2'],
  'reporter':['KI 기자단','3'],
  'column':['교수칼럼','4'],
  // 'faq':['자주묻는 질문','5'],
}



let show_list = async(req,res)=>{
  let board_name = req.params.board_name; 
  let title = boardType[board_name][0]; 
  let type = boardType[board_name][1];
  let  result = await board.findAll({
    attributes: ['id', 'writer', 'subject', 'date', 'hit'],
    order: [['id', 'DESC']],
    where: { type, },
  })

  result = number_set(result); 

  res.render(`./admin/community/list`, {
    result, title, board_name, 
  })
}



let show_editor =(req,res)=>{
  let board_name = req.params.board_name; 
  let title = boardType[board_name][0]; 
  
  res.render(`./admin/community/write`, {
    title,board_name
  })
}

let create_article = async(req,res)=>{
  let board_name = req.params.board_name; 
  let title = boardType[board_name][0];  
  let type = boardType[board_name][1];
  let writer = "관리자"// 추후 수정
  console.log(req.body)
  
  let {subject, content} =req.body; 
  
  let result = await board.create({
    type,writer,subject,content, 
  })
  console.log(result); 
  let id = result.dataValues.id

  res.redirect(`/admin/community/${board_name}/view?id=${id}`)
}


let show_article = async(req,res)=>{
  let board_name = req.params.board_name; 
  let {id} = req.query; 

  let result = await board.findOne({
    where:{id,}
  })

  res.render('./admin/community/view',{
    result, board_name, 
  })
}

let show_modify = async(req,res)=>{
  let board_name = req.params.board_name; 

  let {id} = req.query;

  let result = await board.findOne({
    where:{id,}
  })
  
  res.render('./admin/community/modify',{
    result,board_name, 
  })
}

let modify_article = async(req,res)=>{ 
  let board_name = req.params.board_name; 
  let {id,content,subject} = req.body; 
  let date = new Date(); 
  let result = await board.update({
    content,subject, date
  },{
    where:{id,}
  })
  res.redirect(`/admin/community/${board_name}/view?id=${id}`)
}

let destroy_article = async(req,res)=>{ 
  let board_name = req.params.board_name;
  let {id} = req.query;

  let result = await board.destroy({
    where:{id,}
  })

  res.redirect(`/admin/community/${board_name}`); 
}


module.exports = {
  show_list, show_editor,create_article,show_article,show_modify,
  modify_article, destroy_article,
}




//글번호생성 함수 
function number_set(x) {
  let N = x.length;
  let arr = [];
  x.forEach(ele => {
    ele.dataValues['num'] = N;
    arr.push(ele.dataValues)
    N--;
  });
  return arr;
}