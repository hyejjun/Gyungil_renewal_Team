import Styled from 'styled-components'
import React, { useState } from 'react'
import ItemListSell from './ItemListSell'
import ItemListAuction from './ItemListAuction'
import WebLayout from '../layout/WebLayout'
import MyNft from './MyNFT'
import Category from '../common/Category'

const ItemList = () => {

    const [tabBtn, settabBtn] = useState<number>(1);

    const btn1 = () => {
        settabBtn(1);
    }
    const btn2 = () => {
        settabBtn(2);
    }

    const [gender,setgender] = useState(false)
    const [List,setList] = useState(false)

    const handlegender = () => {
        setgender(prev => !prev)
    }

    const handleList = () => {
        setList(prev => !prev)
    }

    const CategoryState = {
        gender,
        List,
        handlegender,
        handleList
    }


    return (
        <>  <Category CategoryState={CategoryState}/>
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
                <Search>
                    <SearchBox>
                        <Input type = "text" placeholder = "상품을 검색하세요"/>
                    </SearchBox>
                    <SearchBox>
                        <SearchClick>
                        ?
                        </SearchClick>
                    </SearchBox>
                </Search>
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

const Search = Styled.li`
    float:right;
`
const Input = Styled.input`
    display:inline-block;
    height:30px;
    width:500px;
    font-size:18px;
`
const SearchBox = Styled.div`
    float:left;
`

const SearchClick = Styled.div`
    height:34px;
    width:40px;
    border:1px solid black;
    text-align:center;
    padding:2px;
    box-sizing:border-box;
    font-size:20px;
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