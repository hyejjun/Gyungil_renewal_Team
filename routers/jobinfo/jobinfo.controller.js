const { board,User } = require('../../models');
const jwtId = require('../../jwtId')
const {update_hit} = require('../update_hit'); 


const article_count = 10;
let boardType = {
    'interview': ['취업자인터뷰', '6'],
    'portfolio': ['포트폴리오', '7']
}



let list = async (req, res) => {
    let { AccessToken } = req.cookies;
    let page = req.query.page;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let board_name = req.params.board_name;
    let title = boardType[board_name][0];
    let type = boardType[board_name][1];


    let result = await board.findAll({
        offset: article_count * (page - 1),
        limit: article_count,
        attributes: ['id', 'writer', 'subject', 'date', 'hit'],
        order: [['id', 'DESC']],
        include: [{
            model: User,
            as: 'writer_user',
          }],
        where: { type, },
    })

    let count = await board.count({
        where: { type, },
    });

    let start = 1;
    let end = Math.ceil(count / article_count);
    let N = count - article_count * (page - 1);
    result = number_set(result, N);

    let pageblock = [];
    pageblock[0] = [];
    let block = 0;
    let p = 1;
    let nowblock = 0;
    let nowpageblock = [];
    while (count > 0) {
        count -= article_count;
        pageblock[block].push(p)
        if (p == page) {
            nowpageblock = pageblock[block];
            nowblock = block;
        }
        p++;

        if (p > 10 * (block + 1)) {
            pageblock.push([]);
            block++;
        }
    }

    let prev;
    let next;
    if (nowblock == 0) {
        prev = false;
    } else {
        prev = pageblock[nowblock - 1][article_count - 1];
    }

    if (nowblock == pageblock.length - 1) {
        next = false;
    } else {
        next = pageblock[nowblock + 1][0];
    }

    res.render(`./jobinfo/list`, {
        result, title, board_name, userid, nowpageblock, start, end, prev, next, page,
    })
}



let view = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let id = req.query.id;
    const ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
    update_hit(id,ip);
    let page = req.query.page;
    let board_name = req.params.board_name;
    let title = boardType[board_name][0];
    let result = await board.findOne({
        attributes: ['writer', 'subject', 'content', 'date', 'hit'],
        include: [{
            model: User,
            as: 'writer_user',
          }],
        where: { id, },
    });

    res.render('./jobinfo/view', {
        result, title, board_name, userid, page,
    })

}





module.exports = {
    list,
    view,

}


//글번호생성 함수 
function number_set(x, N) {

    let arr = [];
    x.forEach(ele => {
        ele.dataValues['num'] = N;
        arr.push(ele.dataValues)
        N--;
    });
    return arr;
}