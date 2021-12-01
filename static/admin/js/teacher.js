async function check(id){
  let show;
 
  if(this.event.path[0].checked){//true
    show =1;
  }else{//false
    show=0; 
  }

  let url = 'http://13.209.126.185:3000/admin/info/teacher/show'
  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id,
      show, 
    }),
  }
  let response = await fetch(url, options);
  if(!response.ok) alert('수정실패했습니다.');
  else alert('수정성공했습니다.');   

}