const { board } = require("../../models");
const jwtId = require('../../jwtId');
const article_count = 10;


let boardType = {
    'notice': ['공지사항', '1'],
    'ki_story': ['KI 이야기', '2'],
    'ki_reporter': ['KI 기자단', '3'],
    'column': ['교수칼럼', '4'],
    'review': ['수강후기', '5'],
}

let list = async (req, res) => {
    let { AccessToken } = req.cookies;
    let {page} = req.query
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let board_name = req.params.board_name;
    let title = boardType[board_name][0];
    let type = boardType[board_name][1];


    let result = await board.findAll({
        offset: article_count * (page - 1),
        limit: article_count,
        attributes: ['id', 'writer', 'subject', 'date', 'hit'],
        order: [['id', 'DESC']],
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





    res.render(`./community/list`, {
        result, title, board_name, userid, nowpageblock, start, end, prev, next,page
    })
}

let view = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let id = req.query.id;
    let page = req.query.page;
    let board_name = req.params.board_name;
    let title = boardType[board_name][0];
    let result = await board.findOne({
        attributes: ['writer', 'subject', 'content', 'date', 'hit'],
        where: { id, },
    });

    res.render('./community/view', {
        result, title, board_name, userid,page,
    })

}


/* 수강후기 */
let review = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let type = '5'
    let page = req.query.page;

    let result = await board.findAll({
        offset: article_count * (page - 1),
        limit: article_count,
        attributes: ['id', 'writer', 'subject', 'date', 'hit'],
        order: [['id', 'DESC']],
        where: { type, },
    })

    let count = await board.count({
        where: { type, },
    });

 
    let end = Math.ceil(count / article_count);
    let N = count - article_count * (page - 1);
    result = number_set(result, N);

    let pageblock = [];
    pageblock[0] = [];
    let block = 0;
    let p = 1;
    let nowblock = 0;
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
        prev = pageblock[nowblock - 1][9];
    }

    if (nowblock == pageblock.length - 1) {
        next = false;
    } else {
        next = pageblock[nowblock + 1][0];
    }
    console.log(userid); 
    res.render('./community/review', {
        userid,
        result,
        nowpageblock,
        end,
        prev,
        next,
        page
    });
}

let review_write = (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    res.render('./community/review_write', { userid });
}

let review_insert = async (req, res) => {
    //DB에 insert 해서 뿌려주기

    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let { review_title, review_content } = req.body;

    let result = await board.create({
        writer: userid,
        subject: review_title,
        content: review_content,
        type: '5'

    })

    //리다이렉트로 바꾸기 
    res.redirect(`/community/review_view?id=${result.id}&page=1`)
    
}

let review_view = async(req, res) => {
    // 여기서 DB에서 받아와서 값 뿌려주면 됨
    let { AccessToken } = req.cookies;
    let page = req.query.page;
    let id = req.query.id;
    
    let result = await board.findOne({
        attributes: ['writer', 'subject', 'content', 'date', 'hit'],
        where: { id, },
    });
    
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    res.render('./community/review_view', {
       userid,page,result, 
    });
}



module.exports = {
    list,
    view,
    review,
    review_write,
    review_insert,
    review_view,
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