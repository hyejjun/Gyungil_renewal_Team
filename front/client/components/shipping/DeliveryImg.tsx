import Styled from 'styled-components'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const DeliveryImg = () => {
    return(
        <DelieryImgWrapper>
            <ul>
                <div></div>
                <li>
                    <p><ShoppingBasketIcon/></p>
                    <p>구매완료</p>
                    <KeyboardArrowRightIcon/>
                    
                </li>
                <li>
                    <p><PaymentIcon/></p>
                    <p>결제완료</p>
                    <KeyboardArrowRightIcon/>

                </li>
                <li>
                    <p><LocalShippingIcon/></p>
                    <p>배송중</p>
                    <KeyboardArrowRightIcon/>
                </li>
                <li>
                    <p><CheckBoxIcon/></p>
                    <p>배송완료</p>

                </li>
            </ul>
        </DelieryImgWrapper>
    )
}

export default DeliveryImg

const DelieryImgWrapper = Styled.div`
    ul{
        display:flex;
        flex-direction:row;
        justify-content:center;
    }
    ul>li{
        width:140px;
        height:140px;
        border-radius:50%;
        background-color:#dadce0;
        margin-right:40px;
        border:1px solid #dadce0;
        text-align:center;
    }
    ul>li:nth-child(4){
        background-color:#dbe4ff;
    }
    ul>li>p svg {
        width:100px;
        height:100px;
        margin-top:20px;
    }
    ul>li>p:nth-child(2){
        margin-top:50px;
        font-weight:600;
    }
    ul>li>svg{
        width:30px;
        height:30px;
        padding:0px;
        font-weight:600;
        margin-left:140px;
        display:flex;
        margin-top:-24px;

    }

`