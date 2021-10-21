// view 페이지에서 NFT 사진 넣는 곳
import Styled from 'styled-components'

const NFTContent = () => {
    return (
        <>
            <NFTpic>
                <img src="" alt="NFT 사진" />
            </NFTpic>
        </>
    )
}
export default NFTContent

const NFTpic = Styled.div`
    background : yellow;
    width: 600px;
    height: 500px;
    margin : 0 auto;
    /* background-color: rgb(255, 255, 255); */

    & > img {
        border-radius: 4px;
        width: 640px;
        height: 640px;
    }
`
