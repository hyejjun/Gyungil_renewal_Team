const priceInput = document.querySelector('.priceInput')
const timeInput = document.querySelector('.timeInput')
const btn = document.querySelector('.btn')

async function init(){
    console.log('init')
    btn.addEventListener('click',submitValue)
}

async function submitValue(){
    console.log(priceInput.value, timeInput.value)
    if(priceInput.value.length !== 0 && timeInput.value.length !== 0){
        if(isNaN(priceInput.value) === false){
            let test = await axios.post('http://localhost:3000/insertdata',{
            price: priceInput.value, time: timeInput.value
            })
            if(test.data.success === true){
                location.href = 'http://localhost:3000/main'
            } else{
                alert('오류가 발생하였습니다.')
            }
            
        } else {
            alert('가격은 숫자로 설정해주세요.')
        }
    } else {
        alert('값을 모두 설정해주세요.')
    }
}

document.addEventListener('DOMContentLoaded',init)