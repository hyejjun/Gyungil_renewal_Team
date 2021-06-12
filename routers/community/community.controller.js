const { board } = require("../../models");

let boardType = {
    'notice': ['공지사항', '1'],
    'ki_story': ['KI 이야기', '2'],
    'ki_reporter': ['KI 기자단', '3'],
    'column': ['교수칼럼', '4'],
    'review': ['수강후기', '5'],
}

let list = async (req, res) => {
    let { userid } = req.cookies;
    let board_name = req.params.board_name;
    let title = boardType[board_name][0];
    let type = boardType[board_name][1];
    let result = await board.findAll({
        attributes: ['id', 'writer', 'subject', 'date', 'hit'],
        order: [['id', 'DESC']],
        where: { type, },
    })

    result = number_set(result);

    res.render(`./community/list`, {
        result, title, board_name, userid,
    })
}

let view = async (req, res) => {
    let { userid } = req.cookies;
    let id = req.query.id;
    let board_name = req.params.board_name;
    let title = boardType[board_name][0];
    let result = await board.findOne({
        attributes: ['writer', 'subject', 'content', 'date', 'hit'],
        where: { id, },
    });

    res.render('./community/view', {
        result, title, board_name, userid,
    })

}


/* 수강후기 */
let review = (req, res) => {
    let { userid } = req.cookies;
    res.render('./community/review', { userid });
}

let review_write = (req, res) => {
    let { userid } = req.cookies;
    res.render('./community/review_write', { userid });
}

let review_insert = async (req, res) => {
    //DB에 insert 해서 뿌려주기

    let { userid } = req.cookies;
    let { review_title, review_content } = req.body;

    await board.create({
        writer: userid,
        subject: review_title,
        content: review_content,
        type: '5'

    })

    //리다이렉트로 바꾸기 
    res.render('./community/review_view', {
        review_title,

        review_content,
        userid
    });
}

let review_view = (req, res) => {
    // 여기서 DB에서 받아와서 값 뿌려주면 됨
    let { userid } = req.cookies;
    res.render('./community/review_view', {
        userid
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
function number_set(x) {
    let N = x.length;
    let arr = [];
    x.forEach(ele => {
        ele.dataValues['num'] = N;
        arr.push(ele.dataValues)
        N--;
    });
    return arr;
}