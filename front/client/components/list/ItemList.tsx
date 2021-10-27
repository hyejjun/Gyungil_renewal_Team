import Styled from 'styled-components'
import React, { useState } from 'react'
import ItemListSell from './ItemListSell'
import ItemListAuction from './ItemListAuction'
import MyNft from './MyNFT'

const ItemList = () => {

    const [tabBtn, settabBtn] = useState<number>(1);

    const btn1 = () => {
        settabBtn(1);
    }
    const btn2 = () => {
        settabBtn(2);
    }


    const [gender, setgender] = useState(false)
    const [List, setList] = useState(false)

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
        <>
            <MyNft />
            <MenuBar>
                <Menu>
                    <SellTab onClick={btn1} flag={tabBtn}>판매</SellTab>
                </Menu>
                <Menu>
                    <div className="bar">|</div>
                </Menu>
                <Menu>
                    <AuctionTab onClick={btn2} flag={tabBtn}>경매</AuctionTab>
                </Menu>
                <Search>
                    <SearchBox>
                        <Input type="text" placeholder="상품을 검색하세요" />
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
                        ? <ItemListSell CategoryState={CategoryState}/>
                        : <ItemListAuction CategoryState={CategoryState}/>
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

    .bar {
        cursor : default;
        font-size: 20px;
    }
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
    height: 100px;
`
const Menu1 = Styled.div`
    font-size:24px;
    cursor:pointer;
    &:hover{
        color:#055fec;
    }
`

const SellTab = Styled.div`
    cursor:pointer;
    font-size: 23px;
    color: ${props=>(props.flag == 1? '#000000b3' : '#a0a0a0b3')};
    font-weight: ${props=>(props.flag == 1? 'bold' : 'none')};
`

const AuctionTab = Styled.div`
    cursor:pointer;
    font-size: 23px;
    color:  ${props=>(props.flag == 2? '#000000b3' : '#a0a0a0b3')};
    font-weight: ${props=>(props.flag == 2? 'bold' : 'none')};

`