// view 페이지에서 NFT 사진 넣는 곳
import Styled from 'styled-components'
import SlideItem from './SlideItem'

const NFTPic = () => {

    return (
        <>
            <NFTpic>
                <SlideItem/>
            </NFTpic>
        </>
    )
}
export default NFTPic

const NFTpic = Styled.div`
    /* background : yellow; */
    width : 1200px;
    height: 500px;
    margin : 0 auto;
`
