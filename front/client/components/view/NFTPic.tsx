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

    & > img {
        width : 100%;
        height : 100%;
    }
`
