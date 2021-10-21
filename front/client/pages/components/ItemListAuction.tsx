import Styled from 'styled-components'
import React, { useState, useEffect } from 'react'

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
    clear:both;
`
const SelectBox = Styled.select`
    display:inline-block;
    float:right;
    height:36px;
    width:160px;
    padding:3px 7px;
    box-sizing:border-box;
`
const SelectOption = Styled.option`
    color:grey;
    height:80px;
    width:150px;
    padding:2px;
`
const NFTComponent = Styled.div`
    clear:both;
    margin-top:100px;
    background:#FAFAFA;

`
const NFTFourList = Styled.li`
    display:inline-block;
    list-style:none;
    margin-right:26px;
    margin-left:10px;
`
const NFT = Styled.li`
    border: 1px solid #bbb;
    border-radius:7px;
    height:360px;
    width:243px;
    box-sizing:border-box;
    padding:19px;
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

const MoreNFT = Styled.div`
    text-align:center;
`
const [count,setCount] = useState<number>(0)

const ItemListAuction = () => {

    interface ArrEle {
        subject: string,
        artist: string,
        Like: number,
    }

    const Arr: ArrEle[] = [
        {
            subject: 'lalaland',
            artist: 'daminal',
            Like: 0,
        },
        {
            subject: 'lalaland1',
            artist: 'daminal',
            Like: 5,
        },
        {
            subject: 'lalaland2',
            artist: 'daminal',
            Like: 5,
        },
        {
            subject: 'lalaland3',
            artist: 'daminal',
            Like: 5,
        },
        {
            subject: 'lalaland4',
            artist: 'daminal',
            Like: 5,
        },
        {
            subject: 'lalaland5',
            artist: 'daminal',
            Like: 5,
        },
        {
            subject: 'lalaland6',
            artist: 'daminal',
            Like: 5,
        },

    ]


    const nameList: JSX.Element[] = Arr.map((ele) =>
        <NFTFourList>
            <NFT>
                <NFTImg>
                    <div><img src={require('../src/지도.jpg').default} /></div>
                </NFTImg>
                <Line></Line>
                <NFTOne>
                    <NFTOneList>
                        <NFTSubject>{ele.subject}</NFTSubject>
                        <NFTartist>{ele.artist}</NFTartist>
                    </NFTOneList>
                    <NFTOneImg>
                        <img src=""></img>
                    </NFTOneImg>
                </NFTOne>
                <NFTOne>
                    <NFTOneList>
                        <NFTSubject>@ {ele.Like}</NFTSubject>
                    </NFTOneList>
                    <NFTDeclaration>
                        <NFTSubject>* * *</NFTSubject>
                    </NFTDeclaration>
                </NFTOne>
            </NFT>
        </NFTFourList>
    );

    useEffect(() => {

        let cnt0: number = 0;

        counterFn();

        function counterFn() {
            let id0 = setInterval(count0Fn, 55);
            function count0Fn() {
                cnt0++;
                setCount(cnt0)
                if (cnt0 > 50) {

                    return setCount(50)
                }

            }
        }


    }, [])

    return {
        <>
            <div>
                <PictureNumberNotice>
                    전체 NFT 리스트 (총 {count}개 발행됨)
                </PictureNumberNotice>
                <SelectBox>
                    <SelectOption>
                        최근 발행 순
                    </SelectOption>
                    <SelectOption>
                        좋아요 순
                    </SelectOption>
                </SelectBox>
            </div>
            <NFTComponent>
                <div>
                    <div>
                        <ul>
                            {nameList}

                        </ul>
                    </div>
                </div>
            </NFTComponent>
            <MoreNFT>more</MoreNFT>
        </>
    }

export default ItemListAuction