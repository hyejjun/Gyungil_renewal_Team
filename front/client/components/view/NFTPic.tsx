// view 페이지에서 NFT 사진 넣는 곳
import Styled from 'styled-components'

const NFTPic = () => {
    return (
        <>
            <NFTpic>
                <img/>
            </NFTpic>
        </>
    )
}
export default NFTPic

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
