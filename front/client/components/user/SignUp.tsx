// 메인 페이지에 있는 새 NFT 등록하기 배너

import Styled from 'styled-components'
import Link from 'next/link'
import React,{ useState } from 'react'
import useInput from '../../hooks/useInput'
import SucJoin from './SucJoin'
import { useSelector, useDispatch } from 'react-redux'
import { setUncaughtExceptionCaptureCallback } from 'process'
import Router from 'next/router'
import { RootState } from "../../reducers"

const SignUp = () => {

    const [nickName, setNickName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const [nickErr, setNickErr] = useState<boolean>(true); 
    const [nickLength3Err, setNickLength3Err] = useState<boolean>(false); 
    const [nickSignErr, setNickSignErr] = useState<boolean>(false); 

    const [emailErr, setEmailErr] = useState<boolean>(true); 
    const [email2Err, setEmail2Err] = useState<boolean>(true)
    const [checked1,setChecked1] = useState<boolean>(false);
    const [checked2,setChecked2] = useState<boolean>(false);
    const [checked3,setChecked3] = useState<boolean>(false);

    const user = useSelector((state:RootState) => state.user);

    const nickChk1 = e => {
        const value = e.target.value;
        setNickName(value);
        setNickErr(value === "");
        setNickLength3Err(value.length < 3 && value.length >0 || value.length > 20 );
        // setNickLength5Err(value.length < 5 && value.length >0);
        
        
        const chkk = () => {
        let chk = [",","?","=","`","~","!","@","#","$","%","^","&","*","(",")","<",">","/","*"]
        let chkTrue = 0;
        for( let i=0;i< chk.length;i++){
            if(value.indexOf(chk[i]) != -1) {
                chkTrue=1;
            }
        }
        if(chkTrue !==0){
            return true;
        }
        }
        setNickSignErr(chkk() === true)
    }   

    const change2 = e => {
        const value = e.target.value;
        setEmail(value);
        setEmailErr(value === "");
    }

    const checkEmail = (e) => {
        var regExp = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        console.log('이메일 유효성검사 :: ', regExp.test(e.target.value) )
        setEmail2Err(regExp.test(e.target.value));
    }
    
    const handleChecked1 = e => {
        setChecked1(!checked1);
}
    
    const handleChecked2 = e => {
        setChecked2(!checked2);
        
    }
    const handleChecked3 = e => {
        setChecked3(!checked3);
    }

    

    const [joinState,setJoinState] = useState<boolean>(false)
    const sucJoin = () => {
        if(nickErr === true || 
            nickLength3Err === true || 
            nickSignErr === true ||
            emailErr === true ||
            email2Err !== true
            ){
            alert("내용입력해주세요.")
        }else if(checked1 !== true || 
            checked2 !== true || 
            checked3 !== true){
            alert("필수 동의사항에 체크해주세요.")
        }else{
            setJoinState(prev=>!prev)        
        }
        if(checked1 !== true || checked2 !== true || checked3 !== true){
            // alert("필수 동의사항에 체크해주세요.")
        }
    }


    return (
        <>
        {joinState?<SucJoin/>:<></>}
            <Css>
                <div className="layout">
                    <div className="signUpContainer">
                        <form>
                            <div className="title">회원가입</div>
                            <div className="image5">
                            <div className="image4 textCenter">
                            <div className="image3">
                            <div className="image2 textCenter">
                            <div className="image1 textCenter">
                            <div>
                            <svg width="120" height="120" 
                            viewBox="0 0 120 120" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                                <circle cx="60" cy="60" r="60" fill="white" fillOpacity="0.8" className="circle"></circle>
                                <path fillRule="evenodd" clipRule="evenodd" 
                                d="M57 50C56.6656 50 56.3534 50.1671 56.1679 50.4453L54.4648 
                                53H51C50.2044 53 49.4413 53.3161 48.8787 53.8787C48.3161 
                                54.4413 48 55.2044 48 56V67C48 67.7957 48.3161 68.5587 48.8787 
                                69.1213C49.4413 69.6839 50.2043 70 51 70H69C69.7957 70 70.5587 69.6839 71.1213 69.1213C71.6839 68.5587 72 67.7957 72 67V56C72 55.2043 71.6839 54.4413 71.1213 53.8787C70.5587 53.3161 69.7957 53 69 53H65.5352L63.8321 50.4453C63.6466 50.1671 63.3344 50 63 50H57ZM55.8321 54.5547L57.5352 52H62.4648L64.1679 54.5547C64.3534 54.8329 64.6656 55 65 55H69C69.2652 55 69.5196 55.1054 69.7071 55.2929C69.8946 55.4804 70 55.7348 70 56V67C70 67.2652 69.8946 67.5196 69.7071 67.7071C69.5196 67.8946 69.2652 68 69 68H51C50.7348 68 50.4804 67.8946 50.2929 67.7071C50.1054 67.5196 50 67.2652 50 67V56C50 55.7348 50.1054 55.4804 50.2929 55.2929C50.4804 55.1054 50.7348 55 51 55H55C55.3344 55 55.6466 54.8329 55.8321 54.5547ZM57 61C57 59.3431 58.3431 58 60 58C61.6569 58 63 59.3431 63 61C63 62.6569 61.6569 64 60 64C58.3431 64 57 62.6569 57 61ZM60 56C57.2386 56 55 58.2386 55 61C55 63.7614 57.2386 66 60 66C62.7614 66 65 63.7614 65 61C65 58.2386 62.7614 56 60 56Z" 
                                fill="#141E28"></path>
                            </svg>
                            </div>
                            </div>
                            <input type="file" accept="image/*" className="imageUp"/>

                            </div>
                            </div>
                            </div>
                            </div>

                            <table className="marginTop width100">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table className="width100">
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
                                        <td className="height10"></td>
                                    </tr>
                                    <tr>
                                        <td className="textLeft">
                                            <input type="text" className="InputBox" value={nickName} onChange={nickChk1} name="nickName" id="nickName" placeholder="닉네임을 입력해주세요."/> 
                                            { nickErr ? <div className="error">닉네임을 입력해주세요.</div> : <></>}
                                            { nickLength3Err ? <div className="error">닉네임을 3자 이상, 20글자 이하로 입력해주세요.</div> : <></>}                                           
                                            { nickSignErr ? <div className="error">닉네임은 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 입력 가능합니다.</div> : <></>}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="height42"></td>
                                    </tr>
                                    <tr>
                                        <td className="textLeft pageSubtitleBold">지갑 주소</td>
                                    </tr>
                                    <tr>
                                        <td className="height10"></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" className="InputBox" readOnly value={user.UserAddress} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="height42"></td>
                                    </tr>
                                    <tr>
                                        <td className="textLeft pageSubtitleBold">이메일 주소</td>
                                    </tr>
                                    <tr>
                                        <td className="height10"></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="email" className="InputBox" value={email} onChange={change2} onBlur={checkEmail} name="email" placeholder="이메일 주소를 입력해주세요." />
                                            { emailErr ? <div className="error">이메일 주소를 입력해주세요.</div> : <></>}
                                            { email2Err ? <></>  : <div className="error">유효한 이메일 주소가 아닙니다. 이메일 주소를 다시 확인해주세요.</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="height42"></td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <div>
                                                <div className="mBottom">
                                                    <label className="chkFont"><input type="checkbox" checked={checked1} onChange={handleChecked1} id="agree1" /> 만 19세 이상입니다.</label>
                                                    { checked1 ? <> </> : <div className="error">KrafterSpace는 만 19세 이상만 이용 가능합니다.</div>} 
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <div className="mBottom">
                                                    <label className="chkFont"><input type="checkbox" checked={checked2} onChange={handleChecked2} id="agree2" /> (필수) <a target="_blank" href="http://naver.com" rel="noreferrer" className="underLine"> 서비스 이용약관</a>에 동의합니다.</label>
                                                    { checked2 ? <> </> : <div className="error">필수 항목에 동의해주세요.</div>} 
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <div className="mBottom">
                                                    <label className="chkFont"><input type="checkbox" checked={checked3} onChange={handleChecked3} id="agree3" /> (필수) <a target="_blank" href="http://naver.com" rel="noreferrer" className="underLine">개인정보 수집 및 이용</a>에 동의합니다.</label>
                                                    { checked3 ? <> </> : <div className="error">필수 항목에 동의해주세요.</div>} 
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="devider"></div>
                            <div className="btn3">
                                <a className="cancelBtn" onClick={()=>Router.back()}>취소</a>
                                <button type="button" className="signUpBtn Btn" onClick={()=>{sucJoin()}}>회원가입</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </Css>

        </>
    )
}

export default SignUp

const Css = Styled.div`

.layout{

}
    
.marginTop{
    margin-top:66px;
}

.signUpContainer{
    width: 560px;
    height: 100%;
    padding: 80px;
    background-color: #fff;
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
.btn3{
    float:right;
}
.Btn{
    display: inline-block;
    border-width: 0;
    padding: 18px 24px;
    height: 64px;
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
    font-weight:bold;
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

.displayNone{
    display:none;
}
.underLine{
    color:#1e73fa;
}

svg{
    overflow:hidden;
    margin-top:40px;
    border: 1px dashed #141E28;
    border-radius: 100%;
}
svg:hover{
    background: #141E28;
}


.textCenter{
    text-align:center!important;
}

.image1{
    width: 120px;
    height: 120px;
    margin-left: auto;
    margin-right: auto;
}

.image2{
    height: 150px;
}

.image4{
    -webkit-flex-basis: 0;
    flex-basis: 0;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    max-width: 100%;
}

.imageUp{
    width: 100%;
    display:none;
}

.error{
    color:#dc3545;
    font-size:12px;
    margin-top: 4px;
}

.height42{
    height:42px;
}

.height10{
    height:10px;
}

.width100{
    width:100%;
}


`