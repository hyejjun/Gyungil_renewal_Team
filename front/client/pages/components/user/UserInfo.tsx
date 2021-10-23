import Styled from 'styled-components'
import React,{useEffect} from 'react'
import Link from 'next/link'

const User = () => {
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);
    
    
    const ApplyBtn = () => {
        console.log('test')
    }
    return(
        <UserWrapper>
            <div>
                <p>나의 프로필</p>
                <p></p>
                <ul>
                    <li>
                        <p>닉네임</p>
                        <p>{/*nickname*/}Mihee</p>
                    </li>
                    <li>
                        <p>지갑주소</p>
                        <p>{/*wallet account*/}0x2618f9B36086912B479bA6A6FFF6ABCfCC035482</p>
                    </li>
                    <li>
                        <p>이메일주소</p>
                        <p>{/*email account*/}algml9603@mgail.com</p>
                    </li>
                    <li onClick={()=>{ApplyBtn()}}><Link href="/"><a>판매 신청</a></Link></li>
                    <li>
                        <span>프로필편집</span>
                        <span>회원탈퇴</span>
                    </li>
                </ul>
            </div>        
        </UserWrapper>
    )
}

export default User

const UserWrapper = Styled.div`
    box-sizing:border-box;
    width:50%;
    height:100vh;
    margin-top:3%;
    margin:auto;
    border-radius:2%;
    a{
        text-decoration:none;
        background-color:#b3d7ff;
        font-weight:500;
    }
    div{
       width:100%;
       height:480px;
       //background-color:#e6f2ff;
       padding-top:40px;
       padding-left:80px;
       align-items: stretch;
       border:5px solid #e6f2ff;
       margin-left:-60px;
    }
    div>p:nth-child(1){
        font-size:20px;
        font-weight:600;
        margin-bottom:30px;
    }
    div>p:nth-child(2){
        width:90px;
        height:90px;
        background-color:#b3d7ff;
        float:left;
        margin-top:8px;
        margin-right:30px;
        margin-bottom:300px;
        line-height:center;
    }
    li{
        margin-bottom:20px;
    }
    li > p:nth-child(2){
        margin-left:120px;
        margin-top:10px;
        width:380px;
        height:25px;
        background-color:white;
        border-radius:1%;
        font-size:14px;
    }
    li:nth-child(3){
        margin-bottom:50px;
    }   
    li:nth-child(4){
        width:100px;
        height:45px;
        line-height:43px;
        margin-left:120px;
        text-align:center;
        background-color:#b3d7ff;
        border-radius:2%;
        margin-bottom:40px; 
    }

    li:nth-child(5) span{
        width:100px;
        height:40px;
        padding:10px;
        margin-right:10px;
        background-color:white;
        border-radius:3%;
        font-size:12px;
        font-weight:600;
    
    }




`