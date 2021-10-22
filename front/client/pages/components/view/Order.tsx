import React, { useState, useEffect } from "react";
import Styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

const Order = (props) => {
    return (
        <>
            <ModalWrapper flag={props.open}>
                <OrderForm flag={props.open}>
                    <OrderTitle>
                        <span>Complelete Checkout</span>
                        <span onClick={props.orderOpen}> <CloseIcon /> </span>
                    </OrderTitle>
                    <OrderContent>
                        <div className="orderContentTitle">
                            <span>Item</span>
                            <span>Subtotal</span>
                        </div>
                        <div className="orderContentImage">
                            <span>
                                <img src="" alt="상품 작은 이미지" />
                            </span>
                            <span>
                                가격 0.14 ETH
                            </span>
                        </div>
                        <div className="orderTotalPrice">
                            <span>Total</span>
                            <span>0.14 ETH</span>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            By checking this box, I agree to 회사명's <span>Tearms of Service</span>
                        </div>
                    </OrderContent>
                    <OrderBtn>
                        <button>Checkout</button>
                    </OrderBtn>
                </OrderForm>
            </ModalWrapper>
        </>
    )
}

export default Order

const ModalWrapper = Styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.flag ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`

const OrderForm = Styled.div`   
    width : 700px;
    height : 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display:  ${props => (props.flag ? 'block' : 'none')};
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    position: relative;
    background-color: #fff;
    border-radius: 10px;
`

const OrderTitle = Styled.div`
    width: 100%;
    height: 70px;
    display : flex;
    padding: 1.5% 1% 0 10%;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(20,30,40,0.1);

    & > span:nth-child(1){
        width : 95%;
        text-align : center;
        font-size: 25px;
        font-weight: bold;
        line-height: 40px;
        cursor: default;
    }

    & > span:nth-child(2) > svg{
        width: 40px;
        font-size: 40px;
        cursor: pointer;
        float: right;
        color: #434343de;
    }
`

const OrderContent = Styled.div`
    & > .orderContentTitle{
        
    }

`

const OrderBtn = Styled.div`

`