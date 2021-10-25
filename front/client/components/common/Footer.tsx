import Link from 'next/link';
import Styled from 'styled-components';




const Footer = () => {
    return(
        <FooterWrapper>
            <div id="topInFooter">
                <span>Azit Gallery</span>
                <span>
                    <p><Link href="/feedback"><a>의견 남기기</a></Link></p>
                    <p><Link href="/"><a>문의하기</a></Link></p>
                    <p><Link href="/"><a>한국어</a></Link></p>
                </span>
            </div>
            <div>
                <div>
                    <ul>
                        <li>Copyright © 2021 GroundX. All rights reserved&nbsp;&nbsp;|</li>
                        <li>&nbsp;&nbsp;개인정보처리방침&nbsp;&nbsp;|</li>
                        <li>&nbsp;&nbsp;서비스 이용 약관&nbsp;&nbsp;|</li>
                        <li>&nbsp;&nbsp;서비스 운영정책</li>
                    </ul>
                </div>
                <br/>
                <div>
                    <ul>
                        <li>그라운드엑스 사업자등록번호 : 356-88-00968  &nbsp;&nbsp;| </li>
                        <li> &nbsp; &nbsp;대표이사 : 한재선 &nbsp;| </li>
                        <li>&nbsp;&nbsp;서울특별시 강남구 테헤란로98길(대치동) 11 EG빌딩</li>
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
    cursor:pointer;
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
        background-color:#141e28;
        border: 1px solid #aab4be;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 10px 24px;
        height: 48px;
        font-size: 16px;
        line-height: 28px;
        margin-right: 16px;
        display: inline-block;
        font-weight: 400;
    }
    #topInFooter>span:nth-child(2)>p a:hover{
        background-color:rgba(255, 255, 255,0.22);
        color:#ffffff;


    }
    #topInFooter>span:nth-child(2)>p{   
        display:inline;
    }
    div:nth-child(2){
        margin-left:75px;
        margin-top:40px;
    }
    div:nth-child(2)>div>ul>li{
        color:rgba(45,55,65,80);
        float:left;
        color: hsla(0,0%,100%,.4);
        font-size: 14px;
        font-weight:400;
        line-height: 22px;
    }

`
