import Styled from 'styled-components'
import React, { useState } from 'react'
import ItemListSell from './ItemListSell'
import ItemListAuction from './ItemListAuction'
import MyNft from './MyNFT'

const ItemList = () => {

    const [tabBtn, settabBtn] = useState<number>(0);

    const btn1 = () => {
        settabBtn(0);
    }
    const btn2 = () => {

        settabBtn(1);
    }

    return (
        <>
            <MyNft />
            <MenuBar>
                <Menu1>
                    <Menu onClick={btn1}>판매</Menu>
                </Menu1>
                <Menu2>
                    <Menu onClick={btn2}>경매</Menu>
                </Menu2>
            </MenuBar>
            <div>
                {
                    tabBtn == 0
                        ? <ItemListSell />
                        : (
                            tabBtn == 1
                             ? <ItemListAuction />
                             : <ItemListSell />
                        )
                }
            </div>
        </>
    )
}

export default ItemList

const Menu1 = Styled.li`
    color:#2d3741;
    font-size:24px;
    display:inline-block;
    text-decoration:none;
    list-style:none;
    margin-right:20px;
    float:left;

`
const Menu2 = Styled.li`
    color:blue;
    font-size:24px;
    display:inline-block;
    text-decoration:none;
    list-style:none;
    float:left;

`
const MenuBar = Styled.ul`
    clear:both;
    margin-bottom:70px;
`
const Menu = Styled.li`
    font-size:24px;
&:hover{
    color:#055fec;
}
`