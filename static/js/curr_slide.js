
(()=>{

  window.addEventListener('load',()=>{
    scrollTo(0,0); 
  })

  const ul  = document.querySelector('#card_box');
  const sticky  = document.querySelector('#sticky_wrap');
  const li = document.querySelectorAll('.card');
  let flag= true; 
  let start; 
  let length;
  let wrapHeight;
  let move;
  let wrapWidth; 
  const io = new IntersectionObserver((entries,observer)=>{
    console.log(entries[0]); 
    if(flag){
      liLength = entries[2].boundingClientRect.width;
      liHeight = entries[2].boundingClientRect.height;
      wrapHeight =  entries[0].boundingClientRect.height;
      wrapWidth =  entries[0].boundingClientRect.width;
      start = entries[1].boundingClientRect.top; 
      length = entries[1].boundingClientRect.width;
      flag=false; 
    }
  })

  io.observe(sticky);
  io.observe(ul);
  io.observe(li[0]);



  let extend = true; 
  document.addEventListener('scroll', function() {
    let scroll = document.documentElement.scrollTop;
    move = scroll-start; 
    


    if(scroll>=start &&length-move>wrapWidth){ 
      ul.style.transform=`translateX(-${move}px)`;
      sticky.style.height = move+wrapHeight+ 'px'; 
    }

    if(length-move==wrapWidth){
      sticky.style.height = wrapHeight+600+'px';    
    }
    if(scroll<start){
      ul.style.transform=`translateX(0px)`;
    }
});











})(); 






























