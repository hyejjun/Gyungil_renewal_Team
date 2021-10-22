// 메인 페이지에 있는 새 NFT 등록하기 배너

import Styled from 'styled-components'
import Link from 'next/link'

const Css = Styled.div`
    
.marginTop{
    margin-top:66px;
}

.signUpContainer{
    width: 560px;
    padding: 80px;
    background-color: #000;
    box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
    border-radius: 16px;
    position: relative;
    margin:0 auto;

}

.title{
    display: table-cell;
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    color: #2d3741;
    vertical-align: bottom;
}

.textLeft{
    text-align: left!important;
}

.pageSubtitleBold{
    display: table-cell;
    font-weight: 700;
    font-size: 20px;
    color: #2d3741;
    vertical-align: middle;
}

.sideSubtitle{
    font-size: 12px;
    line-height: 20px;
    color: rgba(45,55,65,.7);
    text-align: right;
}

.InputBox{
    display: block;
    width: 100%;
    height: calc(1.75em + 1.25rem + 2px);
    padding: .625rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    box-sizing: border-box;
}

.chkFont{
    font-size: 16px;
    line-height: 28px;
    color: #2d3741;
}

.mBottom{
    margin-bottom:1.2rem;
}

.devider{
    padding-bottom: 48px;
    margin-bottom: 48px;
    border-bottom: 1px solid rgba(20,30,40,.08);
}
.Btn{
    display: inline-block;
    border-width: 0;
    padding: 18px 24px;
    height: 64px;
    margin-right: 8px;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 18px 24px;
    font-size: 1rem;
    line-height: 1.75;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    box-sizing:border-box;
}

.btnBlur{
    background-color: #e1f0ff;
    color: #1e73fa;
}

.signUpBtn{
    color: #fff;
    background-color: #1e73fa;
    border-color: #1e73fa; 
    
}

.cancelBtn{
    display: inline-block;
    padding: 18px 24px;
    margin: 0 auto;
    text-align:center;
    border-radius: .25rem;
    font-weight:bold;
    font-size: 1rem;
    margin-right: 8px;
    color: #1e73fa;
    background-color: #e1f0ff;
    height:29px
} 
/* .Btn{
    vertical-align: middle;
}
.signUpBtn{
    display:inline-block;
    text-align:center;
    padding: 18px 24px;
    text-align:center;
    border-radius: .25rem;
    font-weight:bold;
    font-size: 1rem;
    color: #fff;
    background-color: #1e73fa;
    
} */
/* 
.signUpBtn:hover{
    color: #fff;
    background-color: ##6610f2;;
    border-color: ##6610f2;;
} */

.displayNone{
    display:none;
}
.underLine{
    color:#1e73fa;
}
`


const SignUp = () => {
    return (
        <>
            <Css>
                <div className="signUpContainer">
                    <form>
                        <div className="title">회원가입</div>
                        <div>이미지</div>

                        <table width="100%;" className="marginTop">
                            <tbody>
                                <tr>
                                    <td>
                                        <table width="100%;">
                                            <tbody>
                                                <tr>
                                                    <td className="textLeft pageSubtitleBold">닉네임</td>
                                                    <td className="sideSubtitle">* 5~20자의 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 사용 가능합니다.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="10px;"></td>
                                </tr>
                                <tr>
                                    <td className="textLeft">
                                        <input type="text" className="InputBox" placeholder="닉네임을 입력해주세요." />
                                    </td>
                                </tr>

                                <tr>
                                    <td height="42px;"></td>
                                </tr>
                                <tr>
                                    <td className="textLeft pageSubtitleBold">지갑 주소</td>
                                </tr>
                                <tr>
                                    <td height="10px;"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" className="InputBox" readOnly value="0x880cbdb6ebaa129564ce9e7278561645f4e2d7eb" />
                                    </td>
                                </tr>
                                <tr>
                                    <td height="42px;"></td>
                                </tr>
                                <tr>
                                    <td className="textLeft pageSubtitleBold">이메일 주소</td>
                                </tr>
                                <tr>
                                    <td height="10px;"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" className="InputBox" placeholder="이메일 주소를 입력해주세요." />
                                    </td>
                                </tr>
                                <tr>
                                    <td height="48px;"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                            <div className="mBottom">
                                                <label className="chkFont"><input type="checkbox" id="agree1" /> 만 19세 이상입니다.</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                            <div className="mBottom">
                                                <label className="chkFont"><input type="checkbox" id="agree2" /> (필수) <a target="_blank" href="http://naver.com" rel="noreferrer" className="underLine"> 서비스 이용약관</a>에 동의합니다.</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                            <div className="mBottom">
                                                <label className="chkFont"><input type="checkbox" id="agree3" /> (필수) <a target="_blank" href="http://naver.com" rel="noreferrer"  className="underLine">개인정보 수집 및 이용</a>에 동의합니다.</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="devider"></div>
                        <a className="cancelBtn">취소</a>
                        <div className="displayNone">
                            <div></div>
                        </div>
                        <button type="button" className="signUpBtn Btn">회원가입</button>
                    </form>
                </div>
            </Css>

        </>
    )
}

export default SignUp

const MyNFTAll = Styled.ul`

    
`
