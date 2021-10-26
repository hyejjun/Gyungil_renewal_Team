import React, { useState} from "react";
import Styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'

const Order = (props) => {
    const [checked, setChecked] = useState<boolean>(false);

    const checkAgreement = (checkedState) => {
        setChecked(checkedState)
    }

    const unCheckedClick = () => {
        alert('동의란을 확인해주세요')
    }

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
                            <div>Item</div>
                            <div>Subtotal</div>
                        </div>
                        <div className="orderContentImage">
                            <div>
                                <img alt="상품 작은 이미지" />
                            </div>
                            <div>
                                0.14 ETH
                            </div>
                        </div>
                        <div className="orderTotalPrice">
                            <div>Total</div>
                            <div>0.14 ETH</div>
                        </div>
                        <div className="orderAgreement">
                            <input type="checkbox" id="agreementBuy" onChange={e=>{checkAgreement(e.target.checked)}}/>
                            <label htmlFor="agreementBuy">
                                By checking this box, I agree to 회사명's <span>Tearms of Service</span>
                            </label>
                        </div>
                    </OrderContent>
                    <OrderBtn>
                        {
                            checked 
                            ? <Link href = "/ship"><a><button>Checkout</button></a></Link>
                            : <button className="unChecked" onClick={unCheckedClick}>Checkout</button>

                        }
                    </OrderBtn>
                </OrderForm>
            </ModalWrapper>
        </>
    )
}

export default Order

export const ModalWrapper = Styled.div`
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

export const OrderForm = Styled.div`   
    width : 700px;
    height: 550px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display:  ${props => (props.flag ? 'block' : 'none')};
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    position: relative;
    background-color: #fff;
    border-radius: 10px;
`

export const OrderTitle = Styled.div`
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

export const OrderContent = Styled.div`
    width: 100%;
    height: auto;
    padding: 5%;
    box-sizing: border-box;

    & > .orderContentTitle,
    & > .orderContentImage,
    & > .orderTotalPrice {
        width : 100%;
        display : flex;
        border-bottom: 1px solid rgba(20,30,40,0.1);
        padding : 2% 0 ;
        box-sizing: border-box;
    }

    & > .orderContentTitle > div:nth-child(1){
        width : 50%;
        font-size: 20px;
        font-weight: bold;
    }
    & > .orderContentTitle > div:nth-child(2){
        width: 50%;
        text-align: right;
        font-size: 20px;
        font-weight: bold;
    }

    /********************************** */
    & > .orderContentImage > div:nth-child(1) {
        width : 50%;
        & > img {
            display : inline-block;
            width : 100px;
            height : 100px;
            background : #a9eb2f;
        }
    }

    & > .orderContentImage > div:nth-child(2) {
        width: 50%;
        text-align: right;
        padding: 6% 0;
        box-sizing: border-box;
    }

    /*************************************** */
    & > .orderTotalPrice > div:nth-child(1){
        width : 50%;
        font-size: 20px;
        font-weight: bold;
        
    }
    & > .orderTotalPrice > div:nth-child(2){
        width: 50%;
        text-align: right;
        font-size: 20px;
        font-weight: bold;
        color: #007bff;
    }

    /*********************************** */
    .orderAgreement {
        height: auto;
        padding-top: 5%;
        box-sizing: border-box;
    }
    .orderAgreement > label {
        margin-left : 10px;
    }
    .orderAgreement > label > span {
        color : blue;
        
    }
`

export const OrderBtn = Styled.div`
    width : 100%;
    height: 120px;
    border-top: 1px solid rgba(20,30,40,0.1);
    padding: 5% 3%;
    box-sizing: border-box;

    & > a > button,
    & > button,
    .unChecked {
        width : 150px;
        padding: 12px 20px;
        background-color: rgb(32,129,226);
        border: 1px solid rgb(32,129,226);
        color: rgb(255,255,255);
        cursor: pointer;
        border-radius: 5px;
        float : right;
        font-size : 17px;
        font-weight : bold;
    }

    .unChecked {
        background-color : #d2d2d2;
        border: 1px solid #d2d2d2;
    }
`