import Styled from 'styled-components'
import { useState, useEffect } from 'react';
import { BuyBtnCSS } from '../sell/NFTdetail';
import JoinAcution from './JoinAuction';

const AuctionDetail = () => {
    const [num, setNum] = useState<number>(5);
    const [price, setPrice] = useState<number>(0.15);
    const [limitTime, setlimitTime] = useState<number>(5);

    const [openAuction, setOpenAuction] = useState<boolean>(false);
    const auctionOpen = () => {
        setOpenAuction(prev => !prev)
    }

    /* props로 전달할 값 */
    const [auctionPrice, setAuctionPrice] = useState<number>(0);
    const priceChange = (e) => {
        setAuctionPrice(e.target.value)
    }

    const maxPrice = 0.6;           // useSelector 로 maxprice
    const yourBalance = 0.7;        // 이걸 나중에 useSelector 로 가져올거임
    const [balacne, setBalance] = useState<number>(0);
    const [balanceCheck, setBalanceCheck] = useState<boolean>(false);       // 잔액확인

    useEffect (()=>{
        setBalance(yourBalance)
    },[])

    const lowBalance = () => {
        if (balacne <= maxPrice){
            alert('잔액을 확인해주세요')
        }else{
            if(auctionPrice <= maxPrice || auctionPrice > yourBalance){
                alert('입찰 금액을 확인해주세요')
            } else {
                setBalanceCheck(prev => !prev)
                alert('입찰 되었습니다')
                // 입찰하고 어떻게 처리할지...

                
            }
        }
    }

    const defalutValue = {
        maxPrice,
        yourBalance,
        setAuctionPrice,
        priceChange,
        setBalance,
        setBalanceCheck,
        lowBalance
    }

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
                    <BuyBtnCSS className="auctionBtn" onClick={auctionOpen}>
                        <button>경매 참여</button>
                    </BuyBtnCSS>
                    <JoinAcution openAuction={openAuction} auctionOpen={auctionOpen} defaultValue={defalutValue}/>
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