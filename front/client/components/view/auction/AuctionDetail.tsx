import Styled from 'styled-components'
import { useState } from 'react';
import { BuyBtnCSS } from '../sell/NFTdetail';

const AuctionDetail = () => {
    const [num, setNum] = useState<number>(5);
    const [price, setPrice] = useState<number>(0.15);
    const [limitTime, setlimitTime] = useState<number>(5);
    return (
        <>
            <AuctionDetailWrap>
                <ul className="auctionTitle">
                    <li>경매 입찰 수</li>
                    <li>현재 입찰가</li>
                    <li>마감시간</li>
                </ul>
                <ul className="auctionContent">
                    <li>{num}</li>
                    <li>{price}ETH</li>
                    <li>{limitTime}분 전</li>
                </ul>
                <BtnWrap>
                    <BuyBtnCSS className="auctionBtn">
                        <button>경매 참여</button>
                    </BuyBtnCSS>
                </BtnWrap>
            </AuctionDetailWrap>
        </>
    )
}

export default AuctionDetail


const AuctionDetailWrap = Styled.div`
    height: 200px;
    padding: 3% 0;
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid rgba(20,30,40,0.1);

    .auctionTitle{
        & > li {
            width: 150px;
            height : 50px;
            font-size : 20px;
            font-weight : bold;
        }
    }

    .auctionContent{
        & > li {
            width: 150px;
            height : 50px;
            font-size : 20px;
            font-weight : bold;
        }
    }
`

const BtnWrap = Styled.div`
    width: 100%;
    padding: 2% 2% 2% 55%;
    box-sizing: border-box;

    .auctionBtn{

    }

    .auctionBtn > button{
        font-size : 20px;
    }
`