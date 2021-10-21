// view 페이지에서 NFT 사진 넣는 곳
import Styled from 'styled-components'

const NFTContent = () => {
    return (
        <>
            <NFTpic>
                NFT 사진 들어감
            </NFTpic>
        </>
    )
}
export default NFTContent

const NFTpic = Styled.div`
    width : 100%;
    height : auto;
    background : yellow;
`