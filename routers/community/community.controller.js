let notice = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./community/notice',{userid});
}
/* 수강후기 */
let review = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./community/review',{userid});
}

let review_write = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./community/review_write',{userid});
}

let review_insert = (req,res)=>{
    //DB에 insert 해서 뿌려주기
    console.log(req.body);
    
    let {userid} = req.cookies;
    let {review_title, review_writer, review_content} = req.body;
    res.render('./community/review_view',{
        review_title,
        review_writer,
        review_content,
        userid
    });
}

let review_view = (req,res)=>{
    // 여기서 DB에서 받아와서 값 뿌려주면 됨
    let {userid} = req.cookies;
    res.render('./community/review_view',{
        userid
    });
}

/*경일이야기*/
let ki_story = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./community/ki_story',{userid});
}
let ki_reporter = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./community/ki_reporter',{userid});
}
let ki_professor = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./community/ki_professor',{userid});
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