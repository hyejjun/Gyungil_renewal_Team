import Styled from 'styled-components'
import React,{useEffect} from 'react'
import Link from 'next/link'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { SellerAdmin_REQUEST } from '../../reducers/user'
import { RootState } from "../../reducers"
import { useSelector, useDispatch } from 'react-redux'

const User = () => {
    const dispatch = useDispatch()

    const SellerAdmin = () => {
        alert('인증을 위해서 이메일을 확인해주세요')
        dispatch(SellerAdmin_REQUEST(undefined))
    }
    const user = useSelector((state:RootState) => state.user);
    return(
        <UserWrapper>
            <div>
                <p>나의 프로필</p>
                <p><AccountCircleIcon/></p>
                <span>
                    <ul>
                        <li>
                            <p>닉네임</p>
                            <p>&nbsp;{/*nickname*/}{user.error}</p>
                        </li>
                        <li>
                            <p>지갑주소</p>
                            <p>&nbsp;{/*wallet account*/}0x2618f9B36086912B479bA6A6FFF6ABCfCC035482</p>
                        </li>
                        <li>
                            <p>
                                이메일주소
                                <span><VerifiedUserIcon/>인증완료</span>
                            </p>
                            <p>&nbsp;{/*email account*/}algml9603@mgail.com</p>
                        </li>
                        <li onClick = {SellerAdmin}>판매 신청</li>
                        <li>
                            <button><Link href="/user/edit"><a>프로필편집</a></Link></button>
                            <button>회원탈퇴</button>
                        </li>
                    </ul>
                </span>
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
        font-weight:500;
    }
    div{
       width:100%;
       height:480px;
       padding-top:40px;
       align-items: stretch;
       margin-left:-60px;
    }
    div>p:nth-child(1){
        font-size:35px;
        font-weight:700;
        color: rgba(45,55,65,.9);
        margin-bottom:30px;
    }
    div>p:nth-child(2){
        width:90px;
        height:90px;
        float:left;
        margin-top:8px;
        margin-right:120px;
        margin-bottom:300px;
        line-height:center;
    }
    div>p:nth-child(2)>svg{
        width:140px;
        height:140px;
        cursor: pointer;
        margin-left:15px;
    }
    li{
        margin-bottom:27px;
    }
    div>span>ul>li>p:nth-child(1){
        line-height:28px;
        font-weight: 600;
        font-size: 20px;
        color: #2d3741;
        vertical-align: middle;
        margin-bottom:7px;
    }
    div>span>ul>li>p:nth-child(1)>span{
        margin-left:10px;
        font-size:14px;
        font-weight:300x;
        color:blue;
    }
    div>span>ul>li>p:nth-child(1)>span>svg{
        color:blue;
        width:16x;
        height:16px;
    }
    div>span>ul>li>p:nth-child(2){
        font-size: 15px;
        line-height: 28px;
        color: #2d3741;
        border-spacing: 2px;
        font-weight: 360;
    }
    div>span>ul>li:nth-child(4){
        margin-top:40px;
        margin-left:30px;
    }

    div>span>ul>li:nth-child(4) a{
        //border:1px solid rgba(45,55,65,.9);
        padding:10px 15px 10px 15px;
        border-radius:5%;
        background-color:rgba(239, 239, 239,0.2);
    }
    div>span>ul>li:nth-child(5){
        margin-top:40px;
    }
    div>span>ul>li:nth-child(5)>button{
        box-sizing:border-box;
        border:1px solid #e1f0ff;
        border-radius: .25rem;
        padding: 12px 24px;
        height: 50px;
        display: inline-block;
        margin-right:10px;
        font-weight: 800;
        text-align: center;
        vertical-align: middle;
        background-color: #e1f0ff;
    }
    div>span>ul>li:nth-child(5)>button:nth-child(1) a{
        background-color: #e1f0ff;
        color: #1e73fa;
        font-weight: 800;
    }
    div>span>ul>li:nth-child(5)>button:nth-child(1) :hover{
        opacity:0.8;
    }
    div>span>ul>li:nth-child(5)>button:nth-child(2) :hover{
        opacity:1;
    }
    div>span>ul>li:nth-child(5)>button:nth-child(2) {
        background-color:#1e73fa;
        opacity:0.9;
        color: #e1f0ff;
    }

    /* ul{
        margin-left:80px;
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
        width:120px;
        height:42px;
        line-height:43px;
        margin-left:120px;
        text-align:center;
        border:1px solid black;
        border-radius:4%;
        margin-bottom:40px; 
    }

    li:nth-child(5) span, li:nth-child(5) a{
        width:100px;
        height:40px;
        padding:10px;
        margin-right:10px;
        background-color:white;
        border-radius:3%;
        font-size:12px;
        font-weight:600;
    
    } */




`