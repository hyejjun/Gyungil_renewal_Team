import Styled from 'styled-components'
import React, { useState } from 'react'
import Link from 'next/link'
import Own from './own'
import Selled from './Selled'
import Notselled from './NotSelled'

const MyNftComponent = () => {

    const [tabBtn, settabBtn] = useState<number>(1);

    const btn1 = () => {
        settabBtn(1);
    }
    const btn2 = () => {
        settabBtn(2);
    }
    
    const btn3 = () => {
        settabBtn(3);
    }

    return(
        <>  
            <MyInfo>
                <MyIMG><img src = {require('../../src/지도.jpg')}/></MyIMG>
                <MyName>원금회복</MyName>
                <MyAddress>0x454asdf5454324ewqf3dsf</MyAddress>
                <Link href = "/user/user"><MyProfile>프로필 보기</MyProfile></Link>
            </MyInfo>
            <MyNft>
                <Header>
                    <MenuBar>
                        <Menu>
                            <Menu1 onClick={btn1}>소유한 NFT</Menu1>
                        </Menu>
                        <Menu>
                            <Menu1>|</Menu1>
                        </Menu>
                        <Menu>
                            <Menu1 onClick={btn2}>판매된 NFT</Menu1>
                        </Menu>
                        <Menu>
                            <Menu1>|</Menu1>
                        </Menu>
                        <Menu>
                            <Menu1 onClick={btn3}>미판매된 NFT</Menu1>
                        </Menu>
                    </MenuBar>
                    <SelectBoxHeader>
                    
                        <SelectBox>
                            <SelectOption>
                                최근 발행 순
                            </SelectOption>
                            <SelectOption>
                                좋아요 순
                            </SelectOption>
                        </SelectBox>
                        <Notice>*KraftSpace에서 발행한 NFT만 표시합니다.</Notice>
                    </SelectBoxHeader>
                </Header>
                <Content>
                    {
                        tabBtn === 1
                            ? <Own />
                            : ( 
                                tabBtn === 2
                                ? <Selled />
                                : <Notselled />
                            )
                    }
                </Content>
            </MyNft>
        </>
    )
}

export default MyNftComponent

const MyInfo = Styled.div`
    margin:0 auto;
    width:300px;
    height:330px;
`

const MyIMG = Styled.div`
    background:#bbb;
    margin:50px auto 30px auto;
    width:100px;
    height:100px;

`

const MyAddress = Styled.div`
    color:#bbb;
    text-align:center;
    margin-bottom:20px;
`

const MyName = Styled.div`
    text-align:center;
    font-size:20px;
    font-weight:bold;
    margin-bottom:6px;

`
const MyProfile = Styled.div`
    text-align:center;
    border:1px solid #bbb;
    width:100px;
    padding:10px;
    border-box:box-sizing;
    margin:0 auto;
    cursor:pointer;

`
const MyNft = Styled.div`
    background-color: rgba( 0, 0, 0, 0.02 );
    box-sizing:border-box;
    padding:30px;
    border-radius:6px;
`

const Header = Styled.div`
    display:block;
`
const Menu = Styled.li`
color:#2d3741;
display:inline-block;
text-decoration:none;
list-style:none;
margin-right:12px;
float:left;


`
const MenuBar = Styled.ul`
clear:both;
margin-bottom:70px;
display:inline-block;
float:left;
`
const Menu1 = Styled.div`
    font-size:20px;
    cursor:pointer;
    &:hover{
        color:#055fec;
    }
`

const SelectBoxHeader = Styled.div`
    display:inline-block
    float:right;
`

const SelectBox = Styled.select`
    display:inline-block;
    float:right;
    height:38px;
    width:180px;
    padding:3px 7px;
    box-sizing:border-box;
    font-size:16px;
`
const SelectOption = Styled.option`
    color:black;
    display:inline-block;
    padding:5px;
    
`

const Content = Styled.div`
    clear:both;
`

const Notice = Styled.div`
    display:inline-block;
    float:right;
    color:grey;
    margin-top:10px;
    margin-right:10px;
    font-size:14px;
`

const NFTFourList = Styled.ul`
    display:inline-block;
    list-style:none;
    margin-right:20px;
    margin-left:11px;
    
`
const NFT = Styled.li`
    border: 1px solid #bbb;
    border-radius:7px;
    height:360px;
    width:243px;
    box-sizing:border-box;
    padding:19px;
    margin-bottom:20px;
    box-shadow:3px 3px 10px #bbb;
`
const NFTImg = Styled.div`
    background:#bbb;
    width:200px;
    height:200px;
`

const NFTOne = Styled.ul`
    padding:0px;
    clear:both;
`

const NFTOneList = Styled.li`
    display:inline-block;
    list-style:none;
    float:left;
    margin-top:18px;

`
const NFTOneImg = Styled.li`
    display:inline-block;
    list-style:none;
    float:right;
    margin-top:18px;
    background:#bbb;
    width:35px;
    height:35px;

`

const NFTDeclaration = Styled.li`
    display:inline-block;
    list-style:none;
    float:right;
    margin-top:22px;
    width:35px;
    height:35px;
    color:grey;
    font-weight:bold;
    margin-left:30px;


`
const NFTSubject = Styled.div`
    font-weight:bold;
`

const NFTartist = Styled.div`
     color:#bbb;

`
const Line = Styled.div`
    background:#bbb;
    margin-top:20px;
    height:1px;
`
