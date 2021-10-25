import Styled from 'styled-components'
import Modal from './Modal'
import ModalBackground from '../common/ModalBackground'

const CancelNft = ()=>{
    return(
        <SizeWrapper>
            <ModalBackground>
                <Modal>
                    <div>NFT 발행이 완료되었습니다.</div>
                    <div>발행한 NFT를 지금 바로 확인해보세요<br/>오늘 발행 가능한 NFT 9개 남음</div>
                    <div>
                        <span>새NFT발행하기</span>
                        <span>NFT확인하기</span>
                    </div>
                </Modal>
            </ModalBackground>
        </SizeWrapper>
    )
}

export default CancelNft

const SizeWrapper = Styled.div`
    margin-left:-175px;
    margin-top:-99px;
    
`
