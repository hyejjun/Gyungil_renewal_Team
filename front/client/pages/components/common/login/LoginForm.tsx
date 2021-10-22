import Styled from 'styled-components'

const LoginForm = () =>{
    return(
        <LoginFormWrapper>
            <div>x</div>
            <ul>
                <li>로그인</li>
                <li>지갑을 이용하여 AzitGallery에 로그인합니다.<br/>아래 지갑 중 사용할 지갑을 선택해주세요</li>
                <li>카카오로그인</li>
                <li>사용중인 지갑이 없으신가요? <span> kakao다운로드</span></li>
            </ul>
        </LoginFormWrapper>
    )
}

export default LoginForm

const LoginFormWrapper = Styled.div`
    box-sizing:border-box;
    position:absolute;
    width:410px;
    height:300px;
    margin:auto;
    background-color:white; 
    border-radius:3%;
    top:30%;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    div{
        display:flex;
        flex-direction:row-reverse;
        margin-right:10px;
        font-size:27px;
        font-weight:500;
        color:rgb(64, 64, 64);
        margin-bottom:30px;
    }
    ul{
        width:400px;
        justify-content: center;
        font-size:11px;
        font-weight:500;
        color:rgb(64, 64, 64);
        text-align:center;
    }
    ul>li{
        width:400px;
        line-height:17px;
    }
    ul>li:nth-child(1){
        color:black;
        font-size:18px;
        margin-bottom:30px;
        font-weight:550;
    }
    ul>li:nth-child(2){
        margin-bottom:30px;
    }
    ul>li:nth-child(3){
        width:240px;
        height:50px;
        margin:auto;
        line-height:50px;
        background-color:white;
        border:1px solid black;
        margin-bottom:20px;   
    }
    ul>li:nth-child(4)>span{
        border-bottom:1px solid black;
    }

    

`
