import Styled from 'styled-components'
import React, { useState } from 'react'
import { SellerAdmin_BACK } from '../../reducers/user'
import { RootState } from "../../reducers"
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
const approvebutton = () => {
    const dispatch = useDispatch()
    const SellerAdmin = () => {
        dispatch(SellerAdmin_BACK())
    }
    return (
        <>
            <Link href = "/user/user"><a><BUTTON onClick = {SellerAdmin}>승인완료</BUTTON></a></Link>
        </>
    )
}

export default approvebutton

const BUTTON = Styled.button`
    color:grey;
    border:1px solid grey;
    width:100px;
    height:80px;
    text-align:center;
    margin:30px 500px;
    font-size:20px;
`