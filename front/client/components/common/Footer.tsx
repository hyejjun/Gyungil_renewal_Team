import Link from 'next/link';
import Styled from 'styled-components';




const Footer = () => {
    return (
        <FooterWrapper>
            <div className="footerInner">
                <div id="topInFooter">
                    <span>Azit Gallery</span>
                    <span>
                        <p><Link href="/feedback"><a>의견 남기기</a></Link></p>
                        <p><Link href="/"><a>문의하기</a></Link></p>
                        {/* <p><Link href="/"><a>한국어</a></Link></p> */}
                    </span>
                </div>
                <div className="footerDetail">
                    <div>
                        <ul>
                            <li>Copyright © 2021 GroundX. All rights reserved&nbsp;&nbsp;|</li>
                            <li>&nbsp;&nbsp;개인정보처리방침&nbsp;&nbsp;|</li>
                            <li>&nbsp;&nbsp;서비스 이용 약관&nbsp;&nbsp;|</li>
                            <li>&nbsp;&nbsp;서비스 운영정책</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>그라운드엑스 사업자등록번호 : 356-88-00968  &nbsp;&nbsp;| </li>
                            <li> &nbsp; &nbsp;대표이사 : 한재선 &nbsp;| </li>
                            <li>&nbsp;&nbsp;서울특별시 강남구 테헤란로98길(대치동) 11 EG빌딩</li>
                        </ul>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = Styled.div`
    width:100%;
    height:auto;
    background-color:#141e28;
    cursor:pointer;

    .footerInner{
        width : 1300px;
        height : 100%;
        margin : 0 auto;
        padding: 2.5% 2%;
        box-sizing: border-box;
    }
    a, li, span {
        color:#fff;
    }
    
    #topInFooter{
        display : flex;        
    }

    #topInFooter>span {
        width : 50%;
        display : inline-block;
    }
    #topInFooter>span:nth-child(1){
        font-size:25px;
    }
    
    #topInFooter>span:nth-child(2){
        text-align: right;
    }
    #topInFooter>span:nth-child(2) > p{
        display:inline-block;
    }

    #topInFooter>span:nth-child(2)> p > a{
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

    #topInFooter>span:nth-child(2)>p>a:hover{
        background-color:rgba(255, 255, 255,0.22);
        color:#ffffff;
    }

    .footerDetail{
        width: 100%;
        height: 120px;
        padding-top: 3%;
        box-sizing : border-box;
    }

    .footerDetail > div:nth-child(1){
        margin-bottom: 10px;
    }

    .footerDetail > div > ul {
        width: 100%;
        height: 25px;
        display: block;
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
