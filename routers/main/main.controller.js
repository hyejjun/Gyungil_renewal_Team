const { main_visual, curriculum,main_rv ,board, User } = require("../../models");
const { Op } = require("sequelize");
const jwtId = require('../../jwtId')
const jwtName = require('../../jwtName');


// const intro_type = []; 
// intro_type[0] ='interior'
// intro_type[1] ='main_visual'
// intro_type[2] ='popup'

let main = async (req, res) => {
    let { msg } = req.query;
    let { AccessToken } = req.cookies;

    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;

    //메인비주얼 불러오기
    let visual = await main_visual.findAll({
        where: { show:1,
        },
    });

    //커리큘럼 불러오기 
    let curr = await curriculum.findAll({
    })
    curr.shift(); 
    //수강후기 불러오기
    let review = await main_rv.findAll({
        include: [{
            model: board,
            as: 'rv',
            include:[{
                model:User,
                as:'writer_user'
            }]
          }], 
    })
   

    
    let n=1; 
    review.forEach(v=>{
        v['quot'] = n;
        n++;
        if(n==6) n = 1;  
    })



    if (AccessToken != undefined) {
        res.render('./index', { msg, userid, username, visual, curr, review,  })
    }else if(req.session.kakao != undefined){
        let {nickname} = req.session.kakao.properties
        res.render('./index', { msg, nickname, visual, curr, review,  })
    } else {
        res.render('./index', { msg, visual, curr, review, })
    }

   

    // if (AccessToken != undefined) {
    //     res.render('./index', { msg, userid, username, visual, curr })
    // } else {
    //     res.render('./index', { msg, visual, curr, review, })
    // }

}

module.exports = {
    main
}