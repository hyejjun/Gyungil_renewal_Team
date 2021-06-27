window.addEventListener('DOMContentLoaded', () => {
    let visualImg = document.querySelectorAll('.slide');
    visualImg.item(0).setAttribute('class', 'slide on');
})


let visualIdx = 0;
// let increment; 




// viPagination(0); 
autoVslide = setInterval(visualSlide, 4500);

function visualSlide(type) {

    visualImg = document.querySelectorAll('.slide');
    if (type === true) {
        visualIdx2 = visualIdx - 1;
        if (visualIdx2 < 0) { visualIdx2 = visualImg.length - 1; }
        for (i = 0; i < visualImg.length; i++) {
            if (i == visualIdx) {
                visualImg.item(i).setAttribute('class', 'slide visualSlide_out2');
            }
            else if (i == visualIdx2) {
                visualImg.item(i).setAttribute('class', 'slide visualSlide_in2');
                // viPagination(i);

            }
            else {
                visualImg.item(i).setAttribute('class', 'slide');
            }
        }
        visualIdx--;
        if (visualIdx < 0) { visualIdx = visualImg.length - 1; }

    }
    else {
        visualIdx2 = visualIdx + 1;
        if (visualIdx2 == visualImg.length) { visualIdx2 = 0; }
        for (let i = 0; i < visualImg.length; i++) {
            if (i == visualIdx) {
                visualImg.item(i).setAttribute('class', 'slide visualSlide_out');
            }
            else if (i == visualIdx2) {
                visualImg.item(i).setAttribute('class', 'slide visualSlide_in');
                // viPagination(i);

            }
            else {
                visualImg.item(i).setAttribute('class', 'slide');
            }
        }
        visualIdx++;
        if (visualIdx == visualImg.length) visualIdx = 0;
    }
}
//비주얼 슬라이드 버튼 눌렀을 떄
function viSlideBtn(type) {
    // clearInterval(increment);   
    clearInterval(autoVslide);
    visualSlide(type);
}

    //   function viPagination(idx){
    //     clearInterval(increment); 
    //     let visualImg = document.querySelectorAll('.slide'); 
    //     let cnt = visualImg.length; 
    //     let length=400;  
    //     let verse = Math.floor(Number(length)/Number(cnt));
    //     let base = idx*verse; 
    //     let add = Math.ceil(verse/100); 
    //     visualPn=document.querySelector('#visual_pagination>div');
    //     increment = setInterval(()=>{
    //       visualPn.style.width=base+'px';
    //         base+=add; 
    //     },45) 

    // }


