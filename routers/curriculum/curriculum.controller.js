const jwtId = require('../../jwtId')

let curriculum = (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;

    res.render('./curriculum/curriculum', { userid });
}

let curriculum_view = (req,res)=>{
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;

    res.render('./curriculum/curriculum_view', { userid });
}

module.exports = {
    curriculum,
    curriculum_view
}