import React, { useState, useEffect } from "react";
import Styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'
import { ModalWrapper, OrderTitle, OrderContent } from "../sell/Order";

const JoinAcution = () => {
    const [checked, setChecked] = useState<boolean>(false);                 // 동의 확인
    const [balanceCheck, setbalanceCheck] = useState<boolean>(false);       // 잔액확인

    const checkAgreement = (checkedState) => {
        setChecked(checkedState)
    }
    const unCheckedClick = () => {
        alert('동의란을 확인해주세요')
    }

    const checkBalance = (checkBalance) => {
        setbalanceCheck(checkBalance)
    }
    const lowBalance = () => {
        alert('잔액을 확인해주세요')
    }

    return (
        <>
            <ModalWrapper>
                <OrderTitle>
                    <span>Auction Detail</span>
                    <span> <CloseIcon /> </span>
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
                        <input type="checkbox" id="agreementBuy" onChange={e => { checkAgreement(e.target.checked) }} />
                        <label htmlFor="agreementBuy">
                            By checking this box, I agree to 회사명's <span>Tearms of Service</span>
                        </label>
                    </div>
                </OrderContent>
            </ModalWrapper>

        </>
    )
}

export default JoinAcution


const JoinAuctionForm = Styled.div`

`
