import Styled from 'styled-components'
import React, { useState } from 'react'
import ItemListSell from './ItemListSell'
import ItemListAuction from './ItemListAuction'
import WebLayout from '../layout/WebLayout'
import MyNft from './MyNFT'

const ItemList = () => {

    const [tabBtn, settabBtn] = useState<number>(1);

    const btn1 = () => {
        settabBtn(1);
    }
    const btn2 = () => {
        settabBtn(2);
    }

    return (
        <>
            <MyNft />
            <MenuBar>
                <Menu>
                    <Menu1 onClick={btn1}>판매</Menu1>
                </Menu>
                <Menu>
                    <Menu1>|</Menu1>
                </Menu>
                <Menu>
                    <Menu1 onClick={btn2}>경매</Menu1>
                </Menu>
            </MenuBar>
            <div>
                {
                    tabBtn === 1
                        ? <ItemListSell />
                        : <ItemListAuction />
                }
            </div>
        </>
    )
}

export default ItemList

const Menu = Styled.li`
color:#2d3741;
display:inline-block;
text-decoration:none;
list-style:none;
margin-right:20px;
float:left;

`
const MenuBar = Styled.ul`
clear:both;
margin-bottom:70px;
`
const Menu1 = Styled.div`
    font-size:24px;
    cursor:pointer;
&:hover{
    color:#055fec;
}
`