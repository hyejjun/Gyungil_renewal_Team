async function check(){
  let id = this.event.path[0].parentNode.parentNode.childNodes[1].value; 
  let show; 
  if(this.event.path[0].checked){//true
    show =1;
  }else{//false
    show=0; 
  }

  let url = 'http://localhost:3000/admin/info/interior/update'
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
  console.log(response.ok);
  if(!response.ok) alert('수정실패했습니다.');  
}

async function destroy(){ 
  let id = this.event.path[0].parentNode.parentNode.childNodes[1].value;
  const li = this.event.path[0].parentNode.parentNode; 
  let url = 'http://localhost:3000/admin/info/interior/destroy'
  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  }
  let response = await fetch(url, options);
  if(response.ok){
    const ul = document.querySelector('#intrior_box');
    ul.removeChild(li);  
  }else{
    alert('삭제실패했습니다.');  
  }
}