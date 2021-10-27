import Styled from 'styled-components'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const DeliveryForm = () => {
    return(
        <DelieryFromWrapper>
            <ul>
                <li>
                    <span><ShoppingBasketIcon/></span>
                </li>
                <li>
                    <span><PaymentIcon/></span>

                </li>
                <li>
                    <span><LocalShippingIcon/></span>
                </li>
                <li>
                    <span><CheckBoxIcon/></span>

                </li>
            </ul>
        </DelieryFromWrapper>
    )
}

export default DeliveryForm

const DelieryFromWrapper = Styled.div`
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
    ul>li
    ul>li>span svg {
        width:100px;
        height:100px;
        margin-top:20px;
    }

`