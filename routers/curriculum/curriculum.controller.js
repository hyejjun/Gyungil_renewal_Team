const jwtId = require('../../jwtId')
const jwtName = require('../../jwtName')

let curriculum = (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;

    res.render('./curriculum/curriculum', { userid,username });
}

let curriculum_view = (req,res)=>{
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;

    res.render('./curriculum/curriculum_view', { userid,username });
}

module.exports = {
    curriculum,
    curriculum_view
}