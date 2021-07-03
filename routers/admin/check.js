




function check(req,res,next){
 if(req.session.userid==undefined){
  res.redirect('/admin?msg=관리자 페이지에 접근할 수 없습니다&flag=0');
 }else{
   next();  
 }
}

module.exports={ 
  check,
}