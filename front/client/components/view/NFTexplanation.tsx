import React, { useState } from "react";
import Styled from 'styled-components'

const NFTexplanation = () => {
    return (
        <>
            <NFTOwner>
                <span>
                    <ul>
                        <li>Created by</li>
                        <li>만든이</li>
                    </ul>
                </span>
                <span>
                    <ul>
                        <li>Owned by</li>
                        <li>소유자</li>
                    </ul>
                </span>
            </NFTOwner>
            <NFTExplain>
                <p>설명</p>
                <div>
                    상세 설명
                </div>
            </NFTExplain>
        </>
    )
}

export default NFTexplanation



const NFTOwner = Styled.div`
    width : 100%;
    height : auto;
    padding: 2% 0;
    box-sizing: border-box;
    min-height : 100px;
    display: flex;
    border-bottom: 1px solid rgba(20, 30, 40, 0.1);
    ul,li{
        list-style : none;
        padding : 0;
        margin : 0;
    }
    & > span {
        width : 50%;
    }
    & > span > ul > li:nth-child(1){
        font-size: 14px;
        line-height: 22px;
        color: rgba(45,55,65,.7);
    }
    & > span > ul > li:nth-child(2){
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #2d3741;
    }

`

const NFTExplain = Styled.div`
    height: auto;
    min-height: 600px;
    padding: 2% 0;
    box-sizing: border-box;

    & > p{
        height: 40px;
        font-weight: 700;
        font-size: 20px;
        color: #2d3741;
        vertical-align: middle;
    }
    
`