import Styled from 'styled-components'
import React, { useState } from 'react'
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import Link from 'next/link';
import InputStyle from '../common/InputStyled';

const Shippingfrom = () => {

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
    const [address, setaddress] = useState<string>(' ')
    const [postNumber, setpostNumber] = useState<string>(' ')
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
                <HeadLine>주문 정보</HeadLine>
                <Table>
                    <tbody>
                        <tr>
                            <HeadTd id="Person">주문인</HeadTd>
                            <ContentTd>
                                <InputStyle/>
                            </ContentTd>
                        </tr>
                        <tr>
                            <HeadTd>수령인</HeadTd>
                            <ContentTd>
                                <InputStyle/>
                            </ContentTd>
                        </tr>
                        <tr>
                            <HeadTd>휴대전화</HeadTd>
                            <ContentTd>
                                <InputStyle/>
                            </ContentTd>
                        </tr>
                        <tr>
                            <HeadTd>이메일</HeadTd>
                            <ContentTd>
                                <InputStyle/>
                            </ContentTd>
                        </tr>
                        <tr>
                            <HeadTd>주소</HeadTd>
                            <Address>{address}
                                <AddressFind type='button' onClick={openPostCode}>주소 찾기</AddressFind>
                                <div id='popupDom'>
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupPostCode onClose={closePostCode} address={address} setaddress={setaddress} setpostNumber={setpostNumber} />
                                        </PopupDom>
                                    )}
                                </div>
                            </Address>
                        </tr>
                        <tr>
                            <HeadTd>우편 번호</HeadTd>
                            <Address>{postNumber}</Address>
                        </tr>
                        <tr>
                            <HeadTd>배송방법</HeadTd>
                            <Method>
                                <ul>
                                    <li><input type="radio" name="normal" id="firstCheck" /><label htmlFor="firstCheck">택배</label></li>
                                    <li><input type="radio" name="normal" id="secondCheck" /><label htmlFor="secondCheck">우체국 택배</label></li>
                                    <li><input type="radio" name="normal" id="thirdCheck" /><label htmlFor="thirdCheck">편의점 방문 픽업</label></li>
                                </ul>
                            </Method>
                        </tr>
                        <tr>
                            <HeadTd>배송 메모</HeadTd>
                            <ContentTd><div><input type="text" placeholder="배송 시 요청사항을 입력해주세요"/></div></ContentTd>
                        </tr>
                    </tbody>
                </Table>
                <ShipSubmit>
                    <Link href="/paymentend"><a><SubmitBtn>주문 완료</SubmitBtn></a></Link>
                </ShipSubmit>
            </ShipWrap>
        </>
    )
}

export default Shippingfrom

const Table = Styled.table`
    margin-top:60px;
    width: 60%;
    border-collapse: collapse;

    th, td {
        height : 100px;
    }
`

const ShipWrap = Styled.div`
    
`
const HeadLine = Styled.div`
    font-size:30px;
    font-weight : bold;
    color: rgb(21 21 21 / 70%);
`
const HeadTd = Styled.td`
    width:200px;
    height:40px;
    box-sizing:border-box;
    padding:7px;
    font-size: 16px;
    line-height: 28px;
    color: rgba(45,55,65,.7);
    cursor : default;
`

const Address = Styled.td`
    font-size:19px;
`

const AddressFind = Styled.button`
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
`

const ContentTd = Styled.td`
    & > div {
        cursor: text;
        display: flex;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        border: 1px solid rgb(229, 232, 235);
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
    }
    
    & > div > input,
    & > div > label,
    & > div > label>input{
        width : 100%;
        font-size: 20px;
        background-color: transparent;
        border: none;
        outline: none;
        
    }
     
`
const ShipSubmit = Styled.div`
    width: 100%;
    height: 130px;
    padding: 3% 0;
    box-sizing: border-box;

    & > a {
        float : right;
    }
`

const SubmitBtn = Styled.button`
    width: 160px;
    height:50px;
    color:grey;
    font-size: 16px;
    display:inline-block;
    color: grey;
    border: 1px solid #aab4be;
    border-radius: 4px;
    padding: 10px 24px;
    box-sizing: border-box;
    line-height: 28px;
    margin-right: 16px;
    font-weight: 400;
    cursor:pointer;
    &:hover{
        color:black;
    }
`
