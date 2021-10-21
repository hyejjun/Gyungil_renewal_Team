// 메인 페이지에 있는 새 NFT 등록하기 배너

import Styled from 'styled-components'
import Link from 'next/link'

const Menu = Styled.li`
color:#2d3741;
font-size:24px;
display:inline-block;
text-decoration:none;
list-style:none;
margin-right:20px;
float:left;

`

const MenuImg = Styled.li`
    color:#2d3741;
    font-size:24px;
    display:inline-block;
    text-decoration:none;
    list-style:none;
    margin-right:20px;
    float:right;
`

const MenuH3 = Styled.h3`
    font-size:42px;
`
const SellBtn = Styled.button`
    margin-top:80px;
    background:#055fec;
`

const MyNFT = ()=>{
    return(
        <ul>
            <Menu>
                <MenuH3>나만의 NFT를 발행해보세요</MenuH3>
                <div>KrafterSpace에서는 누구나 쉽고 간편하게<br/>NFT를 발행하고 관리할 수 있어요.</div>
                <Link href = "/view"><SellBtn>NFT 발행하기</SellBtn></Link>
            </Menu>
            <MenuImg><img src = {require('../src/지도.jpg')} /></MenuImg>
        </ul>
    )
}

export default MyNFT