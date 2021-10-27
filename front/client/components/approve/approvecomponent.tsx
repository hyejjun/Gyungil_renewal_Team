import Styled from 'styled-components'
import React, { useState } from 'react'

const ItemList = () => {



    const [checkedItems, setCheckedItems] = useState();

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
          checkedItems.add(id);
          setCheckedItems(checkedItems);
        } else if (!isChecked && checkedItems.has(id)) {
          checkedItems.delete(id);
          setCheckedItems(checkedItems);
        }
      };

      const [bChecked, setChecked] = useState(false);

    const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(issue.id, target.checked);
    };



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


    const nameList: JSX.Element[] = Arr.map((ele) =>
        <tr>
            <td>epiteom</td>
            <td>2021-10-27</td>
            <td>대기중</td>
            <td><input type = "checkbox"/></td>
        </tr>
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
                <tr><input type="button" checked={bChecked} onChange={(e) => checkHandler(e)} /></tr>
            </tbody>
        </Table>

        </>
    )
}

export default ItemList

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

const TdApprove = Styled.td`
    color:blue;
`

const TdCancel = Styled.td`
    color:red;
`

const TdWait = Styled.td`
    color:grey;
`

const Button = Styled.button`
    font-size:20px;
    border:1px solid #bbb;
    background:white;
    padding:3px;
    box-sizing:border-box;
    &:hover{
        color:white;
        background:#bbb;
        border:1px solid white;
    }
`