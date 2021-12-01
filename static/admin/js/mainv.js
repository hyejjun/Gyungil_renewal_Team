async function check(){
  let id = this.event.path[0].parentNode.parentNode.childNodes[1].value; 
  let show; 
  if(this.event.path[0].checked){//true
    show =1;
  }else{//false
    show=0; 
  }

  let url = 'http://13.209.126.185:3000/admin/main/visual/update/show'
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
  else alert('수정성공했습니다.');   
}

async function link_update(id){
  if(this.event.path[0].value=="링크수정"){
  let link_box =this.event.path[2].childNodes[5]; 
  let origin_link = this.event.path[2].childNodes[5].childNodes[0].childNodes[0].innerHTML;
    this.event.path[0].value ="등록"
  let tmplink = `<input type="text"  id="update_link" value = "${origin_link}">`; 
  link_box.innerHTML = tmplink;
  }
  else if(this.event.path[0].value=="등록"){ 
    let update_link = document.querySelector('#update_link').value;
    let url = 'http://13.209.126.185:3000/admin/main/visual/update/link'

    let options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id,
        link:update_link,
      }),
    }
    let response = await fetch(url, options);
    window.location.reload(); 
    if(!response.ok) alert('수정실패했습니다.');
    else alert('수정성공했습니다.');   
  }
}



async function destroy(id){ 
  if(confirm('정말삭제하시겠습니까?')){

    const li = this.event.path[0].parentNode.parentNode; 
    let url = 'http://13.209.126.185:3000/admin/main/visual/destroy'
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
      const ul = document.querySelector('#visual_box');
      ul.removeChild(li);  
    }else{
      alert('삭제실패했습니다.');  
    }
  }
}