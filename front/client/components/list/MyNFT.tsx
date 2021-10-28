// 메인 페이지에 있는 새 NFT 등록하기 배너

import Styled from 'styled-components'
import Link from 'next/link'
import Button from '@mui/material/Button';

const MyNFT = ()=>{
    return(
        <>
            <MyNFTAll>
                <Menu>
                    <MenuH3>나만의 NFT를 발행해보세요</MenuH3>
                    <div>KrafterSpace에서는 누구나 쉽고 간편하게<br/>NFT를 발행하고 관리할 수 있어요.</div>
                    <Link href = "/item/additem"><a>
                        <Button variant="contained" size="large">NFT 발행하기</Button>
                        {/* <SellBtn>NFT 발행하기</SellBtn> */}
                    </a></Link>
                </Menu>
                {/* <MenuImg><img src = {require('../../src/지도.jpg')} /></MenuImg> */}
                <MenuImg> <img /> </MenuImg>
            </MyNFTAll>
            <Line></Line>
        </>
    )
}

export default MyNFT

const MyNFTAll = Styled.ul`
    height:480px;
    cursor : default;
    
`

const Menu = Styled.li`
    color:#2d3741;
    font-size:24px;
    display:inline-block;
    text-decoration:none;
    list-style:none;
    margin-right:20px;
    float:left;

    & > a {
        margin-top:100px;
        display : inline-block;
    }
    & > a > button {
        width : 200px;
        height : 50px;
        
    }

`

const MenuImg = Styled.li`
    color:#2d3741;
    font-size:24px;
    display:inline-block;
    text-decoration:none;
    list-style:none;
    margin-right:20px;
    float:right;
    background:#bbb;
    margin-top:60px;
    margin-right:50px;
    box-sizing:border-box;
    width:280px;
    height:300px;
`

const MenuH3 = Styled.h3`
    font-size:42px;
    margin-top:50px;
    margin-bottom:30px;
`
const SellBtn = Styled.button`
    margin-top:80px;
    background:#055fec;
    color:white;
    width:210px;
    height:70px;
    font-size:22px;
    border-radius:5px;
    cursor:pointer;
    &:hover{
        background:white;
        color:#055fec;
        border:1px solid #055fec;

    }
`

const Line = Styled.div`
    background:#bbb;
    margin-top:20px;
    height:1px;
    margin-bottom:50px;
    box-shadow:3px 3px 10px #bbb;
`
