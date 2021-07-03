const { History, intro, board, teacher } = require("../../models");
const { Op } = require("sequelize");
const jwtId = require('../../jwtId');
const jwtName = require('../../jwtName');

let introduction = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let result = await board.findOne({
        where: { id: 1, }
    })
    res.render('./college/introduction', { userid,username, nickname, result });
}

let history = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let result = await History.findAll({
        order: [['year', 'DESC']]
    });
    // 연도 한번만 뽑으려면 아래 함수 사용. 
    // result = dlt_year(result);
    result = clear_year(result); 
    // console.log(result); 
    res.render('./college/history', { userid,username,nickname, result });
}

let teachers = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let result = await teacher.findAll({
        where: { show: 1, }
    })

    
    res.render('./college/teachers', { userid, username, nickname, result });
}

let interior = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let result = await intro.findAll({
        where: {
            [Op.and]: [{ type: '0' }, { show: '1' }],
        },
    })
    res.render('./college/interior', { userid, username, nickname, result });
}

let location = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let result = await board.findOne({
        where: { id: 2, }
    })

      let content = result.dataValues.content; 
      content = content.split('$$'); 
      result['address'] = content[0];
      result['tel'] = content[1];
      result['fax'] = content[2];
      result['email'] = content[3];
      result['bus'] = content[4];
      result['subway'] = content[5];
    res.render('./college/location', { userid, username, nickname, result });
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

function clear_year(arr){ 

    let temp = [];
    let temp2 = [];
    for(let i = 0; i<arr.length; i++){ 
        temp.push(String(arr[i].dataValues.year));
        temp = [...new Set(temp)]; 
    }
    temp.reverse(); 
    
    temp.forEach(v=>{ 
        let box = {}; 
        box['year'] = v; 
        box['content'] = [];
        temp2.push(box); 
    })
    
    arr.forEach(v=>{
        for(let i = 0; i<temp2.length; i++){ 
            if(temp2[i]['year']==v.dataValues.year){ 
                temp2[i]['content'].push(v.dataValues.content); 
                break; 
            }
        }
    })

    
    return temp2; 
}