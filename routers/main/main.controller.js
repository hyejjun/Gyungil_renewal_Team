const { intro, curriculum } = require("../../models");
const { Op } = require("sequelize");


// const intro_type = []; 
// intro_type[0] ='interior'
// intro_type[1] ='main_visual'
// intro_type[2] ='popup'

let main = async (req, res) => {
    let { msg } = req.query;
    let { userid } = req.cookies;

    //메인비주얼 불러오기
    let visual = await intro.findAll({
        where: {
            [Op.and]: [{ type: '1' }, { show: '1' }],
        },
    });

    //커리큘럼 불러오기 
    let curr = await curriculum.findAll({

    })

    //수강후기 불러오기


    res.render('./index', { msg, userid, visual, curr })
}

module.exports = {
    main
}