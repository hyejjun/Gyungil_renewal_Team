import React, { useState } from "react";
import Styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const NFTdetail = () => {
    
    return (
        <>
            <NFTdetailWrap>
                <NFTBuy>
                    <span onClick={doLike}>
                        {
                            like
                            ? <button><FavoriteIcon /></button>
                            : <button><FavoriteBorderIcon /></button>
                        }
                    </span>
                    <span>
                        <button>구매하기</button>
                    </span>
                </NFTBuy>

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

    & > span :nth-child(1){
        width: 30%;
    }
    & > span :nth-child(2){
        width: 60%;
        margin-left: 3%;
    }

    & > span:nth-child(1) > button {
        width: 100%;
        height: 64px;
        display: inline-block;
        font-weight: 400;
        color: #212529;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #aab4be;
        box-sizing: border-box;
        border-radius: 4px;
        height: 100%;
    }

    & > span:nth-child(2) > button {
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

    & > span:nth-child(1) > button:focus{
        box-shadow: 0 0 0 0.2rem rgb(30 115 250 / 25%);
    }

    & > span:nth-child(1) > button > svg {
        font-size : 30px;
    }
`