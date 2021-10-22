import Styled from 'styled-components'
import React, { useState } from 'react'

const PaymentFinish = () => {

    const [tabBtn, settabBtn] = useState<number>(1);

    const btn1 = () => {
        settabBtn(1);
    }
    const btn2 = () => {
        settabBtn(2);
    }

    return (
        <>
    
        </>
    )
}

export default PaymentFinish