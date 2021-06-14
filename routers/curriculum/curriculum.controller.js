const jwtId = require('../../jwtId')

let curriculum = (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;

    res.render('./curriculum/curriculum', { userid });
}

module.exports = {
    curriculum,
}