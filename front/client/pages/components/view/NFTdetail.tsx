// view 페이지에서 NFT 설명 넣는 곳
import React, { useState } from "react";
import Styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Order from "./Order";

const NFTdetail = () => {
    const [like, setLike] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const doLike = () => {
        setLike(prev => !prev)
    }

    const orderOpen = () => {
        setOpen(prev => !prev)
    }

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
                    <span onClick={orderOpen}>
                        <button>구매하기</button>
                    </span>

                    <Order open={open} orderOpen={orderOpen} />

                </NFTBuy>
                <NFTTitle>
                    <span>NFT 제목</span>
                </NFTTitle>
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
const NFTTitle = Styled.div`
    height: 150px;
    padding: 3% 0;
    box-sizing: border-box;
    display : flex;
    border-bottom: 1px solid rgba(20, 30, 40, 0.1);

    & > span :nth-child(1){
        color: #2d3741;
        font-weight: 700;
        font-size: 48px;
        line-height: 64px;
        width: 100%;
        word-break: break-all;
    }
   
`

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

