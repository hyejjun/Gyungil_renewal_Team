import Styled from 'styled-components'
import React, { useState } from 'react'
import ItemListSell from './ItemListSell'
import ItemListAuction from './ItemListAuction'
import WebLayout from './layout/WebLayout'

const ItemList = ()=>{

    const [tabBtn, settabBtn] = useState<number>(1);

    const btn1 = () => {
        settabBtn(1);
    }
    const btn2 = () => {
        settabBtn(2);
    }

    const Menu = Styled.li`
        color:#2d3741;
        font-size:24px;
        display:inline-block;
        text-decoration:none;
        list-style:none;
        margin-right:20px;
    `

    return(
        <>
            <WebLayout>
                <ul className = "ItemListMenuBar">
                    <Menu>
                        <li className = "ItemListMenu1" onClick={btn1}>자산</li>
                    </Menu>
                    <Menu>
                        <li className = "ItemListMenu2" onClick={btn2}>경매</li>
                    </Menu>
                </ul>
                <div>
                    {
                        tabBtn === 1
                        ? <ItemListSell />
                        : <ItemListAuction />
                    }              
                </div>   
            </WebLayout>           
        </>
    )
}

export default ItemList