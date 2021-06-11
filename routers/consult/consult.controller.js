let consulting = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./consult/consulting',{userid});
}
let faq = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./consult/faq',{userid});
}

let consulting_submit = (req,res)=>{
    //TODO : DB에 상담정보 넣는 부분 여기에 작성하기
    //console.log(req.body);
    
    res.redirect('/consult/consulting');
}
module.exports = {
    consulting,
    faq,
    consulting_submit
}