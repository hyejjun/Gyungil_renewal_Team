import Styled from 'styled-components'
import React, { useState } from 'react'
import Link from 'next/link';
import DeliveryImg from './DeliveryImg';
import DeliveryForm from './DeliveryForm';
import OrderInfo from './OrderInfo'
import DeliveryInfo from './DeliveryInfo';
import ProductInfo from './ProductInfo';
import Btn from '../common/Btn';

const PaymentFinish = () => {
    return (
        <>
             {/* <ShipWrap>
                <HeadLine>Shipping Notice</HeadLine>
                <H5>배송 정보</H5>
                <Table>
                    <tbody>
                        <tr>
                            <TwoTd>주문번호</TwoTd>
                            <OneTd>001-A040874087</OneTd>
                            <TwoTd>배송방법</TwoTd>
                            <OneTd>택배</OneTd>
                        </tr>
                        <tr>
                            <TwoTd>상태</TwoTd>
                            <TwoTdContent>상품 준비 중 (2012-09-06)</TwoTdContent>
                            <TwoTd>운송장</TwoTd>
                            <TwoTdContent>64245454545, CJ 대한통운</TwoTdContent>
                        </tr>
                    </tbody>
                </Table>
                <H5>상품 정보</H5>
                <Table>
                    <tbody>
                        <tr>
                            <TwoTd>상품 명</TwoTd>
                            <OneTd>미학의 문제와 방법</OneTd>
                        </tr>
                        <tr>
                            <TwoTd>상품 가격</TwoTd>
                            <OneTd>15000원 </OneTd>
                        </tr>
                        <tr>
                            <TwoTd>총 주문금액</TwoTd>
                            <OneTd>15700 원 (상품가격 15000원 + 배송료 700원)</OneTd>
                        </tr>
                        <tr>
                            <TwoTd>결제 방법</TwoTd>
                            <OneTd>
                                kaikas
                            </OneTd>
                        </tr>
                    </tbody>
                </Table>
                <H5>주문자 정보</H5>
                <Table>
                    <tbody>
                        <tr>
                            <TwoTd>주문하신 분</TwoTd>
                            <TwoTdContent>김서영</TwoTdContent>
                            <TwoTd>받으시는 분</TwoTd>
                            <TwoTdContent>김서영</TwoTdContent>
                        </tr>
                        <tr>
                            <TwoTd>배송주소</TwoTd>
                            <OneTd>
                                (06565) 서울특별시 사당로 29다길 메롱
                            </OneTd>
                        </tr>
                        <tr>
                            <TwoTd>휴대번호</TwoTd>
                            <OneTd>
                                010-6618-2614
                            </OneTd>
                        </tr>
                        <tr>
                            <TwoTd>배송메세지</TwoTd>
                            <OneTd>
                                출입방법: 자유 출입 가능
                            </OneTd>
                        </tr>
                    </tbody>
                </Table>
            </ShipWrap>  */}
            {/* <ShipWrap> */}
            <ShipWrap>
                <DeliveryImg/>
                <br/><br/><br/><br/>
                <OrderInfo/>
                <br/>
                <DeliveryInfo/>
                <br/>
                <ProductInfo/>

            </ShipWrap>
                {/* <DeliveryForm/> */}
            <Link href="/"><a><Btn>메인으로</Btn></a></Link>
            {/* </ShipWrap> */}
        </>
    )
}

export default PaymentFinish

const ShipWrap = Styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:60px 0px 40px 60px;
`
// const Table = Styled.table`
//     margin-bottom:60px;
//     border:1px solid grey;
// `

// const HeadLine = Styled.h3`
//     font-size:38px;
//     margin-bottom:60px;
// `

// const TwoTd = Styled.td`
//     font-size:18px;
//     width:120px;
//     height:55px;
//     border:1px solid grey;
//     text-align:center;
//     background:#bbb;
//     color:white;
// `

// const TwoTdContent = Styled.td`
//     width:400px;
//     height:55px;
//     border:1px solid grey;
//     box-sizing:border-box;
//     padding:7px;
//     font-size:18px;
// `

// const OneTd = Styled.td`
//     width:400px;
//     border:1px solid grey;
//     padding:9px;
//     font-size:18px;
// `

// const H5 = Styled.h3`
//     font-size:22px;
//     margin-bottom:15px;
// `

const Center = Styled.div`
    width: 160px;
    display:flex;
    margin: 10px 0px 50px 60px;   
`

const SubmitBtn = Styled.button`
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