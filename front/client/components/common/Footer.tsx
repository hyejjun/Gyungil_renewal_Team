import Link from 'next/link';
import Styled from 'styled-components';

const Footer = () => {
    return(
        <FooterWrapper>
            <div id="topInFooter">
                <span>Azit Gallery</span>
                <span>
                    <p><Link href="/feedback"><a>Send FeedBack</a></Link></p>
                    <p><Link href="/"><a>contect us</a></Link></p>
                    <p><Link href="/"><a>english</a></Link></p>
                </span>
            </div>
            <div>
                <div>
                    <ul>
                        <li>Copyright © 2021 GroundX. All rights reserved.</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Operation Policy</li>
                    </ul>
                </div>
                <br/>
                <div>
                    <ul>
                        <li>GroundX Company Registration Number : 356-88-00968</li>
                        <li>CEO : Jaesun Han</li>
                        <li>11 Teheran-ro 98-gil, Gangnam-gu, Seoul, Republic of Korea</li>
                    </ul>

                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
 
const FooterWrapper = Styled.div`
    padding-left:30px;
    bottom:0px;
    width:100%;
    height:240px;
    background-color:#141e28;
    box-sizing:border-box;   
    a,li, span {
        color:#fff;
    }
    ul li {
        list-style:none;
    }
    #topInFooter{
        padding-top:45px;
        padding-left:50px;
    }
    #topInFooter>span:nth-child(1){
        font-size:25px;
        margin-left:30px;
        margin-right:700px;
    }
    #topInFooter>span:nth-child(2)>p a{
        margin-right:30px;
        text-decoration:none;
        font-size:20px;
        background-color:#141e28;
    }
    #topInFooter>span:nth-child(2)>p{   
        display:inline;
    }
    div:nth-child(2){
        margin-left:40px;
        margin-top:60px
    }
    div:nth-child(2)>div>ul>li{
        color:rgba(45,55,65,80);
        float:left;
    }

`
