const { History, intro, board, teacher } = require("../../models");
const { Op } = require("sequelize");
const jwtId = require('../../jwtId');
const jwtName = require('../../jwtName');

let introduction = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let result = await board.findOne({
        where: { id: 1, }
    })
    res.render('./college/introduction', { userid,username, result });
}

let history = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let result = await History.findAll({
        order: [['year', 'DESC']]
    });
    // console.log(result); 
    // 연도 한번만 뽑으려면 아래 함수 사용. 
    result = dlt_year(result);
    res.render('./college/history', { userid,username, result });
}

let teachers = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let result = await teacher.findAll({
        where: { show: 1, }
    })
    res.render('./college/teachers', { userid, username, result });
}

let interior = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let result = await intro.findAll({
        where: {
            [Op.and]: [{ type: '0' }, { show: '1' }],
        },
    })
    res.render('./college/interior', { userid, username, result });
}

let location = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let result = await board.findOne({
        where: { id: 2, }
    })
    res.render('./college/location', { userid, username, result });
}

module.exports = {
    introduction,
    history,
    teachers,
    interior,
    location
}


function dlt_year(arr) {
    let temp = [];
    for (let i = 0; i <arr.length-1; i++) {
        if (arr[i].dataValues.year === arr[i + 1].dataValues.year) {
            arr[i].dataValues.year = null;
        }
        temp.unshift(arr[i].dataValues);
    }
    temp.unshift(arr[arr.length-1].dataValues);
    return temp;
}