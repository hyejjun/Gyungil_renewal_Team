import Styled from 'styled-components'
import Modal from './Modal'
import ModalBackground from '../common/ModalBackground'

const CancelNft = ()=>{
    return(
        <SizeWrapper>
            <ModalBackground>
                <Modal>
                    <div>NFT 발행을 취소할까요?</div>
                    <div>입력한 정보는 따로 저장되지 않습니다.</div>
                    <div>
                        <span>아니요</span>
                        <span>예</span>
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
