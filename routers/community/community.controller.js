const { board, User } = require("../../models");
const jwtId = require('../../jwtId');
const jwtName = require('../../jwtName');
const article_count = 10;
const { update_hit } = require('../update_hit');


let boardType = {
    'notice': ['공지사항', '1'],
    'ki_story': ['KI 이야기', '2'],
    'ki_reporter': ['KI 기자단', '3'],
    'column': ['교수칼럼', '4'],
    'review': ['수강후기', '5'],
}

let list = async (req, res) => {
    let { AccessToken } = req.cookies;
    let { page,search_type,search_value } = req.query
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let board_name = req.params.board_name;
    let title = boardType[board_name][0];
    let type = boardType[board_name][1];
    let pageinfo;

    
    if(search_type!=undefined &&search_value!=undefined){

        
        let result = await board.findAll({
            attributes: ['id', 'writer', 'subject', 'date', 'hit','content'],
            order: [['id', 'DESC']],
            include: [{
                model: User,
                as: 'writer_user',
            }],
            where: { type, },
        })

        let N = await board.count({
            where: { type, },
          });

        result.forEach(ele=>{ 
            ele['num'] = N;
            N--;
        })  


        switch(search_type){
            case 'subject': 
            result =  result.filter(v=>{
             if(v.dataValues.subject.includes(search_value))
             return v; 
         })
            break; 
 
            case 'content': 
            result =  result.filter(v=>{
             if(v.dataValues.content.includes(search_value))
             return v; 
         })
 
            break; 
            
            case 'username': 
            result =  result.filter(v=>{
             if(v.dataValues.writer_user.dataValues.username.includes(search_value))
             return v; 
         })
            break; 
            
        }

         pageinfo = await makePage(page,result,`search`);


        let temp =[]; 
        for(let i = (page-1)*article_count; i<page*article_count; i++){ 
            if(i==result.length)break; 
            temp.push(result[i]); 
        }
        result = temp ; 

        pageinfo["result"]=result;



        
     }

    else{
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
    
         pageinfo = await makePage(page,result,type);
    
      

    }

    res.render(`./community/list`, {
        title, board_name, userid, username, nickname, page,
       pageinfo,search_type,search_value, 
   })
   
}


let search_list = (req,res)=>{
    let {search_type, search_value, board_name} =req.body;  
    res.redirect(`/community/${board_name}/list?page=1&search_type=${search_type}&search_value=${search_value}`)

}

let search_review = (req,res)=>{
    let {search_type, search_value,} =req.body;  
    res.redirect(`/community/review?page=1&search_type=${search_type}&search_value=${search_value}`)

}






let view = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let { id, num,search_type,search_value,  } = req.query;

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    update_hit(id, ip);
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
    result['num'] = num;
    res.render('./community/view', {
        result, title, board_name, userid, username, nickname, page,search_type,search_value, 
    })

}


/* 수강후기 */
let review = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let type = '5'
    let {page,search_type,search_value} = req.query;

    if(search_type!=undefined &&search_value!=undefined){

        let result = await board.findAll({
            attributes: ['id', 'writer', 'subject', 'date', 'hit','content'],
            order: [['id', 'DESC']],
            include: [{
                model: User,
                as: 'writer_user',
            }],
            where: { type, },
        })

        let N = await board.count({
            where: { type, },
          });

        result.forEach(ele=>{ 
            ele['num'] = N;
            N--;
        })  


        switch(search_type){
            case 'subject': 
            result =  result.filter(v=>{
             if(v.dataValues.subject.includes(search_value))
             return v; 
         })
            break; 
 
            case 'content': 
            result =  result.filter(v=>{
             if(v.dataValues.content.includes(search_value))
             return v; 
         })
 
            break; 
            
            case 'username': 
            result =  result.filter(v=>{
             if(v.dataValues.writer_user.dataValues.username.includes(search_value))
             return v; 
         })
            break; 
            
        }

         pageinfo = await makePage(page,result,`search`);


        let temp =[]; 
        for(let i = (page-1)*article_count; i<page*article_count; i++){ 
            if(i==result.length)break; 
            temp.push(result[i]); 
        }
        result = temp ; 

        pageinfo["result"]=result;



        
     }

    else{
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
    
         pageinfo = await makePage(page,result,type);
    
      

    }

    res.render(`./community/review`, {
          userid, username, nickname, page,
       pageinfo,search_type,search_value, 
   })
}

