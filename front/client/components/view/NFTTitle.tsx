import Styled from 'styled-components'

const NFTTitle = ()=>{
    return(
        <>
            <NFTTitleWrap>
                <span>NFT 제목</span>
            </NFTTitleWrap>
        </>
    )
}

export default NFTTitle

const NFTTitleWrap = Styled.div`
    height: 150px;
    padding: 3% 0;
    box-sizing: border-box;
    display : flex;
    border-bottom: 1px solid rgba(20, 30, 40, 0.1);

    & > span{
        color: #2d3741;
        font-weight: 700;
        font-size: 48px;
        line-height: 64px;
        width: 100%;
        word-break: break-all;
    }
   
`