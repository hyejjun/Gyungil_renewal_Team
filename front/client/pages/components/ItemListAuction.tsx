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
    margin-bottom:50px;
`
const SelectBox = Styled.select`
    display:inline-block;
    float:right;
    height:36px;
    width:150px;
`
const SelectOption = Styled.option`
    color:blue;
`
const NFTComponent = Styled.div`
    clear:both;
    margin-top:100px;
`

const NFTImg = Styled.div`
    background:#bbb;
    width:200px;
    height:200px;
`

const NFTFourList = Styled.li`
    display:inline-block;
    list-style:none;
    margin-right:37px;
    margin-left:30px;
`

const NFTOne = Styled.ul`
    padding:0px;
`

const NFTOneList = Styled.li`
    display:inline-block;
    list-style:none;
    float:left;
    margin-top:10px;

`
const NFTOneImg = Styled.li`
    display:inline-block;
    list-style:none;
    float:right;
    margin-top:10px;
    background:#bbb;
    width:35px;
    height:35px;

`
const ItemListAuction = () => {
    return(
        <>
            <div>
                <PictureNumberNotice>
                    경매 전체 NFT 리스트 (총 24651개 발행됨)
                </PictureNumberNotice>
                <SelectBox>
                    <select>
                    <SelectOption>
                            <option>
                                최근 발행 순
                            </option>
                    </SelectOption>
                    <SelectOption>
                            <option>
                                좋아요 순
                            </option>
                            </SelectOption>
                    </select>
                </SelectBox>
            </div>
            <NFTComponent>
                <div>
                    <div>
                        <ul>
                            <NFTFourList>
                                <li>
                                    <NFTImg>
                                        <div><img src={require('./로트와일러.jpg').default} /></div>
                                    </NFTImg>
                                    <NFTOne>
                                        <NFTOneList>
                                            <div>Hat #0</div>
                                            <div>created by yahoo</div>
                                        </NFTOneList>
                                        <NFTOneImg>
                                            <img src = ""></img>
                                        </NFTOneImg>
                                    </NFTOne>
                                </li>
                            </NFTFourList>
                            <NFTFourList>
                                <li>
                                    <NFTImg>
                                        <div><img src={require('./로트와일러.jpg').default} /></div>
                                    </NFTImg>
                                    <NFTOne>
                                        <NFTOneList>
                                            <div>Hat #0</div>
                                            <div>created by yahoo</div>
                                        </NFTOneList>
                                        <NFTOneImg>
                                            <img src = ""></img>
                                        </NFTOneImg>
                                    </NFTOne>
                                </li>
                            </NFTFourList>
                            <NFTFourList>
                                <li>
                                    <NFTImg>
                                        <div><img src={require('./로트와일러.jpg').default} /></div>
                                    </NFTImg>
                                    <NFTOne>
                                        <NFTOneList>
                                            <div>Hat #0</div>
                                            <div>created by yahoo</div>
                                        </NFTOneList>
                                        <NFTOneImg>
                                            <img src = ""></img>
                                        </NFTOneImg>
                                    </NFTOne>
                                </li>
                            </NFTFourList>
                            <NFTFourList>
                                <li>
                                    <NFTImg>
                                        <div><img src={require('./로트와일러.jpg').default} /></div>
                                    </NFTImg>
                                    <NFTOne>
                                        <NFTOneList>
                                            <div>Hat #0</div>
                                            <div>created by yahoo</div>
                                        </NFTOneList>
                                        <NFTOneImg>
                                            <img src = ""></img>
                                        </NFTOneImg>
                                    </NFTOne>
                                </li>
                            </NFTFourList>
                        </ul>
                    </div>
                </div>
            </NFTComponent>
        </>
    )
}

export default ItemListAuction