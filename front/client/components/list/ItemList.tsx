import Styled from 'styled-components'
import React, { useState } from 'react'
import ItemListSell from './ItemListSell'
import ItemListAuction from './ItemListAuction'
import MyNft from './MyNFT'
import { Input, Button } from '@mui/material'

const ItemList = () => {

    const [tabBtn, settabBtn] = useState<number>(1);

    const btn1 = () => {
        settabBtn(1);
    }
    const btn2 = () => {
        settabBtn(2);
    }


    const [genderTab, setGenderTab] = useState<boolean>(false);
    const [List, setList] = useState<boolean>(false);

    const genderTabOpen = () => {
        setGenderTab(prev => !prev)
    }

    const handleList = () => {
        setList(prev => !prev)
    }

    // 0 미선택 1 여성복 2 남성복 3 아동복
    const [genderSelect, setGenderSelect] = useState<number>(0);

    const selectGender = (num) => {
        setGenderSelect(num)
    }

    const CategoryState = {
        genderTab,
        List,
        genderTabOpen,
        handleList,
        genderSelect,
        selectGender,
    }

    const [select, setSelect] = useState<string>('')

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelect(value);
    };

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
                    <SearchInner>
                        <SearchBox>
                            <Input placeholder="상품 검색" />
                        </SearchBox>
                        <SearchBox>
                            <Button variant="outlined">검색</Button>
                        </SearchBox>
                    </SearchInner>
                </Search>
            </MenuBar>
            <div>
                {
                    tabBtn === 1
                        ? <ItemListSell CategoryState={CategoryState} selectChange={selectChange}/>
                        : <ItemListAuction CategoryState={CategoryState} selectChange={selectChange}/>
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

const SearchInner = Styled.div`
    display : flex;
    gap : 10px;
`

const SearchBox = Styled.div`
    & > button {
        line-height: 1.5;
    }
`

const MenuBar = Styled.ul`
    clear:both;
    height: 100px;
`

const SellTab = Styled.div`
    cursor:pointer;
    font-size: 23px;
    color: ${props => (props.flag == 1 ? '#000000b3' : '#a0a0a0b3')};
    font-weight: ${props => (props.flag == 1 ? 'bold' : 'none')};
`

const AuctionTab = Styled.div`
    cursor:pointer;
    font-size: 23px;
    color:  ${props => (props.flag == 2 ? '#000000b3' : '#a0a0a0b3')};
    font-weight: ${props => (props.flag == 2 ? 'bold' : 'none')};

`