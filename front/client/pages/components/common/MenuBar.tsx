import React,{useState,useEffect,useLayoutEffect} from 'react';
import Styled from 'styled-components';
import { setFlagsFromString } from 'v8';
import ModalBackground from './ModalBackground';
import RequireLogin from '../RequireLogin';
import LoginForm from './login/LoginForm';
import NeedCert from './login/NeedCert';
import Link from 'next/link';


const MenuBar = () => {
    const [loginState,setLoginState] = useState<boolean>(false)
    const [flag,setFlag] = useState<boolean>(false)
    const [Login,setLogin] = useState<boolean>(false)
    const loginClick = () => {
        loginState?setLoginState(false):setLoginState(true)
    }
    const createBtn = () => {
        loginState==true?setFlag(false):setFlag(true)
    }
    const requireOpenBtn = () => {
        setFlag(prev=>!prev)
    }
    const loginOpenBtn = () => {
        setFlag(prev=>!prev)
        setLogin(prev=>!prev)
    }
    const closeLoginForm = () => {
        setLogin(prev=>!prev)
    }


    return (
        <>            
                {
                    flag
                    ?
                    <ModalBackground>                     
                        <RequireLogin flag={flag} openBtn={requireOpenBtn} loginOpenBtn={loginOpenBtn}/>
                        {/* <LoginForm/> */}
                        {/* <NeedCert/> */}     
                        
                    </ModalBackground>
                    
                    // :<></>
                    :   Login
                        ?
                        <ModalBackground>
                            <LoginForm closeLogin={Login} closeLoginBtn={closeLoginForm} />
                        </ModalBackground>
                        
                        :<></>
                    
                }
            <MenubarWrapper>
                <span><Link href="/"><a>Azit Gallery</a></Link></span>
                <ul>
                    <li>탐색하기</li>
                    <li onClick={()=>createBtn()}>발행하기</li>
                    <li onClick={()=>loginClick()}>{loginState?"Logout":"Login"}</li>
                </ul>
                
            </MenubarWrapper>
        </>
    )
}

export default MenuBar

const MenubarWrapper = Styled.div`
    display:none;
    box-sizing:border-box;
    height:85px;
    display:flex;
    padding-top:23px;
    flex-direction:row;
    justify-content:space-around;
    align-items: stretch;
    border-bottom:2px solid rgba(20,30,40,.08);
    font-size:17px;
    font-weight:550;
    line-height:30px;
    span{
        padding-top:14px;
        margin-right:400px;
    }
    ul li {
        list-style:none;
        float:left;
    }
    ul>li{
        margin-right:40px;
        color:#6c757d;;
    }
    ul>li:hover{
        color:#343a40;
    }
    ul>li:nth-child(3){
        width:60px;
        text-align:center;
        padding:11px;
        padding-top:7px;
        margin-bottom:3px;
        line-height:15px;
        border:1px solid #007bff;
        background-color:#007bff;
        border-radius:5%;
        color:#fff;
    }
    ul>li:nth-child(3):hover{
        background-color:#1e73fa;
    }
    a{
        text-decoration:none;
    }

`