let review_write = (req, res) => {
    let { AccessToken } = req.cookies;
    let {page} = req.query;
    console.log(page);
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    res.render('./community/review_write', { userid, username, nickname,page });
}

let review_insert = async (req, res) => {
    //DB에 insert 해서 뿌려주기
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let { review_writer, review_title, review_content } = req.body;

    if (userid != undefined) {
        let result = await board.create({
            writer: userid,
            subject: review_title,
            content: review_content,
            type: '5'
        })
        res.redirect(`/community/review_view?id=${result.id}&page=1`)
    } else if (nickname != undefined) {
        let kakao_id_find = await User.findOne({
            where: { username: review_writer }
        })
        let kakao_id = kakao_id_find.dataValues.userid

        let result = await board.create({
            writer: kakao_id,
            subject: review_title,
            content: review_content,
            type: '5'
        })
        res.redirect(`/community/review_view?id=${result.id}&page=1`)
    }
}

let review_view = async (req, res) => {
    // 여기서 DB에서 받아와서 값 뿌려주면 됨
    let { AccessToken } = req.cookies;
    let {page,search_type,search_value } = req.query;
    let { id, num, msg } = req.query;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    update_hit(id, ip);

    let result = await board.findOne({
        attributes: ['id', 'writer', 'subject', 'content', 'date', 'hit'],
        include: [{
            model: User,
            as: 'writer_user',
        }],
        where: { id, },
    });
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    result['num'] = num;
    res.render('./community/review_view', {
        userid, username, nickname, page, result, msg, search_type,search_value
    });
}



let review_modify = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;       // 로그인한 사용자 아이디
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;   // 로그인한 사용자 이름
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;    //kakao login한 사용자
    let { id, page, num } = req.query;      //작성글에 있는 내용들을 쿼리로 보낸거

    let writer_result = await board.findOne({
        where: { id }
    })
    let writer_id = writer_result.dataValues.writer // 원글 작성자

    if (userid != undefined) {
        if (userid != writer_id) {
            res.redirect(`/community/review_view?page=${page}&id=${id}&num=${num}&msg=수정권한없음`)
        } else {
            let result = await board.findOne({
                where: { id }
            })
            res.render('./community/review_modify', {
                result, username, id, page, num
            });
        }
    } else if (nickname != undefined) {
        let kakao_id_find = await User.findOne({
            where: { username : nickname }
        })
        let kakao_id = kakao_id_find.dataValues.userid

        if (kakao_id != writer_id) {
            res.redirect(`/community/review_view?page=${page}&id=${id}&num=${num}&msg=수정권한없음`)
        } else {
            let result = await board.findOne({
                where: { id }
            })
            res.render('./community/review_modify', {
                result, nickname, id, page, num
            });
        }
    }else{
        res.redirect(`/community/review_view?page=${page}&id=${id}&num=${num}&msg=수정권한없음`)
    }
}


let review_modify_submit = async (req, res) => {
    let { id, page, num } = req.query;
    let { review_title, review_writer, review_content } = req.body;

    await board.update({
        subject: review_title,
        content: review_content
    }, { where: { id } })

    res.redirect(`/community/review_view?page=${page}&id=${id}&num=${num}`)
}


module.exports = {
    list,
    view,
    review,
    review_write,
    review_insert,
    review_view,
    review_modify,
    review_modify_submit,
    search_list,
    search_review ,
}




async function makePage(page,result,type){ //type: 글 타입.   page: 요청한 페이지.  result는 type으로 뽑은 글의 수. 
    const pageCount = 10; // 페이지 블록의 수 
    let count; 
    if(type==undefined){
      count = await consult.count({
      });
    }else if(type=='search'){
        count = result.length;
    }
    else{
        count = await board.count({
            where: { type, },
          });
      let N = count - article_count * (page - 1);
      result.forEach(v=>{
        v['num'] = N;
        N--; 
      })
    }
    let end = Math.ceil(count / article_count);
  
    let pageblock = [];
    pageblock[0] = [];
    let block = 0;
    let p = 1;
    let nowblock = 0;
    let nowpageblock;
    while (count > 0) {
        count -= article_count;
        pageblock[block].push(p)
        if (p == page) {
            nowpageblock = pageblock[block];
            nowblock = block;
        }
        p++;
  
        if (p > pageCount * (block + 1)) {
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
    let pageinfo = {
        "prev":prev,
        "next":next,
        "nowpageblock":nowpageblock,
        "end":end,
        "result":result,
    }
    return pageinfo; 
  }


