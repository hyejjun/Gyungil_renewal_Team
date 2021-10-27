import Styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Category from '../common/Category'

const ItemListAuction = (props) => {
    const { gender, List, handlegender, handleList } = props.CategoryState

    let [loading, setLoading] = useState<boolean>(true)
    let [count, setCount] = useState<number>(0)

    interface ArrEle {
        id: number,
        subject: string,
        artist: string,
        Like: number,
    }

    const [Arr, setArr] = React.useState<ArrEle[]>([
        {
            id: 1,
            subject: 'adsfds',
            artist: 'daminal',
            Like: 0,
        },
        {
            id: 2,
            subject: 'adsfdsf',
            artist: 'daminal',
            Like: 5,
        },
        {
            id: 3,
            subject: 'adsff',
            artist: 'daminal',
            Like: 5,
        },
        {
            id: 4,
            subject: 'adsg',
            artist: 'daminal',
            Like: 5,
        },
        {
            id: 5,
            subject: 'adg',
            artist: 'daminal',
            Like: 5,
        },
        {
            id: 6,
            subject: 'asdgsdg',
            artist: 'daminal',
            Like: 5,
        },
        {
            id: 7,
            subject: 'adsg',
            artist: 'daminal',
            Like: 5,
        },
        {
            id: 8,
            subject: 'asdgsdg',
            artist: 'daminal',
            Like: 5,
        },
    ]);

    const nameList: JSX.Element[] = Arr.map((ele) =>
        <React.Fragment key={ele.id}>
            <NFTFourList>
                <NFT>
                    <Link href="/auction/auctionview">
                        <a>
                            <NFTImg>
                                {/* <div><img src={require('../../src/지도.jpg').default} /></div> */}
                                <div><img /></div>
                            </NFTImg>
                        </a>
                    </Link>
                    <Line></Line>
                    <NFTOne>
                        <NFTOneList>
                            <Link href="/auction/auctionview"><AStyle><NFTSubject>{ele.subject}</NFTSubject></AStyle></Link>
                            {/* <NFTSubject>{ele.subject}</NFTSubject> */}
                            <NFTartist>{ele.artist}</NFTartist>
                        </NFTOneList>
                        <NFTOneImg>
                            <img></img>
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
        </React.Fragment>
    );

    const handleClick = (): void => {
        setArr(
            Arr.concat(
                {
                    id: 7,
                    subject: 'adsg',
                    artist: 'daminal',
                    Like: 5,
                },
                {
                    id: 8,
                    subject: 'asdgsdg',
                    artist: 'daminal',
                    Like: 5,
                },
                {
                    id: 7,
                    subject: 'adsg',
                    artist: 'daminal',
                    Like: 5,
                },
                {
                    id: 8,
                    subject: 'asdgsdg',
                    artist: 'daminal',
                    Like: 5,
                }
            ),
        );
    };


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

        return () => setLoading(false);

    }, [])

    return (
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
                <Category CategoryState={props.CategoryState}/>
                <div>
                    <div>
                        <ul>
                            {nameList}
                        </ul>
                    </div>
                </div>
            </NFTComponent>
            <MoreNFT onClick={handleClick}>more</MoreNFT>
        </>
    )
}

export default ItemListAuction

const PictureNumberNotice = Styled.div`
    color:#2d3741;
    font-size:24px;
    font-weight:bold;
    display:inline-block;
    text-decoration:none;
    list-style:none;
    float:left;
    margin-bottom:50px;
    clear:both;
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
const NFTComponent = Styled.div`
    clear:both;
    background:#FAFAFA;
    box-sizing:border-box;
    display : flex;

    & > div:nth-child(2){
        display : inline-block;
        width : 80%;
        padding-left: 10%;
        box-sizing: border-box;
    }
`
const NFTFourList = Styled.ul`
    display:inline-block;
    list-style:none;
    margin-right:9px;
    margin-left:10px;
`
const NFT = Styled.li`
    border: 1px solid #bbb;
    border-radius:7px;
    height:360px;
    width:243px;
    box-sizing:border-box;
    padding:19px;
    margin-bottom:20px;
    &:hover{box-shadow:3px 3px 10px #bbb;}
`
const NFTImg = Styled.div`
    background:#bbb;
    width:200px;
    height:200px;
    cursor:pointer;
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
    padding:10px;
    font-size:26px;
    box-sizing:border-box;
    width:150px;
    height:60px;
    color:grey;
    border:1px solid #bbb;
    border-radius:5px;
    background:white;
    margin:0 auto;
    margin-bottom:120px;
    margin-top:50px;
    cursor:pointer;
    &:hover{
        background:#bbb;
        color:white;
        transition:all 1s ease 0;
        
    }
    
`

const LikeSize = Styled.div`
    width:50px;
    height:50px;
`

const AStyle = Styled.a`
    text-decoration:none;
`