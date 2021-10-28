import Styled from 'styled-components'
import React, { useState } from 'react'
import ItemListSell from './ItemListSell'
import ItemListAuction from './ItemListAuction'
import MyNft from './MyNFT'
import { Input, Button } from '@mui/material'
import useInput from '../../hooks/useInput'
import SearchBar from './SearchBar'

const ItemList = () => {

    // @ 판매 경매 선택 버튼
    const [tabBtn, settabBtn] = useState<number>(1);

    const btn1 = () => {
        settabBtn(1);
    }
    const btn2 = () => {
        settabBtn(2);
    }

    // @ 성별 탭
    const [genderTab, setGenderTab] = useState<boolean>(false);
    const [List, setList] = useState<boolean>(false);

    const genderTabOpen = () => {
        setGenderTab(prev => !prev)
    }

    const handleList = () => {
        setList(prev => !prev)
    }

    // @ 0 미선택 1 여성복 2 남성복 3 아동복
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

    // @ 최근 발행순 좋아요 순 선택
    const [select, setSelect] = useState<string>('')

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelect(value);
    };

    // @ 검색창
    const [search, onChangeSearch] = useInput('')
    
    

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
                <SearchBar search={search} onChangeSearch={onChangeSearch}/>
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