import React, { useState } from 'react';
import Styled from 'styled-components';
import Link from 'next/link'

const MenuBar = () => {
    const [loginState, setLoginState] = useState<string>("Login")
    const loginClick = () => {

    }
    return (
        <MenubarWrapper>
            <span>
                <Link href="/">
                    <a >logoooo</a>
                </Link>
            </span>
            <ul>
                <li>Explorer</li>
                <li>Create</li>
                <li onClick={() => { loginClick() }}>{loginState}</li>
            </ul>
        </MenubarWrapper>
    )
}

export default MenuBar

const MenubarWrapper = Styled.div`
    box-sizing:border-box;
    height:70px;
    display:flex;
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
        padding:11px;
        padding-top:4px;
        margin-bottom:3px;
        line-height:13px;
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