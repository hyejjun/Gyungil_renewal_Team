const { consult, board } = require('../../models');
const jwtId = require('../../jwtId');
const jwtName = require('../../jwtName');

let consulting = (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    res.render('./consult/consulting', { userid, username });
}

let faq = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let result = await board.findAll({
        where: { type: '8' }
    })
    res.render('./consult/faq', { userid, username, result, });
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
