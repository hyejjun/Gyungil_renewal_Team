import BackBtn from '../../components/common/BackBtn'
import NFTPic from '../../components/view/NFTPic'
import NFTdetail from '../../components/view/sell/NFTdetail'
import MyNFTManage from '../../components/view/MyNFTManage'

const MyNft = () => {
    return (
        <>
            <BackBtn />
            <NFTPic />
            <NFTdetail>
                보내기
            </NFTdetail>
            <MyNFTManage/>

        </>
    )
}

export default MyNft
