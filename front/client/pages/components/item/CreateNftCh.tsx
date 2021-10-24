import Styled from 'styled-components'
import Modal from './Modal'
import ModalBackground from '../common/ModalBackground'

const CreateNftCh = () => {
    return(
        <SizeWrapper>
            <ModalBackground>
                <Modal>
                    <div>NFT를 발행하시겠습니다.</div>
                    <div>발행하시는 NFT에 대한 <br/> 모든 책임을 본인에게 있습니다.</div>
                    <div>
                        <span>아니요</span>
                        <span>예</span>
                    </div>
                </Modal>
            </ModalBackground>
        </SizeWrapper>


    )
}

export default CreateNftCh

const SizeWrapper = Styled.div`
    margin-left:-175px;
    margin-top:-99px;
    
`