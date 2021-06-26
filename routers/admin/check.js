// module.exports = (req, res, next) => {
//   console.log(req.session);
//   let { AccessToken } = req.cookies

//   if (AccessToken == undefined) {
//       res.redirect('/user/login?msg=로그인을 진행해주세요')
//   }

//   let signature = getSignature(header, payload); 
//   console.log(signature);         


//   if (sign == signature) {   
//       console.log('검증된 토큰입니다');   
     
//       let { userid, exp } = JSON.parse(Buffer.from(payload, 'base64').toString())
//       console.log(exp);      
//       let nexp = new Date().getTime();    
//       if (nexp > exp) {
//           res.clearCookie('AccessToken')
//           res.redirect('/?msg=토큰만료')
//       }
     
//       req.userid = userid
//       next();
//   } else {
//       res.redirect('/user/login?msg=부적절한토큰')
//   }
// }




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