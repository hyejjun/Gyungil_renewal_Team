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

    const SellSection = () => {
        return(
            <>
            판매임
            </>
        )
    }

    const AucSection = () => {
        return(
            <>
            경매임
            </>
        )
    }

    const ChkSell = () => {
        return(
            <>
                <input type = "radio" id = "sell" value="1"
                onChange = {sellOn} 
                checked = {ifSell == true ? true : false}
                />
                <label htmlFor = "sell">SELL</label>
                <input type = "radio" id = "auc" value="2"
                onChange = {aucOn}
                checked = {ifSell == true ? false : true}
                />
                <label htmlFor = "auc">AUC</label>
            </>
        )
    }

    return(
        <>
                <ChkSell />
                {ifSell 
                ? 
                <>
                    {/* <div>판매임</div> */}
                    <input type="text" placeholder="판매가를 입력하세요."/>
                </> 
                :  
                <>
                    {/* <div>경매임</div> */}
                    <input type="text" placeholder="경매 시작가를 입력하세요."/>
                    <input type = "time"></input>
                </> 
                
                }
        </>
    )
}

export default SellType


