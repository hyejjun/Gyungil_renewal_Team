import Router from 'next/router'
import Styled from 'styled-components';

const NeedCert = () => {
    return (
        <>
            <NeedCerfWrapper>
                <div>
                    <div>
                    </div>
                </div>
                <ul>
                    <li>kaikas 서명이 필요합니다.</li>
                    <li>계속 진행하려면 kaikas 팝업창에서 <br/>내용을 확인 후 서명을 완료해주세요</li>
                    <li>(페이지를 이탈할 경우 오류가 발생할 수 있습니다. <br/>취소하려면, kaikas에서 거부를 눌러주세요)</li>
                </ul>
               
            </NeedCerfWrapper>
        </>
    )
}

export default NeedCert

const NeedCerfWrapper = Styled.div`
    position:absolute;
    box-sizing:border-box;
    top:30%;
    width:330px;
    height:230px;
    background-color:white;
    border-radius:3%;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    font-size:12px;
    text-align:center;
    
    div > div {
        position:fixed; 
        left:50%; 
        top:34%; 
        transform:translate(-50%, -50%); 
        width:15px; height:15px; 
        border:7px solid #fff; 
        border-top:7px solid blue; 
        border-radius:50em;
        animation-name:spinCircle;
        animation-duration:.9s;
        animation-iteration-count:infinite;
    }
    @keyframes spinCircle {
        from {
            transform:translate(-50%, -50%) rotate(0);
        }
        to {
            transform:translate(-50%, -50%) rotate(360deg);
        }
    }
    ul{
        margin-top:70px;
    }
    ul>li{
        margin-bottom:17px;
        line-height:18px;
    }
    ul>li:nth-child(1){
        font-size:13px;
        font-weight:550;
    }
    ul>li:nth-child(3){
        font-size:11px;
        color:rgb(64, 64, 64);
    }



    
`