const { Portfolio } = require('../../models');
const jwtId = require('../../jwtId')

let jobinfo = (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    res.render('./jobinfo/interview', { userid });
}

let recruit = (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    res.render('./jobinfo/recruit', { userid })
}

let portfolio = (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    res.render('./jobinfo/portfolio', { userid })
}
let portfolio_submit = (req, res) => {
    res.render('./jobinfo/portfolio_submit');
}

let portfolio_submit_success = async (req, res) => {
    console.log(req.body);
    let { portfolio_explanation } = req.body;
    console.log(req.file);
    let portfolio_file = req.file == undefined ? '' : req.file.path;

    await Portfolio.create({
        explanation: portfolio_explanation,
        file: portfolio_file
    });
    res.redirect('/jobinfo/portfolio')

}

module.exports = {
    jobinfo,
    recruit,
    portfolio,
    portfolio_submit,
    portfolio_submit_success
}