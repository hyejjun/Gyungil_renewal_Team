const { consult, } = require('../../models');


let consulting = (req, res) => {
    let { userid } = req.cookies;
    res.render('./consult/consulting', { userid });
}
let faq = (req, res) => {
    let { userid } = req.cookies;
    res.render('./consult/faq', { userid });
}

let consulting_submit = async (req, res) => {
    //TODO : DB에 상담정보 넣는 부분 여기에 작성하기
    let { name, age, tel, content } = req.body;
    await consult.create({
        name, age, tel, content
    });

    res.redirect('/consult/consulting');
}
module.exports = {
    consulting,
    faq,
    consulting_submit
}