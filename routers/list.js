function makePage(page, result) { //type: 글 타입.   page: 요청한 페이지.  result는 type으로 뽑은 글의 수. 
  const pageCount = 10; // 페이지 블록의 수 
  const article_count = 10;// 한 페이지에 표시되는 글의 수.  
  let count = result.length;
  let end = Math.ceil(count / article_count);
  let temp = [];
  for (let i = (page - 1) * article_count; i < page * article_count; i++) {
    if (i == result.length) break;
    temp.push(result[i]);
  }
  result = temp;

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
    "prev": prev,
    "next": next,
    "nowpageblock": nowpageblock,
    "end": end,
    "result": result,
  }
  return pageinfo;
}




function search(result, search_type, search_value) {
  // if(search_type=='username')
  // let temp = result.filter(v => {
  //   if (v.dataValues[`${search_type}`].includes(search_value))
  //     return v;
  // }) username 때문에 못함; 

  switch (search_type) {
    case 'subject':
      result = result.filter(v => {
        if (v.dataValues.subject.includes(search_value))
          return v;
      })
      break;

    case 'content':
      result = result.filter(v => {
        if (v.dataValues.content.includes(search_value))
          return v;
      })

      break;

    case 'username':
      result = result.filter(v => {
        if (v.dataValues.writer_user.dataValues.username.includes(search_value))
          return v;
      })
      break;

  }

  return result;
}



module.exports = {
  search, makePage,
}
