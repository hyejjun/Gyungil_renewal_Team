const { board, User, Thumbnail } = require('../../models');
const jwtId = require('../../jwtId')
const { update_hit } = require('../update_hit');
const jwtName = require('../../jwtName')


const article_count = 4;
let boardType = {
    'interview': ['취업자인터뷰', '6'],
    'portfolio': ['포트폴리오', '7']
}



let list = async (req, res) => {
    let { AccessToken } = req.cookies;
    let {page, search_type,search_value} = req.query;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let board_name = req.params.board_name;
    let title = boardType[board_name][0];
    let type = boardType[board_name][1];
    let pageinfo;

    if(search_type!=undefined &&search_value!=undefined){

        
        let result = await board.findAll({
            order: [['id', 'DESC']],
            include: [{
                model: User,
                as: 'writer_user',
            }, {
                model: Thumbnail,
                as: "thumbnails"
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
        }, {
            model: Thumbnail,
            as: "thumbnails"
        }],
        where: { type, },
    })
    
    pageinfo = await makePage(page,result,type);
    
      

}

    res.render(`./jobinfo/list`, {
        title,
        board_name,
        userid,
        username,
        nickname,
        pageinfo, 
        search_type,
        search_value, 
        page, 
    })
}


let search = (req,res)=>{
    let {search_type, search_value, board_name} =req.body;  
    res.redirect(`/jobinfo/${board_name}/list?page=1&search_type=${search_type}&search_value=${search_value}`)

}

let view = async (req, res) => {
    let { AccessToken } = req.cookies;
    let userid = (AccessToken != undefined) ? jwtId(AccessToken) : undefined;
    let username = (AccessToken != undefined) ? jwtName(AccessToken) : undefined;
    let nickname = (req.session.kakao != undefined) ? req.session.kakao.properties.nickname : undefined;
    let { id, num, page,search_type, search_value, } = req.query;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    update_hit(id, ip);
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
    res.render('./jobinfo/view', {
        result, title, board_name, userid, username, nickname,page,search_type, search_value,
    })

}

module.exports = {
    list,
    view,
    search

}


//글번호생성 함수 
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
