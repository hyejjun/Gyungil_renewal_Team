let consulting = (req,res)=>{
    res.render('./consult/consulting');
}
let faq = (req,res)=>{
    res.render('./consult/faq');
}

let consulting_submit = (req,res)=>{
    //TODO : DB에 상담정보 넣는 부분 여기에 작성하기
    console.log(req.body);
    
    res.redirect('/consult/consulting');
}
module.exports = {
    consulting,
    faq,
    consulting_submit
}