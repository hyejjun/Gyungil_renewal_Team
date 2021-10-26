import React, { useState, useEffect, useLayoutEffect } from 'react';
import Styled from 'styled-components';
import { setFlagsFromString } from 'v8';
import ModalBackground from './ModalBackground';
import RequireLogin from '../RequireLogin';
import LoginForm from './login/LoginForm';
import NeedCert from './login/NeedCert';
import Link from 'next/link';
import AddItemComponent from '../item/AddItemComponent';


const MenuBar = () => {
    const [loginState, setLoginState] = useState<boolean>(false)
    const [flag, setFlag] = useState<boolean>(false)
    const [Login, setLogin] = useState<boolean>(false)
    const loginClick = () => {
        loginState ? setLoginState(false) : setLoginState(true);
        setLogin(true)
    }
    const createBtn = () => {
        loginState == true ? setFlag(false) : setFlag(true)
    }
    const requireOpenBtn = () => {
        setFlag(prev => !prev)
    }
    const loginOpenBtn = () => {
        setFlag(prev => !prev)
        setLogin(prev => !prev)
    }
    const closeLoginForm = () => {
        setLogin(prev => !prev)
    }

    return (
        <>
            {
                flag
                    ?
                    <RequireLogin flag={flag} openBtn={requireOpenBtn} loginOpenBtn={loginOpenBtn} />
                    //{/* <LoginForm/> */}
                    //{/* <NeedCert/> */}     
                    : Login
                        ?
                        <LoginForm closeLogin={Login} closeLoginBtn={closeLoginForm} />
                        : <></>
            }
            <MenubarWrapper>
                <span><Link href="/"><a>Azit Gallery</a></Link></span>
                <ul>
                    <li><Link href="/"><a>탐색하기</a></Link></li>
                    {loginState ? <LOG onClick={() => createBtn()}><Link href="/item/additem"><a>발행하기</a></Link></LOG> : <LOG onClick={() => createBtn()}>발행하기</LOG>}
                    {loginState ? <LOG><Link href="/user/mynftall"><a>나의NFT</a></Link></LOG> : <LOG></LOG>}
                    {loginState ? <LOG onClick={() => { loginClick() }}>LogOut</LOG> : <LOG onClick={() => { loginClick() }}>Login</LOG>}


                </ul>
            </MenubarWrapper>

        </>
    )
}

export default MenuBar


const MenubarWrapper = Styled.div`
    box-sizing:border-box;
    height:90px;
    padding: 1.4% 0;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items: stretch;
    border-bottom:2px solid rgba(20,30,40,.08);
    font-size:16px;
    font-weight:550;
    line-height:30px;

    & > div {
        width : 1300px;
        height : auto;
    }

    span{
        margin-right:400px;
    }
    ul li {
        list-style:none;
        float:left;
    }
    ul>li, a{
        margin-right:20px;
        color:rgba(0,0,0,.5);;
    }
    ul>li:hover, a:hover{
        color:#343a40;
    }
    ul a:hover{
        color:#1e73fa;
        border-bottom: 4px solid #1e73fa;
        padding-bottom:31px;
    }
    ul>li:nth-child(4){
        width:60px;
        text-align:center;
        padding:13px;
        padding-top:7px;
        margin-bottom:3px;
        line-height:15px;
        border:1px solid #007bff;
        background-color:#007bff;
        border-radius:5%;
        color:#fff;
        margin-left:15px;
    }
    ul>li:nth-child(4):hover{
        background-color:#1e73fa;
    }
    a{
        text-decoration:none;
    }

`
const LOG = Styled.li`
    cursor:pointer;
`