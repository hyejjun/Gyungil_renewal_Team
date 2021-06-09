let notice = (req,res)=>{
    res.render('./community/notice');
}
/* 수강후기 */
let review = (req,res)=>{
    res.render('./community/review');
}

let review_write = (req,res)=>{
    res.render('./community/review_write');
}

let review_insert = (req,res)=>{
    //DB에 insert 해서 뿌려주기
    console.log(req.body);
    

    let {review_title, review_writer, review_content} = req.body;
    res.render('./community/review_view',{
        review_title,
        review_writer,
        review_content
    });
}

let review_view = (req,res)=>{
    // 여기서 DB에서 받아와서 값 뿌려주면 됨
    res.render('./community/review_view',{

    });
}

/*경일이야기*/
let ki_story = (req,res)=>{
    res.render('./community/ki_story');
}
let ki_reporter = (req,res)=>{
    res.render('./community/ki_reporter');
}
let ki_professor = (req,res)=>{
    res.render('./community/ki_professor');
}

module.exports = {
    notice,
    review,
    review_write,
    review_insert,
    review_view,
    ki_story,
    ki_reporter,
    ki_professor
}