import Styled from 'styled-components';
import React, { useState } from "react";


const SellType = () =>{
    const [sellAuc, setSellAuc] = useState<boolean>(true);

    const ChkSell = () => {

        return(
            <>
                <input type = "radio" id = "sell" />
                <label htmlFor = "sell">SELL</label>
            </>
        )
    }
    const ChkAuc = () => {
        // setSellAuc(false)
        return(
            <>
                <input type = "radio" id = "auc" />
                <label htmlFor = "auc">AUC</label>
            </>
        )
    }

    return(
        
        <>

                <ChkSell />
                <ChkAuc/>

        </>
    )
}

export default SellType


