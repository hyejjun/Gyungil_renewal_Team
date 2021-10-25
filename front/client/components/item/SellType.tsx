import Styled from 'styled-components';
import React, { useState } from "react";

const SellType = () =>{
    const [ifSell, setifSell] = useState<boolean>(true);

    const sellOn = (e) => {
        setifSell(true)
    }

    const aucOn = (e) => {
        setifSell(false)
    }

    const ChkSell = () => {
        return(
            <RadioWrapper>
                <input type = "radio" id = "sell" value="1"
                onChange = {sellOn} 
                checked = {ifSell == true ? true : false}
                />
                <label htmlFor = "sell">일반 판매</label>
                <input type = "radio" id = "auc" value="2"
                onChange = {aucOn}
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
                    <input type="text" placeholder="판매가를 입력하세요."/>
                </SellAucWrapper>
            :  
                <SellAucWrapper>
                    <input type="text" placeholder="경매 시작가를 입력하세요."/>
                    <input type = "time"></input>
                </SellAucWrapper> 
            
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