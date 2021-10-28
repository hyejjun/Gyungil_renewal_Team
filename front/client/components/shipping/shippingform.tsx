import Styled from 'styled-components'
import React, { useState } from 'react'
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import Link from 'next/link';
import useInput from '../../hooks/useInput';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';



const Shippingfrom = () => {
    // @ 주소 찾는 창
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

    // @ 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }

    // @ 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    // @ 주문자
    const [orderer, onChangeOrderer] = useInput('')
    
    // @ 수신자
    const [receiver, onChangeReceiver] = useInput('')
    
    // @ 전화번호
    const [phoneNum, onChangePhoneNum] = useInput('')
    
    // @ 주소
    const [address, setaddress] = useState<string>(' ')
    
    // @ 우편번호
    const [postNumber, setpostNumber] = useState<string>(' ')
    
    // @ 자세한 주소
    const [addressDetail, onChangeAddressDetail] = useInput('')
    
    // @ 배송 메모
    const [memo, onChangeMemo] = useInput('')

    // @ 택배 / 우체국 택배 / 편의점 픽업
    const [inputStatus, setInputStatus] = useState<string>('택배')
    const handleClickRadioButton = (radioBtnName) => {
        setInputStatus(radioBtnName)  
    }

    // @ dispatch 할 때 보내줄 data 들
    const shippingData = {
        orderer,
        receiver,
        phoneNum,
        address,
        postNumber,
        addressDetail,
        memo,
        inputStatus
    }

    const handelSubmit = ()=>{
        // 여기서 dispatch로 날리고
        console.log(shippingData);
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
                                <TextField id="standard-basic" variant="standard" value={orderer} onChange={onChangeOrderer} />
                            </ContentTd>
                        </tr>
                        <tr>
                            <HeadTd>수령인</HeadTd>
                            <ContentTd>
                                <TextField id="standard-basic" variant="standard" value={receiver} onChange={onChangeReceiver} />
                            </ContentTd>
                        </tr>
                        <tr>
                            <HeadTd>휴대전화</HeadTd>
                            <ContentTd>
                                <TextField id="standard-basic" variant="standard" value={phoneNum} onChange={onChangePhoneNum} />
                            </ContentTd>
                        </tr>
                        <tr>
                            <HeadTd>주소</HeadTd>
                            <Address>{address}
                                <Button variant="outlined" size="medium" onClick={openPostCode}>
                                    주소 찾기
                                </Button>
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
                            <HeadTd>상세 주소</HeadTd>
                            <ContentTd>
                                <TextField id="standard-basic" variant="standard" value={addressDetail} onChange={onChangeAddressDetail} />
                            </ContentTd>
                        </tr>
                        <tr>
                            <HeadTd>우편 번호</HeadTd>
                            <Address>{postNumber}</Address>
                        </tr>
                        <tr>
                            <HeadTd>배송방법</HeadTd>
                            <Method>
                                <ul>
                                    <li><input type="radio" name="normal" id="firstCheck" value="택배" defaultChecked onClick={() => handleClickRadioButton('택배')}/><label htmlFor="firstCheck">택배</label></li>
                                    <li><input type="radio" name="normal" id="secondCheck" value="우체국택배" onClick={() => handleClickRadioButton('우체국')}/><label htmlFor="secondCheck">우체국 택배</label></li>
                                    <li><input type="radio" name="normal" id="thirdCheck" value="편의점방문"  onClick={() => handleClickRadioButton('편의점')}/><label htmlFor="thirdCheck">편의점 방문 픽업</label></li>
                                </ul>
                            </Method>
                        </tr>
                        <tr>
                            <HeadTd>배송 메모</HeadTd>
                            <ContentTd>
                                <TextField id="standard-basic" variant="standard" placeholder="배송 시 요청사항을 입력해주세요" value={memo} onChange={onChangeMemo} />
                            </ContentTd>
                        </tr>
                    </tbody>
                </Table>
                <ShipSubmit>
                    <Link href="/paymentend"><a>
                        <Button variant="outlined" size="large" onClick={handelSubmit}>
                            주문 완료
                        </Button>
                    </a></Link>
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
    & > button {
        border: 1px solid rgb(145 145 145);
        color : rgb(145 145 145);
    }
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
    & >div>div> input {
        width: 500px;
    }

    & >div>div> input::after{
        border : none;
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

    & > a > button {
        width : 200px;
        height : 50px;
        border: 1px solid rgb(145 145 145);
        color : rgb(145 145 145);
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
