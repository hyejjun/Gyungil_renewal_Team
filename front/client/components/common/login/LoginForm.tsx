import Styled from 'styled-components'
import ModalBackground from '../ModalBackground'
import { Button } from "react-bootstrap"
import { connect } from 'react-redux'
import React from 'react'
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';

declare global {
    interface Window {
        klaytn: any;
    }
}

const LoginForm = (props) =>{
    const [clicked, setClicked] = React.useState(false)
    const [kaikasAddress, setKaikasAddress] = React.useState('')
  
    const kaikasLogin = async () => {
      await window.klaytn.enable()
  
      const klaytnAddress = window.klaytn.selectedAddress
      setKaikasAddress(klaytnAddress)

  
      window.klaytn.on('accountsChanged', () => {
        const klaytnAddress = window.klaytn.selectedAddress
        console.log('account changed!', klaytnAddress)
        setKaikasAddress(klaytnAddress)

      })
  
  
    }
  
    const onClick = () => {
      if(!window.klaytn) {
        return
      }
      setClicked(true)
  
      kaikasLogin()
    }
  
    if (kaikasAddress.length > 0) {
      return (<p>kaikas 주소: {kaikasAddress}</p>)
    }
  
  


    return(
        <ModalBackground>
            <LoginFormWrapper closeLogin={props.closeLogin}>
                <div onClick={props.closeLoginBtn}><CloseIcon/></div>
                <ul>
                    <li>로그인</li>
                    <li>지갑을 이용하여 AzitGallery에 로그인합니다.<br/>아래 지갑 중 사용할 지갑을 선택해주세요</li>
                    <li><button onClick = {onClick} className="kaikasBtn">Kaikas로그인</button></li>
                    <li>사용중인 지갑이 없으신가요? <span><Astyle href = "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi">kaikas다운로드</Astyle></span></li>
                </ul>
            </LoginFormWrapper>
        </ModalBackground>
    )
}

export default LoginForm





const LoginFormWrapper = Styled.div`
    display: ${(props)=>(props.closeLogin?"block":"none")} 
    box-sizing:border-box;
    position:absolute;
    width:410px;
    height:350px;
    margin:auto;
    background-color:white; 
    border-radius:3%;
    top:30%;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    cursor : default;

    div{
        display:flex;
        flex-direction:row-reverse;
        font-size:27px;
        font-weight:500;
        color:rgb(64, 64, 64);
        padding: 2% 2% 6% 2%;
        box-sizing: border-box;
    }

    & > div > svg {
        cursor : pointer;
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
        height:60px;
        margin:auto;
        margin-bottom:35px;   
    }
    ul>li:nth-child(4)>span{
        border-bottom:1px solid black;
    }

    .kaikasBtn {
        width: 100%;
        height: 100%;
        font-weight: 700;
        font-size: 14px;
        line-height: 28px;
        color: rgba(45,55,65,.7);
        background-color: #fff;
        border: 1px solid #aab4be;
        box-sizing: border-box;
        box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
        border-radius: 4px;
        vertical-align: middle;
        padding: 10px;
        text-align: left;
        cursor: pointer;
    }

    .kaikasBtn:hover{
        background-color: #f9fbfd;
        color: #5f6973;
        border: 1px solid #aab4be;
    }


`

const Astyle = Styled.a`
    text-decoration:none;
`