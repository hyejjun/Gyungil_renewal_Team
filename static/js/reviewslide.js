const rv_box = document.querySelector('#rv_box');
const rv_cards = document.querySelectorAll('#rv_box>li');

let base = 0; 
let n = 0; 
let card_length = 380; 
function moveleft(){ 
  base+=2;
  rv_box.style.transform=`translateX(-${base}px)`;
}


const io = new IntersectionObserver((entries,observer)=>{

  let boxlength = entries[0].boundingClientRect.width; 
})

io.observe(rv_box);






let flag = true; 
document.addEventListener('scroll', function() {
  if(window.pageYOffset>800 &&flag==true){ 
    flag= false; 
    setInterval(moveleft,20);
  }
})

