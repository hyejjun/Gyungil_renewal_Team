const socket = io('http://localhost:3000/')
socket.on('connection', () => { console.log('client') })

const nameInput = document.querySelector('.nameInput')
const txtInput = document.querySelector('.txtInput')
const btn = document.querySelector('.btn')
let aucPrice = document.querySelector('.aucPrice')
let shown = document.querySelector('.shown')
let oneLine = document.querySelector('.oneLine')
let printName = document.querySelector('.printName')
let printPrice = document.querySelector('.printPrice')

async function loadData(){
    let {data} = await axios.post('http://localhost:3000/maindata',{
        productId: 1
    }) //productId는 상태값에서 가져오면 된다?
    console.log(data[0])
    while (oneLine.hasChildNodes()) { oneLine.removeChild(oneLine.firstChild); }
    // 차일드div전부 클리어 후 데이터 재로드
    for(let i = 0; i<data[0].length; i++){
        // 데이터를 div에 담아 한줄 한줄 뿌린다
        let nameDiv = document.createElement('div')
        let priceDiv = document.createElement('div')
        let frame = document.createElement('div')
        nameDiv.className = 'printName'
        priceDiv.className = 'printPrice'
        frame.className = 'oneLine'
        nameDiv.innerHTML = data[0][i].name
        priceDiv.innerHTML = data[0][i].price
        frame.appendChild(nameDiv)
        frame.appendChild(priceDiv)
        oneLine.appendChild(frame)
    }
}

async function init(){
    loadData()
    btn.addEventListener('click',submitValue)
    let {data} = await axios.post('http://localhost:3000/maindata',{
        productId: 1
    })
    if(data[0].length == 0){
        aucPrice.innerHTML = `현재 경매가: ${data[1]}`
    } else{
        aucPrice.innerHTML = `현재 경매가: ${data[0][data[0].length-1].price}`
    }
    // 최초 로딩시에는 입찰자가 없기 때문에 경매가가 기존 설정되어 있는 것으로 넣어야 함
    // 근데 가격 입력 후 새로고침을 하면 최초 경매가로 돌아가기 때문에
    // 입찰 정보가 있는지 확인 후 있으면 가장 마지막 가격을, 없으면 최초 경매가로 넣는다
}

async function submitValue(){
    if(nameInput.value.length !== 0 && txtInput.value.length !== 0){
        if(isNaN(txtInput.value) === false){
            // isNaN이 true면 숫자가 아닌 값이 입력되어 있다는 것
            // 그러므로 false가 뜰 때 진행해야 함
            let test = await axios.post('http://localhost:3000/auction',{
            name: nameInput.value, price: txtInput.value, productId: 1
            // 테스트 버전에서 상품 ID는 1번으로만 진행되나, 실제로는 상품별로 ID값을 다르게 주어야 함
            })
            if(test.data.success === true){
                loadData() 
                // 원래는 div를 입력하는 방식으로 했으나 그냥 다 로드하는건 어떨까 싶었음
                // 웹소켓을 이용 모두에게 실시간 업데이트를 제공하는 것도 고려해봄직 한 듯
                aucPrice.innerHTML = `현재 경매가: ${txtInput.value}`
            } else if(test.data.success === false && test.data.reason == 'price'){
                alert('현재 입찰 가격보다 낮은 가격을 쓸 수 없습니다.')
            } else if(test.data.success === false && test.data.reason == 'expired'){
                alert('종료된 경매입니다.')
            }
        } else {
            alert('가격은 숫자로 써 주세요.')
        }
    } else {
        alert('칸을 모두 입력해 주세요.')
    }
}

document.addEventListener('DOMContentLoaded',init)