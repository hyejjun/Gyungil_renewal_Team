import Link from 'next/link';
import Styled from 'styled-components';

const Footer = () => {
    return(
        <FooterWrapper>
            <div>
                <p>Azit Gallery</p>
                <ul>
                    <li><Link href=""><a>Send FeedBack</a></Link></li>
                    <li><Link href=""><a>contect us</a></Link></li>
                    <li><Link href=""><a>english</a></Link></li>
                </ul>
            </div>
            <div></div>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = Styled.div`
    width:100%;
    height:50px;
    background-color:#141e28;
    box-sizing:border-box;   
`