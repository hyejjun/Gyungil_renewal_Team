import BackBtn from './components/common/BackBtn'
import NFTContent from './components/view/NFTContent'
import NFTdetail from './components/view/NFTdetail'
import WebLayout from './components/layout/WebLayout'

const View = () => {
    return (
        <>
            <WebLayout>
                <BackBtn />
                <NFTContent />
                <NFTdetail />
            </WebLayout>
        </>
    )
}

export default View