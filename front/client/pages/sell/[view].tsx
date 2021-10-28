import BackBtn from '../../components/common/BackBtn'
import NFTPic from '../../components/view/NFTPic'
import NFTdetail from '../../components/view/sell/NFTdetail'
import {useRouter} from 'next/router'


const View = () => {

    const router = useRouter()
    const {view} = router.query // 카테고리 이름

    return (
        <>
            <BackBtn />
            <NFTPic />
            <NFTdetail>
                구매하기
            </NFTdetail>

        </>
    )
}

export default View