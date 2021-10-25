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
            <NFTHistory>
                <p>히스토리</p>
                <table>
                    <thead>
                        <tr>
                            <td>구분</td>
                            <td>시간</td>
                            <td>보낸 사람</td>
                            <td>받은 사람</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>신규 발행</td>
                            <td>가라</td>
                            <td>가라</td>
                            <td>가라</td>
                        </tr>
                    </tbody>
                </table>
            </NFTHistory>
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
    min-height: 150px;
    border-bottom: 1px solid rgba(20,30,40,0.1);
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
const NFTHistory = Styled.div`
    width: 100%;
    height: auto;
    min-height: 200px;
    padding: 2% 0;
    box-sizing: border-box;

    & > p{
        height: 40px;
        font-weight: 700;
        font-size: 20px;
        color: #2d3741;
        vertical-align: middle;
    }

    & > table {
        width: 100%;
        height: auto;
    }

    & > table > thead {
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        color: #2d3741;
    }

    & > table > thead > tr > td:nth-child(1),td:nth-child(2){
        width : 160px;
    }

    & > table > thead > tr > td:nth-child(3),td:nth-child(4){
        width : 240px;
    }

    & > table > tbody {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #2d3741;
    }
`
