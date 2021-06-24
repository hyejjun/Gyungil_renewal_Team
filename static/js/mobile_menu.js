const mobile_menu_li = document.querySelectorAll('.mobile_gnb_li')
const mobile_submenu = document.querySelectorAll('.mobile_submenu_ul');

function li_click(idx){
    //mobile_submenu.setAttribute('class', 'mobile_submenu_ul')
    mobile_menu_li[idx].onclick = function(){
        
        if(this.childNodes[1].classList.length == 1){
            this.childNodes[1].classList.add('open')
        } else if(this.childNodes[1].classList.length == 2){
            this.childNodes[1].classList.remove('open')
        }
    }
}

for(let i=0; i<mobile_menu_li.length; i++){
    li_click(i)
}

