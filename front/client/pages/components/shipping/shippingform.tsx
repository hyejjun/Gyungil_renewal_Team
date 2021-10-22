import Styled from 'styled-components'
import React, { useState } from 'react'
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

const shippingfrom = () => {

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
    const [address,setaddress] = useState<string>(' ')
    const [postNumber,setpostNumber] = useState<string>(' ')
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    return (
        <>
            <HeadLine>Recipient Info</HeadLine>
            <table>
                <tr>
                    <HeadTd>주문인</HeadTd>
                    <td><InputName type = "text" /></td>
                </tr>
                <tr>
                    <HeadTd>수령인</HeadTd>
                    <td><InputName type = "text" /></td>
                </tr>
                <tr>
                    <HeadTd>휴대전화</HeadTd>
                    <td><InputPhone type = "text" />   -   <InputPhone type = "text" />   -   <InputPhone type = "text" /></td>
                </tr>
                <tr>
                    <HeadTd>이메일</HeadTd>
                    <td><InputEmail type = "text" />    @   <InputEmail type = "text" /></td>
                </tr>
                <tr>
                    <HeadTd>주소</HeadTd>
                    <Address>{address}
                        <AddressFind type='button' onClick={openPostCode}>주소 찾기</AddressFind>
                        <div id='popupDom'>
                            {isPopupOpen && (
                                <PopupDom>
                                    <PopupPostCode onClose={closePostCode} address={address} setaddress={setaddress} setpostNumber={setpostNumber}/>
                                </PopupDom>
                            )}
                        </div>
                    </Address>
                </tr>
                <tr>
                    <HeadTd>우편 번호</HeadTd>
                    <Address>{postNumber}
                    </Address>
                </tr>
                <tr>
                    <HeadTd>배송방법</HeadTd>
                    <Method>
                        <ul>
                            <li><input type = "radio" name = "normal" checked />택배</li>
                            <li><input type = "radio" name = "normal"/>우체국 택배</li>
                            <li><input type = "radio" name = "normal"/>편의점 방문 픽업</li>
                        </ul>
                    </Method>
                </tr>
                <tr>
                    <HeadTd>배송 메모</HeadTd>
                    <td><Memo type = "text" placeholder = "배송 시 요청사항을 입력해주세요"/></td>
                </tr>
            </table>
            <SubmitBtn>주문 완료</SubmitBtn>
        </>
    )
}

export default shippingfrom

const HeadLine = Styled.h3`
    font-size:38px;
    margin-bottom:30px;
`
const HeadTd = Styled.td`
    width:250px;
    height:40px;
    font-size:20px;
`

const SubmitBtn = Styled.button`
    margin-top:30px;
    width: 160px;
    height:40px;
    color:grey;
    font-size:18px;
    border:1px solid grey;
    &:hover{
        color:black;
    }
`

const InputName = Styled.input`
    width:253px;
    height:25px;
`

const InputPhone = Styled.input`
    width:70px;
    height:25px;
`

const InputEmail = Styled.input`
    width:160px;
    height:25px;
    
`

const Memo = Styled.input`
    height:30px;
    width:300px;
`

const Address = Styled.td`
    font-size:19px;
`

const AddressFind = Styled.button`
    margin-left:20px;
    color:grey;
    border:1px solid grey;
    padding:3px;
    box-sizing:border-box;
    border-radius:4px;
    &:hover{
        color:black;
    }
`

const Method = Styled.td`
    height:100px;
    line-height:30px;
`