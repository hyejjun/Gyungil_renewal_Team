
  window.addEventListener('DOMContentLoaded',()=>{
    const td_subject = document.querySelectorAll('.td_subject');
    td_subject.forEach(v=>{
      v.addEventListener('click',()=>{
        let rv_detail = document.querySelector('#rv_detail'); 
        let rv_detail_subject = document.querySelector('#rv_detail_subject'); 
        let rv_detail_name = document.querySelector('#rv_detail_name'); 
        rv_detail_subject.innerHTML = this.event.path[0].innerHTML;
        rv_detail.innerHTML=this.event.path[0].previousSibling.previousSibling.value;
        rv_detail_name.innerHTML = this.event.path[0].nextSibling.nextSibling.innerHTML;
      })
    })
    })





function showdetail(){
  const detail = document.querySelector('#sbj_detail'); 
  const name = document.querySelector('#sbj_detail_name'); 

  name.innerHTML = this.event.path[2].childNodes[5].childNodes[1].innerHTML; 
  detail.innerHTML =this.event.path[2].childNodes[3].value; 
  return; 
}


function addSub(){

  let id= this.event.path[0].parentNode.parentNode.childNodes[1].value;
  let selectedLi = document.querySelector('#selected'+id);
  selectedLi.style.display = "block"
  return; 
}

function dltSub(){
  let thisLi = this.event.path[0].parentNode.parentNode;
  thisLi.style.display='none'; 
  return; 
}

function upList(){ 
  let pick = this.event.path[0].parentNode.parentNode;
  let temp = pick; 
  let upper; 
  while(upper==undefined){
    if(temp.previousSibling.previousSibling==undefined)break; 
    if(temp.previousSibling.previousSibling.style.display=='block'){
      
      upper = temp.previousSibling.previousSibling; 
    }else{
      temp = temp.previousSibling.previousSibling; 
      if(temp==undefined)break; 
    }
  } 
  if(upper!=undefined)
  changeLi(pick,upper); 
  return; 
}

function downList(){ 
  let pick = this.event.path[0].parentNode.parentNode;
  let temp = pick; 
  let  lower; 
  while( lower==undefined){
    if(temp.nextSibling.nextSibling==undefined)break; 
    if(temp.nextSibling.nextSibling.style.display=='block'){
      
       lower = temp.nextSibling.nextSibling; 
    }else{
      temp = temp.nextSibling.nextSibling; 
      if(temp==undefined)break; 
    }
  } 
  if( lower!=undefined)
  changeLi(pick, lower); 
  return; 
}


function changeLi(x,y){ 
  let tempid = x.id; 
  let temphiddenid = x.childNodes[1].value; 
  let tempname = x.childNodes[3].childNodes[1].innerHTML; 
  x.id = y.id; 
  x.childNodes[1].value = y.childNodes[1].value;
  x.childNodes[3].childNodes[1].innerHTML = y.childNodes[3].childNodes[1].innerHTML;
  y.id = tempid; 
  y.childNodes[1].value = temphiddenid;
  y.childNodes[3].childNodes[1].innerHTML = tempname; 
  return; 
}


function sortLi(){
  let subsort = []; 
  const ul = document.querySelector('#now_sub');
  let N = ul.childNodes.length-1; 
  for(let i = 1; i<N; i+=2){
    if(ul.childNodes[i].style.display=='block'){
      subsort.push(ul.childNodes[i].childNodes[1].value)
    }
  }
  if(subsort.length==0){
    alert('교육과정을 입력해주세요.')
    return false; 
  }
  subsort = subsort.join(',');
  
  let form = document.querySelector('#form'); 
  let input = document.createElement('input');
  input.setAttribute('type','hidden'); 
  input.setAttribute('name','subsort'); 
  input.setAttribute('value',subsort); 

  form.appendChild(input); 
  return true;   
}

function postcurr(){
  let form = document.querySelector('#form');
  selcect_review(); 
  if(sortLi())
  form.submit(); 
}


async function destroy_curr(){
  let tbody = document.querySelector('.tbody'); 

 if(confirm("정말 삭제하시겠습니까?")){
   //true
   let id =  this.event.path[0].dataset.idx;
  let tr = this.event.path[0].parentNode.parentNode; 
   let url = 'http://localhost:3000/admin/curriculum/curr/destroy'
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
     tbody.removeChild(tr); 
     alert('삭제되었습니다'); 
   }
 }
 return; 
}

function selcect_review(){
  let reviews = document.querySelectorAll('.select_rv'); 
  let rv =[]; 
  reviews.forEach(v=>{
    if(v.checked){
       rv.push(v.value); 
    }
  })
  rv = rv.join(','); 
  let form = document.querySelector('#form'); 
  let input = document.createElement('input');
  input.setAttribute('type','hidden'); 
  input.setAttribute('name','rv'); 
  input.setAttribute('value',rv);
  form.appendChild(input); 
}