import Styled from 'styled-components'
import React, { useState } from 'react'

const PictureNumberNotice = Styled.div`
    color:#2d3741;
    font-size:24px;
    font-weight:bold;
    display:inline-block;
    text-decoration:none;
    list-style:none;
    margin-left:40px;
    float:left;
`
const ItemListAuction = () => {
    return(
        <>
            <div>
                
            </div>
            <PictureNumberNotice>
                경매 전체 NFT 리스트 (총 24651개 발행됨)
            </PictureNumberNotice>

        </>
    )
}

export default ItemListAuction