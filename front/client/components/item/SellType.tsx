import Styled from 'styled-components';
import React, { useState } from "react";

const SellType = ({ifSell, extension, sellToggle, extensionToggle}) =>{

    const ChkSell = () => {
        return(
            <RadioWrapper>
                <input type = "radio" id = "sell" value="1"
                onChange = {()=>sellToggle(true)} 
                checked = {ifSell == true ? true : false}
                />
                <label htmlFor = "sell">일반 판매</label>
                <input type = "radio" id = "auc" value="2"
                onChange = {()=>sellToggle(false)}
                checked = {ifSell == true ? false : true}
                />
                <label htmlFor = "auc">경매</label>
            </RadioWrapper>
        )
    }

    return(
        <>
            <ChkSell />
            {ifSell 
            ? 
                <SellAucWrapper>
                    <SmallTitle>판매 가격</SmallTitle>
                    <input type="text" placeholder="판매가를 입력하세요."/>
                </SellAucWrapper>
            :  
            <>
                <SellAucWrapper>
                    <SmallTitle>경매 시작 가격</SmallTitle>
                    <input type="text" placeholder="경매 시작가를 입력하세요."/>
                    <SmallTitle>경매 종료 시간</SmallTitle>
                    <input type = "time"></input>
                    <Desc>새로운 경매 입찰자가 생기면 경매 종료 시간을 5분 연장할 수 있습니다.</Desc>
                </SellAucWrapper> 

                <RadioWrapper>
                    <input type = "radio" id = "extOn" value="1"
                    onChange = {()=>extensionToggle(true)} 
                    checked = {extension == true ? true : false}
                    />
                    <label htmlFor = "extOn">연장</label>
                    <input type = "radio" id = "extOff" value="1"
                    onChange = {()=>extensionToggle(false)} 
                    checked = {extension == true ? false : true}
                    />
                    <label htmlFor = "extOff">연장하지 않음</label>
                </RadioWrapper>
            </>
            }
        </>
    )
}

export default SellType

const RadioWrapper = Styled.div`
    margin-top: 10px;
    input{
        font-size: 25px;
        margin-right: 10px;
    }
    label{
        font-size: 25px;
        margin-right: 10px;
    }
`

const SellAucWrapper = Styled.div`
    width: 400px;
    input{
        margin-top: 20px;
        display: block;
        width: 690px;
        height: 30px;
        font-size: 25px;
    }
`

const Desc = Styled.div`
    color:gray;
    font-size:16px;
    width: 500px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const SmallTitle = Styled.div`
    color:#2d3741; 
    font-size:20px;
    margin-top:20px;
    margin-bottom: 20px;
`