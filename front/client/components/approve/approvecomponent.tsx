import Styled from 'styled-components'
import React, { useState } from 'react'
import { SellerAdminAccess_REQUEST } from '../../reducers/user'
import { SellerAdminDeny_REQUEST } from '../../reducers/user'
import { useSelector, useDispatch } from 'react-redux'

const approvecomponent = () => {

    const dispatch = useDispatch()
    interface ArrEle {
        Num : string,
        Num2 : string,
        name: string,
        date: Object,
    }

    const [Arr, setArr] = React.useState<ArrEle[]>([
        {
            Num : 'Num1',
            Num2 : 'Num21',
            name: 'epiteom',
            date: new Date(),
        },
        {
            Num : 'Num2',
            Num2 : 'Num22',
            name: 'epiteom',
            date: new Date(),
        },
        {
            Num : 'Num3',
            Num2 : 'Num23',
            name: 'epiteom',
            date: new Date(),
        },
        {
            Num : 'Num4',
            Num2 : 'Num24',
            name: 'epiteom',
            date: new Date(),
        },
      ]);


    const nameList: JSX.Element[] = Arr.map((ele, id) =>{

        const Arr = `Arr${String(id+1)}`
        const PullArr = () => {

            var result = confirm("kyc 인증을 하겠습니까?");
            if(result){
                alert("인증되었습니다");
                document.querySelector(`.Arr${id+1}`).innerHTML = '승인됨'
                dispatch(SellerAdminAccess_REQUEST(undefined))
            }else{
                alert("반려되었습니다");
                document.querySelector(`.Arr${id+1}`).innerHTML = '반려됨'
                dispatch(SellerAdminDeny_REQUEST(undefined))
            }

        }
        return(
            <tr>
                <td>epiteom</td>
                <td>2021-10-27</td>
                <td className = {Arr}>대기중</td>
                <td><BTN onClick = {PullArr}>승인</BTN></td>
            </tr>
        )}
    )

    return (
        <>
        <Table>
            <tbody>
                <tr>
                    <TdHead>신청자</TdHead>
                    <TdHead>날짜</TdHead>
                    <TdHead>승인상태</TdHead>
                    <TdHead>승인확인</TdHead>
                </tr>
                {nameList}
            </tbody>

        </Table>

        </>
    )
}

export default approvecomponent

const Table = Styled.table`
    width:800px;
    margin:0 auto;
    font-size:20px;
    text-align:center;
    line-height:80px;
    margin-top:100px;
    margin-bottom:100px;
`
const TdHead = Styled.td`
    font-weight:bold;
    font-size:25px;
`

const BTN = Styled.div`
    font-size:20px;
    font-weight:bold;
    border:1px solid #bbb;
    width:80px;
    margin:0 auto;
    height:30px;
    text-align:center;
    padding:0px 0px 50px 0px;
    &:hover{
        color:white;
        background:#bbb;
    }

`