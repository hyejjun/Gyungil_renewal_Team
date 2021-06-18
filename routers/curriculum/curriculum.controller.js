const { curriculum, subject, curr_sbj, User, board, curr_rv } = require('../../models');
const { Op } = require("sequelize");


const jwtId = require('../../jwtId')
const jwtName = require('../../jwtName')

let curriculum_list = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;

    let result = await curriculum.findAll({
        
    })
    result.shift(); // 맨 앞에 하나 빼기. 
    res.render('./curriculum/curriculum', { userid, username, nickname, result });
}

let curriculum_view = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let { id } = req.query;

    let spec = await curriculum.findOne({
        where: { id, }
    })

    let subjects = await subject.findAll({
        include: [{
            model: curr_sbj,
            as: 'curr_sbjs',
            where: { curr_id: id, }
        }],
    })

    let review = await board.findAll({
        include: [{
            model: curr_rv,
            as: 'curr_rvs',
            where: { curr_id: id, }
        }, {
            model: User,
            as: 'writer_user',
        }],
    })


    //console.log(spec);
    res.render('./curriculum/curriculum_view', {
        userid,
        username,
        spec,
        subjects,
        review,
        nickname
    });
}

module.exports = {
    curriculum_list,
    curriculum_view
}