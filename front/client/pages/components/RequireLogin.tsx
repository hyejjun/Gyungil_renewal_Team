import Link from 'next/link';
import Styled from 'styled-components';
import Router from 'next/router';

const RequireLogin = () => {
    return(
        <RequireLoginWrapper>
            <div><p>로그인이 필요합니다.</p></div>
            <div><p>계속하려면 로그인을 해주세요</p></div>
            <div>
                <span>취소</span>
                <span><Link href=""><a>로그인</a></Link></span>
            </div>


        </RequireLoginWrapper>
    )
}

export default RequireLogin

const RequireLoginWrapper = Styled.div`
    box-sizing:border-box;
    width:350px;
    height:220px;
    border-radius:3%;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    display:block;
    justify-content:center;
    text-align:center;
    padding-top:10px;
    position:absolute;
    background-color:white;
    margin: auto;
    border: 1px solid black;
    padding: 30px;
    a{
        text-decoration:none;
        background-color:#1e73fa;
        color:white;
    }

    
    div:nth-child(1) p{
        font-weight:700;
        font-size:17.5px;
        padding-bottom:20px;
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
        width:110px;
        height:48px;
        margin-left:2px;
        margin-right:2px;
        border-radius:7%;
        line-height:47px;        
    }
    div:nth-child(3)>span:nth-child(1){
        background-color:#e1f0ff;
        color:#1e73fa;
        font-weight:400;

    }
    div:nth-child(3)>span:nth-child(2){
        background-color:#1e73fa;
        color:white;
        font-weight:400;
        
    }

`