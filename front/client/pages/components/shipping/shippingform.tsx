import Styled from 'styled-components'
import React, { useState } from 'react'
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import Link from 'next/link';

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

    const ComfirmContent = () => {


    }

    return (
        <>  
        <ShipWrap>
            <HeadLine>Recipient Info</HeadLine>
            <Table>
                <tr>
                    <HeadTd id = "Person">주문인</HeadTd>
                    <ContentTd><label htmlFor = "Person"><InputName type = "text"/></label></ContentTd>
                </tr>
                <tr>
                    <HeadTd>수령인</HeadTd>
                    <ContentTd><InputName type = "text" /></ContentTd>
                </tr>
                <tr>
                    <HeadTd>휴대전화</HeadTd>
                    <ContentTd><InputPhone type = "text" />   -   <InputPhone type = "text" />   -   <InputPhone type = "text" /></ContentTd>
                </tr>
                <tr>
                    <HeadTd>이메일</HeadTd>
                    <ContentTd><InputEmail type = "text" />    @   <InputEmail type = "text" /></ContentTd>
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
                            <li><input type = "radio" name = "normal" id = "firstCheck"/><label htmlFor = "firstCheck">택배</label></li>
                            <li><input type = "radio" name = "normal" id = "secondCheck"/><label htmlFor = "secondCheck">우체국 택배</label></li>
                            <li><input type = "radio" name = "normal" id = "thirdCheck"/><label htmlFor = "thirdCheck">편의점 방문 픽업</label></li>
                        </ul>
                    </Method>
                </tr>
                <tr>
                    <HeadTd>배송 메모</HeadTd>
                    <ContentTd><Memo type = "text" placeholder = "배송 시 요청사항을 입력해주세요"/></ContentTd>
                </tr>
                <tr>
                    <Center><Link href = "/PaymentEnd"><a><SubmitBtn onClick = {ComfirmContent}>주문 완료</SubmitBtn></a></Link></Center>
                </tr>
            </Table>
        </ShipWrap>
        </>
    )
}

export default shippingfrom

const Table = Styled.table`

    box-sizing:border-box;
    padding:3px;
    margin-left:90px;
    margin-top:60px;
`
const ShipWrap = Styled.div`
    margin:60px 0px 80px 180px;
`
const HeadLine = Styled.h3`
    font-size:38px;
    margin-bottom:30px;
`
const HeadTd = Styled.td`
    width:200px;
    height:40px;
    font-size:20px;
    border:1px solid grey;
    box-sizing:border-box;
    padding:7px;
    
`
const InputName = Styled.input`
    width:350px;
    height:30px;
`

const InputPhone = Styled.input`
    width:102px;
    height:30px;
`

const InputEmail = Styled.input`
    width:160px;
    height:30px;
    
`

const Memo = Styled.input`
    height:37px;
    width:350px;
`

const Address = Styled.td`
    font-size:19px;
    border:1px solid grey;
`

const AddressFind = Styled.button`
    margin-left:20px;
    color:grey;
    cursor:pointer;
    padding:6px;
    box-sizing:border-box;
    height:35px;
    &:hover{
        color:black;
    }
`

const Method = Styled.td`
    height:100px;
    line-height:30px;
    border:1px solid grey;
`

const ContentTd = Styled.td`
     border:1px solid grey;
`

const Center = Styled.td`
    width: 160px;
    display:inline-block;
    margin: 60px auto;
`

const SubmitBtn = Styled.submit`
    width: 160px;
    height:50px;
    color:grey;
    font-size:18px;
    display:inline-block;
    cursor:pointer;
    &:hover{
        color:black;
    }
`