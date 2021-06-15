
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