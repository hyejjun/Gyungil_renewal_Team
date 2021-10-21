import Link from 'next/link';
import Styled from 'styled-components';

const NeedLogin = () => {
    return(
        <NeedLoginWrapper>
            <div><p>로그인이 필요합니다.</p></div>
            <div><p>계속하려면 로그인을 해주세요</p></div>
            <div>
                <span>취소</span>
                <span>로그인</span>
            </div>


        </NeedLoginWrapper>
    )
}

export default NeedLogin

const NeedLoginWrapper = Styled.div`
    box-sizing:border-box;
    width:350px;
    height:220px;
    border-radius:3%;
    border:1.2px solid black;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    display:block;
    justify-content:center;
    text-align:center;
    padding-top:10px;
    div:nth-child(1) p{
        font-weight:700;
        font-size:17.5px;
    }
    div:nth-child(2) p{
        font-size:14.5px;
        color:#6c757d;
        margin-bottom:40px;
    }
    div:nth-child(3){
        margin-top:20px;
        display:flex;
        justify-content:center;
    }
    div:nth-child(3)>span{
        width:100px;
        height:40px;
        border:1px solid black;
        border-radius:10%;
        
    }





`