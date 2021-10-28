import BackBtn from "../../components/common/BackBtn"
import NFTPic from "../../components/view/NFTPic"
import NFTAuction from "../../components/view/auction/NFTAuction"
import {useRouter} from 'next/router'

const AuctionView = () =>{
    const router = useRouter()
    const {view} = router.query // 카테고리 이름
    return(
        <>
            <BackBtn/>
            <NFTPic/>
            <NFTAuction/>
        </>
    )
}

export default AuctionView