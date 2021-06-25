(() => {

 
  // 커리큘럼 스티키 
  const stepElems = document.querySelectorAll('.subject_text');
  const graphicElems = document.querySelectorAll('.subject_image');
  let currentItem = graphicElems[0]; //현재활성화된 그래픽아이템을 지정하는 변수. 
  let ioIndex;


  const io = new IntersectionObserver((entries, observer) => {// observe가 관찰하고 있는 애가 등장할 때마다 실행된다. 
    ioIndex = entries[0].target.dataset.index * 1;
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]); //관찰 
    // stepElems[i].setAttribute('data-index',i);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }


  function activate(action) {
    currentItem.classList.add('visable');
    if (action) {
      actions[action](true);
    }
  }

  function inactivate(action) {
    currentItem.classList.remove('visable');
    if (action) {
      actions[action](false);
    }
  }

  window.addEventListener('scroll', () => {
    let step;
    let boundingRect;

    // for (let i = 0; i < stepElems.length; i++) {
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];
      if (!step) continue;
      boundingRect = step.getBoundingClientRect();

      if ((boundingRect.top > window.innerHeight * 0.1) &&
        (boundingRect.top < window.innerHeight * 0.8)) {
        inactivate(currentItem.dataset.action);
        currentItem = graphicElems[step.dataset.index];
        activate(currentItem.dataset.action);
      }
    }
  });

  activate();


  //gnb 숨기기 
  const gnb_wrap = document.querySelector('#gnb_wrap');
  
  document.addEventListener('scroll', function() {
    if(document.documentElement.scrollTop<100){   
      gnb_wrap.style.opacity = '1'; 
  }else{
    gnb_wrap.style.opacity = '0'; 
  }
});

gnb_wrap.addEventListener('mouseover',()=>{
  gnb_wrap.style.opacity = "1";
})
gnb_wrap.addEventListener('mouseout',()=>{
  if(document.documentElement.scrollTop<100){   
    gnb_wrap.style.opacity = '1'; 
}else{
  gnb_wrap.style.opacity = "0";
}
})

















})();