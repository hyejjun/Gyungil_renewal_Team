let tag = document.querySelector(".typing");
let app = new Hakademy.util.typing(tag, {
    text: [
        "게임 AR/VR 과정",
        "블록체인 기반 핀테크 과정",
        "게임 원화 과정",
        "게임 기획 과정",
        "프로게이머 양성 과정",
        "게임 프로그래밍 과정"
    ],
    cursor:{
        display:false,
        flicker:true,
    },
    color: {
        apply: false,
        
    }
});
