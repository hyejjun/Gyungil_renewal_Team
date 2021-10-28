
import React, { useState } from 'react'
import Styled from 'styled-components'

const adminlogincomponent = () => {


    return (
        <>  
            <Wrap>
                <H3>관리자 로그인</H3>
                <Subject>ID</Subject>
                <Input type = "text"></Input>
                <Subject>PW</Subject>
                <Input type = "password"></Input>
                <BTN>로그인</BTN>
            </Wrap>
        </>
    )
}

export default adminlogincomponent

const Wrap = Styled.div`
    margin:0 auto;
    width:500px;
`

const H3 = Styled.h3`
    font-size:35px;
    margin-top:70px;
    margin-bottom:50px;
`

const Subject = Styled.div`
    font-size:25px;
    margin-bottom:20px;
    margin-top:30px;
`

const Input = Styled.input`
    width:500px;
    height:40px;
`

const BTN = Styled.button`
    color:black;
    background:white;
    border:1px solid black;
    width:100px;
    margin-top:60px;
    margin-bottom:90px;
    height:50px;
    font-size:20px;
    
`