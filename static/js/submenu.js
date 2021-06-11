const submenu = document.querySelector('.submenu');
const gnb = document.querySelector('.gnb');
gnb.addEventListener('mouseover',()=>{
    submenu.style.display = "block";
})
gnb.addEventListener('mouseout',()=>{
    submenu.style.display = "none";
})
submenu.addEventListener('mouseover',()=>{
    submenu.style.display = "block";
})
submenu.addEventListener('mouseout',()=>{
    submenu.style.display = "none";
})


