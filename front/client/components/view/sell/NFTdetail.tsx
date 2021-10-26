import React, { useState } from "react";
import Styled from 'styled-components'
import Order from "./Order";
import NFTexplanation from "../NFTexplanation";
import Like from "../../common/Like";
import NFTTitle from "../NFTTitle";

const NFTdetail = ({children}) => {
    const [open, setOpen] = useState<boolean>(false);
    const orderOpen = () => {
        setOpen(prev => !prev)
    }

    return (
        <>
            <NFTdetailWrap>
                <NFTBuy>
                    <select>
                        <option>
                            SIZE
                        </option>
                        <option>
                            XL
                        </option>
                        <option>
                            L
                        </option>
                        <option>
                            M
                        </option>
                        <option>
                            S
                        </option>
                        <option>
                            XS
                        </option>
                    </select>
                    <Like/>
                    <BuyBtnCSS onClick={orderOpen}>
                        <button>{children}</button>
                    </BuyBtnCSS>
                    <Order open={open} orderOpen={orderOpen} />
                </NFTBuy>
                <NFTTitle/>
                <NFTexplanation/>
            </NFTdetailWrap>
        </>
    )
}
export default NFTdetail

const NFTdetailWrap = Styled.div`
    width : 100%;
    height : auto;
    margin-top: 5%;
`

const NFTBuy = Styled.div`
    
    width: 100%;
    height: 60px;
    display: flex;
    padding-left: 65%;
    box-sizing: border-box;

    & > select {
        margin-right:10px;
        width:72px;
        font-size:22px;
        
    }


    
`

export const BuyBtnCSS = Styled.span`
    width: 246px;
    height : 60px;
    margin-left: 3%;
    
    & > button {
        width : 100%;
        height : 100%;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        border-radius: 4px;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
        padding: 12px 20px;
        background-color: rgb(32, 129, 226);
        border: 1px solid rgb(32, 129, 226);
        color: rgb(255, 255, 255);
        cursor: pointer;
    }

` 
