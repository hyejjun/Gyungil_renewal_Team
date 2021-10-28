import Styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Category from '../common/Category'
import { ItemListCSS } from './ItemListCSS'

const ItemListAuction = (props) => {
    const {
        PictureNumberNotice,
        SelectBox,
        SelectOption,
        NFTComponent,
        NFTFourList,
        NFT,
        NFTImg,
        NFTOne,
        NFTOneList,
        NFTOneImg,
        NFTDeclaration,
        NFTSubject,
        NFTartist,
        Line,
        MoreNFT,
        AStyle,
    } = ItemListCSS

    let [loading, setLoading] = useState<boolean>(true)
    let [count, setCount] = useState<number>(0)

    interface ArrEle {
        id: number,
        subject: string,
        artist: string,
        Like: number,
        url: string
    }

    const [Arr, setArr] = React.useState<ArrEle[]>([
        {
            id: 1,
            subject: 'adsfds',
            artist: 'daminal',
            Like: 0,
            url:'auction/1'
        },
        {
            id: 2,
            subject: 'adsfdsf',
            artist: 'daminal',
            Like: 5,
            url:'auction/2'
        },
        {
            id: 3,
            subject: 'adsff',
            artist: 'daminal',
            Like: 5,
            url:'auction/3'
        },
        {
            id: 4,
            subject: 'adsg',
            artist: 'daminal',
            Like: 5,
            url:'auction/4'
        },
        {
            id: 5,
            subject: 'adg',
            artist: 'daminal',
            Like: 5,
            url:'auction/5'
        },
        {
            id: 6,
            subject: 'asdgsdg',
            artist: 'daminal',
            Like: 5,
            url:'auction/6'
        },
        {
            id: 7,
            subject: 'adsg',
            artist: 'daminal',
            Like: 5,
            url:'auction/7'
        },
        {
            id: 8,
            subject: 'asdgsdg',
            artist: 'daminal',
            Like: 5,
            url:'auction/8'
        },
        {
            id: 9,
            subject: 'asdgsdg',
            artist: 'daminal',
            Like: 5,
            url:'auction/9'
        },
    ]);

    const nameList: JSX.Element[] = Arr.map((ele) =>
        <React.Fragment key={ele.id}>
            <NFTFourList>
                <NFT>
                    <Link href= {ele.url}>
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
                    url:'auction/9'
                },
                {
                    id: 8,
                    subject: 'asdgsdg',
                    artist: 'daminal',
                    Like: 5,
                    url:'auction/9'
                },
                {
                    id: 7,
                    subject: 'adsg',
                    artist: 'daminal',
                    Like: 5,
                    url:'auction/9'
                },
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
                <SelectBox onChange={props.selectChange}>
                    <SelectOption value="auction_recent">
                        최근 발행 순
                    </SelectOption>
                    <SelectOption value="auction_likes">
                        좋아요 순
                    </SelectOption>
                </SelectBox>
            </div>
            <NFTComponent>
                <Category CategoryState={props.CategoryState} />
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
